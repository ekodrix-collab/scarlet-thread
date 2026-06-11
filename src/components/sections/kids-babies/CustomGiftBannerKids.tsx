 import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CustomGiftBannerKids() {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="bg-primary rounded-[20px] sm:rounded-[32px] relative overflow-hidden flex flex-col md:flex-row items-stretch justify-between text-white shadow-xl min-h-[200px] sm:min-h-[220px] px-4 sm:px-8 md:px-12 lg:px-20">

          {/* Left Teddy Bear Image — hidden on mobile, shown md+ */}
          <div className="hidden md:block flex-shrink-0 w-48 md:w-64 lg:w-72 relative self-end">
            <img
              src="/images/scarlet-bottombanner1.png"
              alt="Teddy bear with Dream Big shirt"
              className="w-full h-full object-contain object-top"
            />
          </div>

          {/* Center Content */}
          <div className="flex-1 relative z-10 text-center flex flex-col items-center justify-center py-8 sm:py-10 px-2 sm:px-6">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 leading-snug">
              Create a Gift as Unique as Their Smile
            </h2>
            <p className="text-white/80 text-sm md:text-base mb-5 sm:mb-7 max-w-sm">
              Design something special with their name, favorite colors and adorable designs.
            </p>
            <Button
              size="lg"
              className="rounded-full bg-[#9B59B6] hover:bg-[#8E44AD] text-white h-10 sm:h-11 px-6 sm:px-7 font-semibold shadow-lg text-sm sm:text-base"
            >
              Start Custom Order <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Right Gift Box Image — hidden on mobile, shown md+ */}
          <div className="hidden md:block flex-shrink-0 w-48 md:w-64 lg:w-72 relative self-center">
            <img
              src="/images/scarlet-bottobanner2.png"
              alt="Personalized baby onesie in gift box"
              className="w-full h-full object-contain object-bottom"
            />
          </div>

          {/* Mobile: Show both images in a row below the CTA */}
          <div className="flex md:hidden justify-center gap-4 pb-4 -mt-2">
            <div className="w-28 sm:w-36">
              <img
                src="/images/scarlet-bottombanner1.png"
                alt="Teddy bear with Dream Big shirt"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="w-28 sm:w-36">
              <img
                src="/images/scarlet-bottobanner2.png"
                alt="Personalized baby onesie in gift box"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}