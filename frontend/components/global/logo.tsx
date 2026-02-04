import Link from "next/link";
import { ChefHat } from "lucide-react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  animated?: boolean;
}

export default function Logo({ className = "", size = "md", animated = true }: LogoProps) {
  const sizes = {
    sm: {
      text: "text-base",
      chef: "text-xl",
      hat: "w-4 h-4 -top-3",
    },
    md: {
      text: "text-xl",
      chef: "text-2xl",
      hat: "w-5 h-5 -top-4",
    },
    lg: {
      text: "text-2xl",
      chef: "text-3xl",
      hat: "w-6 h-6 -top-5",
    },
  };

  const currentSize = sizes[size];

  return (
    <div 
      className={`group relative flex items-center gap-1 ${currentSize.text} font-bold tracking-tight ${className}`}
    >
      <span className="text-stone-800 transition-colors group-hover:text-stone-600">
        Your
      </span>
      <span className="relative inline-flex items-center">
        {/* Animated Chef Hat */}
        <ChefHat 
          className={`absolute left-0 ${currentSize.hat} text-orange-500 transition-all duration-500 ease-out ${
            animated ? "group-hover:animate-bounce group-hover:text-orange-600" : ""
          }`}
          style={{ 
            transform: 'rotate(-15deg)',
            filter: 'drop-shadow(0 2px 4px rgba(249, 115, 22, 0.2))'
          }}
        />
        {/* Chef Text */}
        <span className="pl-0.5">
          <span className={`${currentSize.chef} font-extrabold text-orange-500 transition-colors ${
            animated ? "group-hover:text-orange-600" : ""
          }`}>
            C
          </span>
          <span className={`text-stone-800 transition-colors ${
            animated ? "group-hover:text-stone-600" : ""
          }`}>
            hef
          </span>
        </span>
      </span>
    </div>
  );
}