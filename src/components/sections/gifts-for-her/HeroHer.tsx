import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Heart, Award } from "lucide-react"
import Link from "next/link"

export function HeroHer() {
  return (
    <section className="relative bg-[#FFF5F5] pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center px-3 py-1 bg-white rounded-full text-xs font-semibold tracking-widest text-primary uppercase mb-6 shadow-sm">
              Gifts For Her <Heart className="w-3 h-3 ml-2 text-primary" />
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-6 leading-tight">
              Made for Her, <br className="hidden md:block" />
              <span className="text-primary">Personalized</span> <br className="hidden md:block" />
              with Love
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0">
              Thoughtfully personalized & embroidered gifts that celebrate the most special women in your life.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-12">
              <Button size="lg" className="rounded-full px-8 h-12 text-base shadow-lg shadow-primary/20 w-full sm:w-auto">
                Shop Best Sellers
              </Button>
              <Button variant="ghost" size="lg" className="rounded-full px-8 h-12 text-base hover:bg-white/50 w-full sm:w-auto text-primary">
                Explore Collection <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm font-medium text-muted-foreground bg-white/50 backdrop-blur-sm p-4 rounded-2xl w-max mx-auto md:mx-0 border border-white">
              <div className="flex items-center gap-2">
                <div className="text-primary">
                  <Award className="w-4 h-4" />
                </div>
                Premium Quality
              </div>
              <div className="flex items-center gap-2">
                <div className="text-primary">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                Personalized Just For Her
              </div>
              <div className="flex items-center gap-2">
                <div className="text-primary">
                  <Heart className="w-4 h-4" />
                </div>
                Made with Love
              </div>
            </div>
          </div>

          {/* Right Image Box */}
          <div className="flex-1 relative w-full aspect-[4/3] md:aspect-square lg:aspect-[4/3] max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <Image 
              src="/images/gifts_for_her.png" 
              alt="Personalized gifts for her in a premium box"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>

        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
    </section>
  )
}
