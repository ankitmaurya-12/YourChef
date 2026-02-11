import Footer from "@/components/global/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { auth } from "@clerk/nextjs/server";
import {
  ArrowRight,
  Sparkles,
  ChefHat,
  Users,
  Clock,
  Star,
} from "lucide-react";
import { SITE_STATS, FEATURES, HOW_IT_WORKS_STEPS } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import PricingSection from "@/components/global/PricingSection";

export default async function Page() {
  const { has } = await auth();

  const subscriptionTier = has({ plan: "pro" }) ? "pro" : "free";

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,146,60,0.1),transparent_50%)]" />

        <div className="container relative mx-auto px-4 py-20 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              {/* Badge */}
              <Badge
                variant="outline"
                className="border-orange-200 bg-orange-50 text-orange-700 px-4 py-1.5 text-sm font-medium inline-flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5" />
                AI-Powered Recipe Platform
              </Badge>

              {/* Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]">
                  Cook Smarter,
                  <br />
                  <span className="text-orange-500">Waste Less</span>
                </h1>

                <p className="text-lg text-gray-600 max-w-xl leading-relaxed pt-2">
                  Transform your pantry ingredients into delicious meals with
                  AI-powered recipe suggestions. No more food waste, just
                  culinary inspiration.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 h-12 text-base font-medium shadow-lg shadow-orange-500/25"
                  asChild
                >
                  <Link href="/recipes">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 hover:bg-gray-50 px-8 h-12 text-base font-medium"
                >
                  See How It Works
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-orange-500" />
                  <span className="font-medium text-gray-900">
                    10,000+ Users
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
                  <span className="font-medium text-gray-900">
                    4.9/5 Rating
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-orange-500" />
                  <span className="font-medium text-gray-900">
                    Free Forever Plan
                  </span>
                </div>
              </div>
            </div>

            {/* Right Content - Featured Image */}
            <div className="relative lg:h-[600px] flex items-center justify-center">
              {/* Main featured image */}
              <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/veg_thali.jpg"
                  alt="Delicious meal created with YourChef"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Floating card - Generated Today (Top Right) */}
              <div className="absolute top-0 right-0 lg:right-[-20px] bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <ChefHat className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 font-medium whitespace-nowrap">
                      Generated Today
                    </p>
                    <p className="text-2xl font-bold text-gray-900">2,847</p>
                  </div>
                </div>
              </div>

              {/* Floating card - Zero Waste (Bottom Left) */}
              <div className="absolute bottom-0 left-0 lg:left-[-20px] bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 font-medium whitespace-nowrap">
                      Zero Waste
                    </p>
                    <p className="text-2xl font-bold text-gray-900">100%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <Badge
              variant="outline"
              className="border-orange-200 bg-orange-50 text-orange-700 px-4 py-1.5 text-sm font-medium inline-flex items-center gap-2"
            >
              Recipe Inspiration
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Discover What's Possible
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                src: "/khichadi.jpg",
                title: "Indian Comfort",
                category: "Traditional",
              },
              {
                src: "/Pasta.jpg",
                title: "Italian Classic",
                category: "Pasta",
              },
              {
                src: "/veg_salad.jpg",
                title: "Fresh & Healthy",
                category: "Salads",
              },
              {
                src: "/veg_thali.jpg",
                title: "Complete Meal",
                category: "Thali",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                {/* Image container */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                {/* Text overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="space-y-1">
                    <p className="text-orange-400 text-xs font-medium uppercase tracking-wider">
                      {item.category}
                    </p>
                    <h3 className="text-white text-xl font-bold">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white border-y border-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {SITE_STATS.map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-4xl lg:text-5xl font-bold mb-2 text-orange-600 group-hover:scale-110 transition-transform duration-300">
                  {stat.val}
                </div>
                <div className="text-sm lg:text-base text-stone-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-orange-100 text-orange-700 border-orange-300 text-sm font-bold px-4 py-2">
              POWERFUL FEATURES
            </Badge>
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-stone-900 to-stone-600 bg-clip-text text-transparent">
              Everything You Need
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Cutting-edge AI technology meets intuitive design to revolutionize
              your cooking experience.
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

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Kitchen?
          </h2>
          <p className="text-xl text-orange-50 mb-10 max-w-2xl mx-auto">
            Join thousands of home cooks who are already reducing food waste and
            discovering amazing recipes.
          </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              variant="secondary"
              className="px-10 py-6 text-lg font-semibold bg-white text-orange-600 hover:bg-stone-50 shadow-xl hover:shadow-2xl transition-all duration-200"
            >
              Get Started for Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <p className="text-orange-100 text-sm mt-6">
            No credit card required • Free forever plan available
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-4 bg-white">
        <PricingSection subscriptionTier={subscriptionTier} />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
