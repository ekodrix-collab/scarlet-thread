import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Heart, Award } from "lucide-react"

export function HeroHim() {
  return (
    <section className="relative bg-[#FFF7FD] py-0 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/forhimpage/scarlet-forhimpage.png"
          alt="Personalized gifts for him"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 min-h-[420px] md:min-h-[500px]">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left py-12">
            <div className="inline-block text-[10px] font-semibold tracking-widest text-primary uppercase mb-3">
              Gifts For Him
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-5 leading-tight">
              Make Every <br className="hidden md:block" />
              Gift <span className="text-primary">Personal</span>
            </h1>

            <p className="text-sm md:text-base text-muted-foreground mb-4 max-w-md mx-auto md:mx-0">
              Thoughtfully embroidered gifts for husbands, boyfriends, fathers,
              brothers and best friends.
            </p>

            <p className="text-sm text-foreground/80 mb-6 max-w-md mx-auto md:mx-0">
              Personalized with names, dates, quotes, and memories that last
              forever.
            </p>

            <Button
              size="lg"
              className="rounded-md px-6 h-11 text-sm shadow-lg shadow-primary/20 mb-10"
            >
              Shop Best Sellers
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-xs font-medium text-muted-foreground">
              <div className="flex items-center gap-2">
                <Award className="w-3 h-3 text-primary" />
                Premium Quality
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3 h-3 text-primary" />
                Personalized For You
              </div>

              <div className="flex items-center gap-2">
                <Heart className="w-3 h-3 text-primary" />
                Made with Love
              </div>
            </div>
          </div>

          {/* Empty Right Side - Preserves Original Layout */}
          <div className="flex-1 hidden md:block" />
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-0 w-1/3 h-1/2 bg-gradient-to-r from-secondary/50 to-transparent"></div>
      </div>
    </section>
  )
}