import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function CustomGiftBannerHer() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-primary rounded-3xl p-8 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between text-white shadow-xl border-2 border-primary/20">
          
          <div className="flex-1 relative z-10 text-center md:text-left mb-8 md:mb-0 max-w-xl mx-auto md:mx-0">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Can't Find The Perfect Gift? <br />
              Create A Custom Gift For Her
            </h2>
            <p className="text-primary-foreground/90 text-sm md:text-base mb-8">
              Share your idea, photo or message and we'll craft something truly unique.
            </p>
            <Button size="lg" className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white text-white hover:text-primary border border-white h-12 px-8 font-bold transition-colors">
              Start Custom Order <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          
          <div className="flex-1 relative z-10 flex justify-center md:justify-end w-full">
            <div className="w-full max-w-sm aspect-[16/9] bg-[#FFF0F5] rounded-2xl flex flex-col items-center justify-center p-6 shadow-2xl relative overflow-hidden border-4 border-white/40">
              <div className="absolute inset-0 flex items-center justify-center opacity-20 text-primary">
                 <Sparkles className="w-24 h-24" />
              </div>
              <div className="font-heading italic text-3xl font-medium text-center leading-tight text-primary z-10">
                You're <br /> One Of <br /> A Kind
              </div>
            </div>
          </div>
          
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
          
        </div>
      </div>
    </section>
  )
}
