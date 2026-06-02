import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck, Heart, Award, Sparkles } from "lucide-react"

export function HeroKids() {
  return (
    <section className="relative bg-[#FFF0F5] pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center px-3 py-1 bg-white rounded-full text-xs font-semibold tracking-widest text-primary uppercase mb-6 shadow-sm">
              Kids & Babies <Heart className="w-3 h-3 ml-2 text-primary" />
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-6 leading-tight">
              Little Moments, <br className="hidden md:block" />
              <span className="text-[#FF69B4]">Made Personal</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0">
              Adorable embroidered gifts for your little ones, stitched with love and care.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-12">
              <Button size="lg" className="rounded-full px-8 h-12 text-base shadow-lg shadow-primary/20 bg-[#9B59B6] hover:bg-[#8E44AD] w-full sm:w-auto">
                Shop Best Sellers
              </Button>
              <Button variant="ghost" size="lg" className="rounded-full px-8 h-12 text-base hover:bg-white/50 w-full sm:w-auto text-[#9B59B6]">
                Explore Collection <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white">
                <ShieldCheck className="w-4 h-4 text-[#FF69B4]" />
                <span className="text-[11px] md:text-xs">Safe & Baby Friendly</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white">
                <Award className="w-4 h-4 text-[#FF69B4]" />
                <span className="text-[11px] md:text-xs">Premium Quality</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white">
                <Sparkles className="w-4 h-4 text-[#FF69B4]" />
                <span className="text-[11px] md:text-xs">Personalized Just For You</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white">
                <Heart className="w-4 h-4 text-[#FF69B4]" />
                <span className="text-[11px] md:text-xs">Made With Love</span>
              </div>
            </div>
          </div>

          {/* Right Image Box */}
          <div className="flex-1 relative w-full aspect-[4/3] md:aspect-square lg:aspect-[4/3] max-w-2xl mx-auto rounded-[40px] overflow-hidden shadow-2xl border-4 border-white/80 transform rotate-1 hover:rotate-0 transition-transform duration-700">
            <Image 
              src="/images/kids_babies.png" 
              alt="Personalized baby gifts in a premium box"
              fill
              className="object-cover"
              priority
            />
          </div>

        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF69B4]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
    </section>
  )
}
