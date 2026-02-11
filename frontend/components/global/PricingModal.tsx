"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import PricingSection from "./PricingSection";
import { Sparkles, Check } from "lucide-react";

interface PricingModalProps {
  subscriptionTier?: string;
  children: React.ReactNode;
}

export default function PricingModal({
  subscriptionTier = "free",
  children,
}: PricingModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  //   const canOpen = subscriptionTier === "free";

  const isPro = subscriptionTier === "pro";

  const handleOpenChange = (open: boolean) => {
    // Prevent opening modal if user is already Pro
    if (isPro && open) {
      return;
    }
    setIsOpen(open);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild disabled={isPro}>
        {children}
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-5xl max-h-[90vh] p-0 overflow-hidden">
        <div className="p-4 sm:p-6 lg:p-8">
          <DialogTitle className="sr-only">Subscription Plan</DialogTitle>
            <PricingSection />
        </div>
      </DialogContent>
    </Dialog>
  );
}
