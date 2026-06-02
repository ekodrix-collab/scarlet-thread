import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CustomGiftBannerKids() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-primary rounded-[32px] p-8 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between text-white shadow-xl">
          
          <div className="absolute left-0 bottom-0 w-64 h-64 md:w-80 md:h-80 -translate-x-1/4 translate-y-1/4 opacity-50 md:opacity-100 mix-blend-luminosity">
             {/* Left Teddy Bear Mockup Area */}
             <div className="w-full h-full bg-white/10 rounded-full flex items-center justify-center border-4 border-white/20">
               <span className="font-heading font-medium text-lg text-white/50">Teddy Image</span>
             </div>
          </div>

          <div className="flex-1 relative z-10 text-center max-w-xl mx-auto py-10 md:py-0">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Create a Gift as Unique <br /> as Their Smile
            </h2>
            <p className="text-primary-foreground/90 text-sm md:text-base mb-8">
              Design something special with their name, favorite colors and adorable designs.
            </p>
            <Button size="lg" className="rounded-full bg-[#9B59B6] hover:bg-[#8E44AD] text-white h-12 px-8 font-bold shadow-lg">
              Start Custom Order <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          
          <div className="absolute right-0 top-0 w-64 h-64 md:w-80 md:h-80 translate-x-1/4 -translate-y-1/4 opacity-50 md:opacity-100 mix-blend-luminosity">
            {/* Right Box Mockup Area */}
             <div className="w-full h-full bg-white/10 rounded-full flex items-center justify-center border-4 border-white/20">
               <span className="font-heading font-medium text-lg text-white/50">Box Image</span>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
