import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Heart, Award } from "lucide-react"

export function HeroHim() {
  return (
    <section className="relative bg-white pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block px-3 py-1 bg-secondary/50 rounded-full text-xs font-semibold tracking-widest text-primary uppercase mb-6">
              Gifts For Him
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-6 leading-tight">
              Make Every <br className="hidden md:block" />
              Gift <span className="text-primary">Personal</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0">
              Thoughtfully embroidered gifts for husbands, boyfriends, fathers, brothers and best friends.
            </p>
            
            <p className="text-base text-foreground/80 mb-8 max-w-md mx-auto md:mx-0 border-l-2 border-primary/30 pl-4">
              Personalized with names, dates, quotes, and memories that last forever.
            </p>

            <Button size="lg" className="rounded-full px-8 h-12 text-base shadow-lg shadow-primary/20 mb-12">
              Shop Best Sellers <ArrowRight className="w-4 h-4 ml-2" />
            </Button>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-primary">
                  <Award className="w-4 h-4" />
                </div>
                Premium Quality
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-primary">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                Personalized For You
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-primary">
                  <Heart className="w-4 h-4" />
                </div>
                Made with Love
              </div>
            </div>
          </div>

          {/* Right Image Box */}
          <div className="flex-1 relative w-full aspect-[4/3] md:aspect-square lg:aspect-[4/3] max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
            {/* Using the generated image from earlier for now, or a placeholder */}
            <Image 
              src="/images/gifts_for_him.png" 
              alt="Personalized gifts for him in a premium box"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
            />
            
            {/* Decorative Ribbon Effect Overlay */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/20 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2"></div>
          </div>

        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-0 w-1/3 h-1/2 bg-gradient-to-r from-secondary/50 to-transparent"></div>
      </div>
    </section>
  )
}
