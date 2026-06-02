import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart } from "lucide-react"

export function HeroOccasions() {
  return (
    <section className="relative bg-[#FDF8FF] pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-primary font-medium mb-6">
              <span className="italic font-heading text-xl">Celebrate Every Moment</span>
              <Heart className="w-5 h-5 text-primary fill-transparent" strokeWidth={1.5} />
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-6 leading-tight">
              Special Occasions, <br className="hidden md:block" />
              <span className="text-primary">Special Memories</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0">
              Thoughtful, personalized gifts for every festival, celebration and special moment. Because every occasion deserves something truly unique.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-8">
              <Button size="lg" className="rounded-full px-8 h-12 text-base shadow-lg shadow-primary/20 bg-primary hover:bg-primary/90 w-full sm:w-auto">
                Shop All Occasions <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base w-full sm:w-auto text-primary border-primary/20 hover:bg-primary/5">
                Explore Collection
              </Button>
            </div>
          </div>

          {/* Right Image Box */}
          <div className="flex-1 relative w-full aspect-[4/3] md:aspect-[4/3] lg:aspect-[16/10] max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-700">
            <Image 
              src="/images/special_occasions.png" 
              alt="Special Occasion Gifts"
              fill
              className="object-cover"
              priority
            />
          </div>

        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#FF69B4]/5 rounded-full blur-3xl translate-y-1/3 translate-x-1/3 pointer-events-none"></div>
    </section>
  )
}
