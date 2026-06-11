import { Hero } from "@/components/sections/Hero"
import { Discover } from "@/components/sections/Discover"
import { Categories } from "@/components/sections/Categories"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { FeaturedBanner } from "@/components/sections/FeaturedBanner"
import { ProductGrid } from "@/components/sections/ProductGrid"
import { StoreFeatures } from "@/components/sections/StoreFeatures"
import { Testimonials } from "@/components/sections/Testimonials"
import { SmileCTA } from "@/components/sections/SmileCTA"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Discover />
      <Categories />
      <HowItWorks />
      <FeaturedBanner />
      <ProductGrid />
      <StoreFeatures />
      <Testimonials />
      <SmileCTA />
    </div>
  );
}
