import { auth, currentUser } from "@clerk/nextjs/server";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

interface StrapiRole {
    id: number;
    type: string;
    name: string;
}

interface StrapiUser {
    id: number;
    username: string;
    email: string;
    clerkId: string;
    first_name: string;
    last_name: string;
    image_url: string;
    subscriptionTier: string;
}

export const checkUser = async (): Promise<StrapiUser | null> => {
    const user = await currentUser();

    if (!user) {
        console.log("No user found");
        return null;
    }

    const {has} = await auth();
    const subscriptionTier = has({plan: "pro"}) ? "pro" : "free";
    // const subscriptionTier = "free"; //pricing logic to be implemented


    try {
        //check if user exists in strapi
        const existingUserResponse = await fetch(`${STRAPI_URL}/api/users?filters[clerkId][$eq]=${user.id}`, {
            headers: {
                Authorization: `Bearer ${STRAPI_API_TOKEN}`,
            },
            cache: "no-store",
        });

        if(!existingUserResponse.ok) {
            const errorText = await existingUserResponse.text();
            console.error("Error fetching user from Strapi:", errorText);
            return null;
        }

        const existingUserData = await existingUserResponse.json();

        if(existingUserData.length > 0){
            const existingUser = existingUserData[0];

            if(existingUser.subscriptionTier !== subscriptionTier){
                //update subscription tier in strapi
                await fetch(`${STRAPI_URL}/api/users/${existingUser.id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${STRAPI_API_TOKEN}`,
                    },
                    body: JSON.stringify({
                        data: {
                            subscriptionTier,
                        }
                    }),
                });
            }

            return {...existingUser, subscriptionTier};
        }
        
        //create new user in strapi
        const rolesResponse = await fetch(`${STRAPI_URL}/api/users-permissions/roles`, {
            headers: {
                Authorization: `Bearer ${STRAPI_API_TOKEN}`,
            },
        });

        const rolesData = await rolesResponse.json();

        const authenticatedRole = rolesData.roles.find((role: StrapiRole) => role.type === "authenticated");
        
        if(!authenticatedRole){
            console.error("Authenticated role not found in Strapi");
            return null;
        }

        // create new user in strapi
        const userData = {
            username:
                user.username || user.emailAddresses[0].emailAddress.split("@")[0],
            email: user.emailAddresses[0].emailAddress,
            password: `clerk_managed_${user.id}_${Date.now()}`,
            confirmed: true,
            blocked: false,
            role: authenticatedRole.id,
            clerkId: user.id,
            first_name: user.firstName || "",
            last_name: user.lastName || "",
            image_url: user.imageUrl || "",
            subscriptionTier,
        };

        const newUserResponse = await fetch(`${STRAPI_URL}/api/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${STRAPI_API_TOKEN}`,
            },
            body: JSON.stringify(userData),
        }); 

        if(!newUserResponse.ok){
            const errorText = await newUserResponse.text();
            console.error("Error creating user in Strapi:", errorText);
            return null;
        }

        const newUser = await newUserResponse.json();
        return newUser;

    } catch (error) {
        console.error("❌ Error in checkUser function:", error);
        return null;
    }
};