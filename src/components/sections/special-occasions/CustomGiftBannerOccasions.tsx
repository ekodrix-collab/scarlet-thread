import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function CustomGiftBannerOccasions() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">

        <div className="relative overflow-hidden rounded-[22px] min-h-[280px] md:min-h-[340px]">

          {/* Background Image */}
          <Image
            src="/images/banners/custom-gift-banner.png"
            alt="Custom Gift Banner"
            fill
            priority
            className="object-cover"
          />

          {/* Light Overlay */}
          <div className="absolute inset-0 bg-[#F6EDFF]/10" />

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-[520px] px-8 md:px-14 py-10">

              <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#2C1844] leading-tight mb-4">
                Can't Find The Perfect Gift For
                <br />
                Your Special Occasion?
              </h2>

              <p className="text-[#4A3266] text-base md:text-lg leading-relaxed mb-8 max-w-[450px]">
                We create custom gifts for any festival or celebration.
                <br />
                Share your idea and we'll bring it to life!
              </p>

              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white rounded-xl px-8 h-12 font-semibold"
              >
                Create Custom Gift
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}