import Link from "next/link";
import Logo from "./logo";
import { Github, Twitter, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-stone-50 via-orange-50/20 to-stone-100 border-t border-stone-200 overflow-hidden">
      {/* Animated floating ingredients background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 animate-float-slow text-6xl opacity-20">🥕</div>
        <div className="absolute top-20 right-20 animate-float-medium text-6xl opacity-20" style={{ animationDelay: '0.5s' }}>🍅</div>
        <div className="absolute bottom-20 left-1/4 animate-float-slow text-6xl opacity-20" style={{ animationDelay: '1s' }}>🥬</div>
        <div className="absolute top-1/3 right-1/3 animate-float-medium text-6xl opacity-20" style={{ animationDelay: '1.5s' }}>🧄</div>
        <div className="absolute bottom-32 right-10 animate-float-slow text-6xl opacity-20" style={{ animationDelay: '2s' }}>🌶️</div>
        <div className="absolute top-40 left-1/2 animate-float-medium text-6xl opacity-20" style={{ animationDelay: '2.5s' }}>🥔</div>
        <div className="absolute bottom-10 left-1/3 animate-float-slow text-6xl opacity-20" style={{ animationDelay: '3s' }}>🧅</div>
        <div className="absolute top-1/2 right-1/4 animate-float-medium text-6xl opacity-20" style={{ animationDelay: '3.5s' }}>🫑</div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section with enhanced styling */}
          <div className="md:col-span-1">
            <div className="mb-4 transform hover:scale-105 transition-transform duration-300">
              <Logo size="md" animated={true} />
            </div>
            <p className="mt-4 text-sm text-stone-600 leading-relaxed">
              Your personal AI chef assistant. Transform ingredients into delicious recipes, 
              manage your pantry, and discover culinary possibilities.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a 
                href="https://github.com/ankitmaurya-12" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-stone-600 hover:text-orange-500 hover:scale-110 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-stone-600 hover:text-orange-500 hover:scale-110 transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-stone-600 hover:text-orange-500 hover:scale-110 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contact@yourchef.com" 
                className="text-stone-600 hover:text-orange-500 hover:scale-110 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-bold text-stone-900 mb-4 text-lg">Product</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/recipes" className="text-stone-600 hover:text-orange-500 hover:translate-x-1 inline-block transition-all duration-200">
                  → Recipes
                </Link>
              </li>
              <li>
                <Link href="/pantry" className="text-stone-600 hover:text-orange-500 hover:translate-x-1 inline-block transition-all duration-200">
                  → Pantry Manager
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-stone-600 hover:text-orange-500 hover:translate-x-1 inline-block transition-all duration-200">
                  → Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-stone-600 hover:text-orange-500 hover:translate-x-1 inline-block transition-all duration-200">
                  → Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-stone-900 mb-4 text-lg">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-stone-600 hover:text-orange-500 hover:translate-x-1 inline-block transition-all duration-200">
                  → About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-stone-600 hover:text-orange-500 hover:translate-x-1 inline-block transition-all duration-200">
                  → Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-stone-600 hover:text-orange-500 hover:translate-x-1 inline-block transition-all duration-200">
                  → Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-stone-600 hover:text-orange-500 hover:translate-x-1 inline-block transition-all duration-200">
                  → Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-bold text-stone-900 mb-4 text-lg">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/help" className="text-stone-600 hover:text-orange-500 hover:translate-x-1 inline-block transition-all duration-200">
                  → Help Center
                </Link>
              </li>
              <li>
                <Link href="/api" className="text-stone-600 hover:text-orange-500 hover:translate-x-1 inline-block transition-all duration-200">
                  → API Docs
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-stone-600 hover:text-orange-500 hover:translate-x-1 inline-block transition-all duration-200">
                  → Community
                </Link>
              </li>
              <li>
                <Link href="/newsletter" className="text-stone-600 hover:text-orange-500 hover:translate-x-1 inline-block transition-all duration-200">
                  → Newsletter
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with gradient border */}
        <div className="pt-8 border-t border-gradient-to-r from-transparent via-orange-200 to-transparent">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-stone-600 flex items-center gap-2">
              © {new Date().getFullYear()} YourChef. Crafted with 
              <span className="text-red-500 animate-pulse">❤️</span> 
              in India 🇮🇳
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="text-stone-600 hover:text-orange-500 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-stone-600 hover:text-orange-500 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-stone-600 hover:text-orange-500 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}