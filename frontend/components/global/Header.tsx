import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import Link from "next/link";
import Logo from "../global/logo";
import { Cookie, Refrigerator } from "lucide-react";
import UserDropdown from "./UserDropdown";

export default async function Header() {
  const user = null; // Replace with actual user fetching logic if needed

  return (
    <header className="fixed top-0 w-full border-b border-stone-200 bg-stone-50/80 backdrop-blur-sm z-50 supports-backdrop-blur:bg-stone-50/90">
      <nav className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link href={user ? "/dashboard" : "/"}>
          <Logo />
        </Link>

        <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-stone-700">
          <Link
            href="/recipes"
            className="hover:text-orange-500 transition-colors flex items-center space-x-1 gap-1.5"
          >
            <Cookie className="w-4 h-4" /> Recipes
          </Link>
          <Link
            href="pantry"
            className="hover:text-orange-500 transition-colors flex items-center space-x-1 gap-1.5"
          >
            <Refrigerator className="w-4 h-4" /> Pantry
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <SignedIn>
            <UserDropdown/>
          </SignedIn>

          <SignedOut>
            <Link href="/sign-in">
              <Button
                variant="ghost"
                className="hover:text-orange-500 transition-colors"
              >
                Sign In
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button className="bg-orange-500 hover:bg-orange-600 shadow-lg shadow-orange-500/30 hover:shadow-orange-600/40 transition-all">
                Get Started
              </Button>
            </Link>
          </SignedOut>
        </div>
      </nav>
    </header>
  );
}
