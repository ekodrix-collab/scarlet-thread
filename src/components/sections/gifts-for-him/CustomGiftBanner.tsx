import { Button } from "@/components/ui/button"
import { ArrowRight, Gift } from "lucide-react"

export function CustomGiftBanner() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-primary rounded-3xl p-8 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between text-white shadow-xl">
          
          <div className="flex-1 relative z-10 text-center md:text-left mb-8 md:mb-0 max-w-xl mx-auto md:mx-0">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Can't Find The Perfect Gift? <br />
              Create A Fully Custom Gift
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Upload your design, photo or idea, and we'll craft something unique just for him.
            </p>
            <Button size="lg" className="rounded-full bg-white text-primary hover:bg-white/90 h-12 px-8 font-bold">
              Start Custom Order <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          
          <div className="flex-1 relative z-10 flex justify-center md:justify-end w-full">
            <div className="w-full max-w-sm aspect-[4/3] bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex flex-col items-center justify-center p-6 shadow-2xl relative">
              <Gift className="w-16 h-16 mb-4 text-white/50" />
              <div className="font-heading italic text-3xl font-medium text-center leading-tight">
                Your <br /> Design <br /> Here
              </div>
            </div>
          </div>
          
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            {/* We could use a repeating pattern here, simulating the gifts pattern from the image */}
            <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #fff 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
          
        </div>
      </div>
    </section>
  )
}
