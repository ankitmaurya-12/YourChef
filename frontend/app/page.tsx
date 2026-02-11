import Footer from "@/components/global/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { auth } from "@clerk/nextjs/server";
import { ArrowRight, Sparkles, Zap, Shield, TrendingUp } from "lucide-react";
import { SITE_STATS, FEATURES, HOW_IT_WORKS_STEPS } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import PricingSection from "@/components/global/PricingSection";

export default async function Page() {
  const { has } = await auth();

  const subscriptionTier = has({ plan: "pro" }) ? "pro" : "free";

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-stone-50">
      {/* Hero Section - Completely New Design */}
      <section className="relative pt-20 pb-32 px-4 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full mb-6 shadow-lg">
              <Sparkles className="w-5 h-5" />
              <span className="font-bold text-sm uppercase tracking-wider">Powered by Advanced AI</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              Your Kitchen,
              <br />
              Reimagined
            </h1>

            <p className="text-xl md:text-2xl text-stone-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Transform forgotten ingredients into culinary masterpieces. 
              <span className="font-semibold text-orange-600"> AI-powered recipes</span> that adapt to what you have.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="px-10 py-7 text-lg font-bold bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <div className="flex items-center gap-2 text-stone-600">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium">No credit card required</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-orange-500" />
                <span className="font-semibold">Instant Results</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-orange-500" />
                <span className="font-semibold">10k+ Active Users</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-orange-500" />
                <span className="font-semibold">AI-Powered</span>
              </div>
            </div>
          </div>

          {/* Image Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            <Card className="relative overflow-hidden group cursor-pointer border-4 border-stone-200 hover:border-orange-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <Image
                src="/khichadi.jpg"
                alt="Masala Khichadi"
                width={300}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-bold text-lg">Masala Khichadi</p>
              </div>
            </Card>

            <Card className="relative overflow-hidden group cursor-pointer border-4 border-stone-200 hover:border-orange-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <Image
                src="/Pasta.jpg"
                alt="Gourmet Pasta"
                width={300}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-bold text-lg">Gourmet Pasta</p>
              </div>
            </Card>

            <Card className="relative overflow-hidden group cursor-pointer border-4 border-stone-200 hover:border-orange-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <Image
                src="/veg_salad.jpg"
                alt="Fresh Veg Salad"
                width={300}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-bold text-lg">Fresh Salad</p>
              </div>
            </Card>

            <Card className="relative overflow-hidden group cursor-pointer border-4 border-stone-200 hover:border-orange-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <Image
                src="/veg_thali.jpg"
                alt="Complete Thali"
                width={300}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-bold text-lg">Veg Thali</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section - New Gradient Design */}
      <section className="py-16 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-4 relative z-10">
          {SITE_STATS.map((stat, i) => (
            <div key={i} className="group">
              <div className="text-5xl md:text-6xl font-black mb-2 text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                {stat.val}
              </div>
              <div className="text-orange-100 text-sm md:text-base uppercase tracking-widest font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features - Revamped Card Design */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-orange-100 text-orange-700 border-orange-300 text-sm font-bold px-4 py-2">
              POWERFUL FEATURES
            </Badge>
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-stone-900 to-stone-600 bg-clip-text text-transparent">
              Everything You Need
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Cutting-edge AI technology meets intuitive design to revolutionize your cooking experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card
                  key={index}
                  className="relative border-2 border-stone-200 hover:border-orange-500 bg-gradient-to-br from-white to-orange-50/30 hover:shadow-2xl transition-all duration-300 group overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-bl-full"></div>
                  
                  <CardContent className="p-8 relative z-10">
                    <div className="mb-6 inline-block">
                      <div className="bg-gradient-to-br from-orange-500 to-red-500 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <Badge
                      variant="secondary"
                      className="mb-4 bg-orange-100 text-orange-700 border-orange-200 text-xs font-bold"
                    >
                      {feature.limit}
                    </Badge>
                    
                    <h3 className="text-2xl font-bold mb-3 text-stone-900">
                      {feature.title}
                    </h3>
                    <p className="text-stone-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works - Vertical Timeline Design */}
      <section className="py-24 px-4 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-red-500 text-white border-none text-sm font-bold px-4 py-2">
              SIMPLE PROCESS
            </Badge>
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-stone-900">
              From Fridge to Feast
            </h2>
            <p className="text-xl text-stone-600">
              Three effortless steps to culinary excellence
            </p>
          </div>

          <div className="space-y-0">
            {HOW_IT_WORKS_STEPS.map((item, i) => (
              <div key={i} className="relative">
                <div className="flex gap-8 items-start">
                  {/* Step Number Circle */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-xl">
                      <span className="text-4xl font-black text-white">
                        {item.step}
                      </span>
                    </div>
                    {i < HOW_IT_WORKS_STEPS.length - 1 && (
                      <div className="absolute left-1/2 top-24 w-1 h-32 bg-gradient-to-b from-orange-500 to-red-500 transform -translate-x-1/2"></div>
                    )}
                  </div>

                  {/* Content */}
                  <Card className="flex-1 border-2 border-stone-200 hover:border-orange-500 transition-all duration-300 hover:shadow-xl mb-16">
                    <CardContent className="p-8">
                      <h3 className="text-3xl font-bold mb-4 text-stone-900">
                        {item.title}
                      </h3>
                      <p className="text-lg text-stone-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section - NEW */}
      <section className="py-24 px-4 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Join Thousands of Happy Cooks
          </h2>
          <p className="text-xl text-orange-100 mb-12">
            Don&apos;t let your ingredients go to waste. Start creating amazing meals today.
          </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              variant="secondary"
              className="px-12 py-7 text-lg font-bold bg-white text-orange-600 hover:bg-stone-100 shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Pricing - Keeping Original */}
      <section className="py-24 px-4 bg-white">
        <PricingSection subscriptionTier={subscriptionTier} />
      </section>

      {/* Footer - Keeping Original */}
      <Footer />
    </div>
  );
}
