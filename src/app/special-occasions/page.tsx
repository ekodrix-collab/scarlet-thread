import { HeroOccasions } from "@/components/sections/special-occasions/HeroOccasions"
import { CategoryIconsOccasions } from "@/components/sections/special-occasions/CategoryIconsOccasions"
import { ProductCarouselOccasions } from "@/components/sections/special-occasions/ProductCarouselOccasions"
import { MidValuePropsOccasions } from "@/components/sections/special-occasions/MidValuePropsOccasions"
import { FestivalCollectionsGrid } from "@/components/sections/special-occasions/FestivalCollectionsGrid"
import { HowItWorksOccasions } from "@/components/sections/special-occasions/HowItWorksOccasions"
import { WhyShopOccasions } from "@/components/sections/special-occasions/WhyShopOccasions"
import { TestimonialsOccasions } from "@/components/sections/special-occasions/TestimonialsOccasions"
import { CustomGiftBannerOccasions } from "@/components/sections/special-occasions/CustomGiftBannerOccasions"

export default function SpecialOccasionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroOccasions />
      <CategoryIconsOccasions />
      <ProductCarouselOccasions />
      <MidValuePropsOccasions />
      <FestivalCollectionsGrid />
      {/*<HowItWorksOccasions />*/}
      {/*<WhyShopOccasions />*/}
      <TestimonialsOccasions />
      <CustomGiftBannerOccasions />
    </div>
  )
}
