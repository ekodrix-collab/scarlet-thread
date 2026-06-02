import { Hero } from "@/components/sections/Hero"
import { Categories } from "@/components/sections/Categories"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { FeaturedBanner } from "@/components/sections/FeaturedBanner"
import { ProductGrid } from "@/components/sections/ProductGrid"
import { Testimonials } from "@/components/sections/Testimonials"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Categories />
      <HowItWorks />
      <FeaturedBanner />
      <ProductGrid />
      <Testimonials />
    </div>
  );
}
