import Footer from "@/components/global/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { auth } from "@clerk/nextjs/server";
import { ArrowRight, Flame } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const { has } = await auth();

  const subscriptionTier = has({ plan: "pro" }) ? "pro" : "free";

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto ">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="flex-1 text-center md:text-left">
              <Badge
                variant="outline"
                className="border-2 border-orange-500 text-orange-700 bg-orange-200 text-sm font-bold mb-6 uppercase tracking-wide"
              >
                <Flame className="mr-1" />
                #1 AI Cooking Assistant
              </Badge>

              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[0.9]">
                {" "}
                Turn your{" "}
                <span className="italic underline decoration-4 text-orange-600">
                  leftovers
                </span>{" "}
                into <br /> masterpieces.
              </h1>

              <p className="text-lg md:text-xl text-stone-700 mb-8 max-w-2xl mx-auto md:mx-0 font-light">
                Snap a photo of your fridge. We&apos;ll tell you what to cook.
                Save money, reduce waste, and eat better. All powered by AI.
              </p>

              <Link href={"/dashboard"}>
                <Button
                  size="lg"
                  variant="default"
                  className="px-8 py-6 text-lg"
                >
                  Start Cooking Free <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>

              <p className="mt-4 text-sm text-stone-500">
                <span className="font-bold text-stone-900">10k+ cooks</span>{" "}
                joined last month
              </p>
            </div>

            <Card className="relative aspect-square md:aspect-4/5 border-4 border-stone-900 bg-stone-200 overfl  py-0 shadow-lg">
                <Image 
                src="/khichadi.jpg"
                alt="Delicious pasta dish made from leftovers"
                width={500}
                height={500}
                className="object-cover object-center w-full h-full"
                />
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
