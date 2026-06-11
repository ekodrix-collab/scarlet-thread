import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, ShieldCheck, Heart, Award, Sparkles } from "lucide-react"

export function HeroKids() {
  return (
    <section className="relative overflow-hidden bg-[#FFF5F8] w-full py-0 md:py-16 lg:py-0 md:min-h-[500px] lg:h-[550px] flex items-center">
      
      {/* Mobile Background Image — full bleed behind content */}
      <div className="absolute inset-0 z-0 md:hidden">
        <img 
          src="/images/scrlet-babiesbanne.png" 
          alt="Personalized baby gifts" 
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay for text readability on mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFF5F8]/85 via-[#FFF5F8]/75 to-[#FFF5F8]/90" />
      </div>

      {/* Desktop Background Image (right-aligned) */}
      <div className="absolute right-0 top-0 bottom-0 h-full aspect-[1584/993] z-0 select-none pointer-events-none hidden md:block">
        <img 
          src="/images/scrlet-babiesbanne.png" 
          alt="Personalized baby gifts in a premium box" 
          className="w-full h-full object-cover object-right"
        />
        {/* Gradient overlay to blend the image left edge seamlessly with the background color */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-60 bg-gradient-to-r from-[#FFF5F8] via-[#FFF5F8]/95 to-transparent z-10" />
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-5 sm:space-y-6 text-center md:text-left z-20 relative py-10 sm:py-14 md:py-0">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#6E3B9B] uppercase">
              Kids & Babies <Heart className="w-3.5 h-3.5 text-[#FF69B4] fill-none stroke-[2.5]" />
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
              Little Moments,<br />
              <span className="text-[#FF69B4]">Made Personal</span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-md mx-auto md:mx-0">
              Adorable embroidered gifts for your little ones, stitched with love and care.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4">
              <Button size="lg" className="rounded-full px-8 h-11 sm:h-12 text-sm sm:text-base shadow-lg shadow-[#6E3B9B]/20 bg-[#6E3B9B] hover:bg-[#5D2E85] text-white w-full sm:w-auto font-semibold">
                Shop Best Sellers
              </Button>
              <Link href="/kids-babies" className="text-[#6E3B9B] hover:text-[#5D2E85] font-semibold flex items-center justify-center gap-2 text-sm sm:text-base py-2">
                Explore Collection <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 sm:pt-6 border-t border-[#F5E6EC]/60">
              {/* Mobile: strict 2-column grid so badges always align */}
              <div className="grid grid-cols-2 gap-2 md:hidden">
                <div className="flex items-center gap-1.5 bg-white/80 border border-[#F5E6EC] px-2.5 py-1.5 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FF69B4] shrink-0" />
                  <span className="text-[10px] font-semibold text-muted-foreground">Safe & Baby Friendly</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/80 border border-[#F5E6EC] px-2.5 py-1.5 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                  <Award className="w-3.5 h-3.5 text-[#FF69B4] shrink-0" />
                  <span className="text-[10px] font-semibold text-muted-foreground">Premium Quality</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/80 border border-[#F5E6EC] px-2.5 py-1.5 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                  <Sparkles className="w-3.5 h-3.5 text-[#FF69B4] shrink-0" />
                  <span className="text-[10px] font-semibold text-muted-foreground">Personalized Just For You</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/80 border border-[#F5E6EC] px-2.5 py-1.5 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                  <Heart className="w-3.5 h-3.5 text-[#FF69B4] shrink-0" />
                  <span className="text-[10px] font-semibold text-muted-foreground">Made With Love</span>
                </div>
              </div>
              {/* Desktop: 2-column grid */}
              <div className="hidden md:grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 bg-white/80 border border-[#F5E6EC] px-3.5 py-2 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                  <ShieldCheck className="w-4 h-4 text-[#FF69B4] shrink-0" />
                  <span className="text-xs font-semibold text-muted-foreground">Safe & Baby Friendly</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 border border-[#F5E6EC] px-3.5 py-2 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                  <Award className="w-4 h-4 text-[#FF69B4] shrink-0" />
                  <span className="text-xs font-semibold text-muted-foreground">Premium Quality</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 border border-[#F5E6EC] px-3.5 py-2 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                  <Sparkles className="w-4 h-4 text-[#FF69B4] shrink-0" />
                  <span className="text-xs font-semibold text-muted-foreground">Personalized Just For You</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 border border-[#F5E6EC] px-3.5 py-2 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                  <Heart className="w-4 h-4 text-[#FF69B4] shrink-0" />
                  <span className="text-xs font-semibold text-muted-foreground">Made With Love</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
