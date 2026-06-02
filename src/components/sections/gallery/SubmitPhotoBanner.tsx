import { Camera, Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SubmitPhotoBanner() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-[#FDF8FF] rounded-[32px] overflow-hidden flex flex-col md:flex-row items-center border border-primary/10 shadow-sm relative p-8 md:p-12 gap-8">
          
          {/* Left: Camera Icon Graphic */}
          <div className="md:w-1/4 flex justify-center relative">
            <div className="w-32 h-32 rounded-full bg-white shadow-xl flex items-center justify-center relative z-10 border border-primary/5">
              <Camera className="w-12 h-12 text-primary" strokeWidth={1.5} />
              
              {/* Decorative sparkles */}
              <Sparkles className="absolute -top-4 -right-4 w-8 h-8 text-primary/40" />
              <Sparkles className="absolute -bottom-2 -left-4 w-6 h-6 text-primary/40" />
            </div>
            {/* Background blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary/10 rounded-full blur-2xl"></div>
          </div>

          {/* Center: Text Content */}
          <div className="md:w-2/4 text-center md:text-left relative z-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              See Your Gift in Our Next Gallery!
            </h2>
            <p className="text-sm text-foreground/80 mb-6">
              Share a photo of your personalized gift and get featured.<br className="hidden md:block" />
              Tag us on Instagram or use <span className="font-bold text-primary">#TheScarletThread</span>
            </p>
            <Button className="rounded-full px-6 bg-primary hover:bg-primary/90">
              Share Your Creation <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Right: Polaroid Mockups hanging */}
          <div className="md:w-1/4 flex justify-center md:justify-end relative h-48 w-full mt-8 md:mt-0">
             
             {/* Fake string */}
             <div className="absolute top-8 left-0 w-full h-[2px] bg-primary/20 rotate-[-5deg]"></div>
             
             {/* Polaroids */}
             <div className="flex gap-4 absolute top-0 -rotate-[5deg]">
                {/* Polaroid 1 */}
                <div className="relative mt-8 rotate-[-10deg] hover:rotate-0 transition-transform cursor-pointer group">
                  <div className="w-4 h-6 bg-[#D7CCC8] absolute -top-4 left-1/2 -translate-x-1/2 rounded-t-sm shadow-sm z-10"></div> {/* Clip */}
                  <div className="bg-white p-2 pb-6 shadow-xl rounded-sm w-24 h-28 transform origin-top border border-black/5">
                     <div className="w-full h-full bg-[#212121] flex items-center justify-center p-2">
                       <span className="text-[6px] text-white/50 text-center font-heading italic leading-tight">Make Yourself Proud</span>
                     </div>
                  </div>
                </div>

                {/* Polaroid 2 */}
                <div className="relative mt-4 rotate-[5deg] hover:rotate-0 transition-transform cursor-pointer group z-10">
                  <div className="w-4 h-6 bg-[#D7CCC8] absolute -top-4 left-1/2 -translate-x-1/2 rounded-t-sm shadow-sm z-10"></div>
                  <div className="bg-white p-2 pb-6 shadow-xl rounded-sm w-28 h-32 transform origin-top border border-black/5">
                     <div className="w-full h-full bg-[#E1BEE7] flex items-center justify-center">
                       <span className="text-[10px] text-[#4A148C] font-heading italic">Aarav</span>
                     </div>
                  </div>
                </div>

                {/* Polaroid 3 */}
                <div className="relative mt-12 rotate-[12deg] hover:rotate-0 transition-transform cursor-pointer group hidden sm:block">
                  <div className="w-4 h-6 bg-[#D7CCC8] absolute -top-4 left-1/2 -translate-x-1/2 rounded-t-sm shadow-sm z-10"></div>
                  <div className="bg-white p-2 pb-6 shadow-xl rounded-sm w-24 h-28 transform origin-top border border-black/5">
                     <div className="w-full h-full bg-[#FCE4EC] flex items-center justify-center">
                       <span className="text-[8px] text-[#880E4F] font-heading italic">Prisha</span>
                     </div>
                  </div>
                </div>
             </div>
             
          </div>

        </div>
      </div>
    </section>
  )
}
