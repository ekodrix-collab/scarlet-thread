import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"

export function CustomGiftBannerOccasions() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="bg-[#EAE1F8] rounded-[32px] overflow-hidden flex flex-col md:flex-row shadow-sm border border-black/5 relative">
          
          <div className="flex-1 relative z-10 text-center md:text-left p-8 md:p-16 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-[#2C1844]">
              Can't Find The Perfect Gift For Your Special Occasion?
            </h2>
            <p className="text-[#4A3266] text-sm md:text-base mb-8 max-w-md mx-auto md:mx-0">
              We create custom gifts for any festival or celebration. Share your idea and we'll bring it to life!
            </p>
            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white h-12 px-8 font-bold shadow-lg w-max mx-auto md:mx-0">
              Create Custom Gift <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          
          <div className="flex-1 relative min-h-[300px] md:min-h-full overflow-hidden">
             {/* Instead of a complex mockup element, we will use a styled container that represents the image from the design */}
             <div className="absolute inset-0 bg-[#D4C3ED] flex items-center justify-center p-8">
                <div className="w-full h-full bg-white/40 backdrop-blur-sm rounded-2xl border-4 border-white shadow-xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 text-primary opacity-20">
                      <Sparkles className="w-24 h-24" />
                    </div>
                    <span className="font-heading italic text-4xl font-medium text-center leading-tight text-primary z-10 drop-shadow-sm">
                      Blessed <br /> Eid 
                      <span className="inline-block ml-2 text-[#F5B041]">🌙</span>
                    </span>
                </div>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
