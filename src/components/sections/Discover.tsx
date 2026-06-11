import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Discover() {
  return (
    <section className="py-16 md:py-24 bg-[#fffafc]">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="space-y-6 order-2 lg:order-1">
            <div className="text-primary font-medium tracking-wide flex items-center gap-2">
              <HeartIcon className="w-4 h-4 fill-primary/20" />
              Bringing Your Gift Ideas To Life
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight">
              Discover <br className="hidden md:block" /> The Scarlet Thread
            </h2>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
              At Scarlet, we believe the most meaningful gifts are the ones created with love, thought and personal touch. Whether it's a heartfelt gift for him, a thoughtful gift for her, a precious keepsake for a new born, a surprise gift for a toddler or unforgettable baby shower gifts, we turn emotions into meaningful gifts that hold memories forever.
            </p>
            
            <div className="pt-4">
              <Button render={<Link href="/about" />} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-12 shadow-sm transition-transform hover:-translate-y-0.5">
                Read Our Story
              </Button>
            </div>
          </div>

          <div className="relative order-1 lg:order-2 flex gap-4 md:gap-6 justify-center lg:justify-end items-center">
            <div className="w-[45%] rounded-[2rem] overflow-hidden shadow-sm mt-12 transition-transform hover:-translate-y-1 duration-500">
               <img 
                src="/images/scarlet-couple.png" 
                alt="Happy couple with customized hoodies" 
                className="w-full h-full object-cover aspect-[4/5]"
              />
            </div>
            <div className="w-[45%] rounded-[2rem] overflow-hidden shadow-sm mb-12 transition-transform hover:-translate-y-1 duration-500">
               <img 
                src="/images/scarlet-homebanner.png" 
                alt="Beautiful custom gifts" 
                className="w-full h-full object-cover aspect-[4/5]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}
