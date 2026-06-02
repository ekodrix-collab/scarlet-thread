import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 text-pink-400 opacity-50 transform rotate-45">
        <HeartIcon />
      </div>
      <div className="absolute top-1/3 right-1/3 w-6 h-6 text-pink-400 opacity-50">
        <HeartIcon />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 z-10">
            <div className="inline-block px-3 py-1 bg-white/50 rounded-full text-xs font-semibold tracking-widest text-primary uppercase mb-4">
              Because
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-tight">
              Every Gift<br />
              Tells a <span className="text-primary italic font-serif">Story</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
              Personalized, embroidered & made with love for your special moments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="text-base h-12 px-8 rounded-full shadow-lg hover:shadow-primary/25 transition-all">
                Shop Now
              </Button>
              <Button variant="outline" size="lg" className="text-base h-12 px-8 rounded-full border-primary/20 hover:bg-primary/5">
                Explore Gifts <span className="ml-2">→</span>
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-8 mt-8 border-t border-primary/10">
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <GiftIcon className="h-4 w-4 text-primary" />
                Personalized Just for You
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <StarIcon className="h-4 w-4 text-primary" />
                Premium Quality
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <HeartIcon className="h-4 w-4 text-primary" />
                Made with Love
              </div>
            </div>
          </div>
          
          <div className="relative z-10">
            <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              {/* Fallback color box simulating the image */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E6D7FF] to-[#D4BEE4] flex items-center justify-center">
                <div className="text-center p-8 bg-white/40 backdrop-blur-sm rounded-xl border border-white/50 shadow-xl">
                   <p className="font-heading italic text-2xl text-primary mb-2">You are So Loved</p>
                   <p className="text-sm font-medium text-foreground">Embroidered Baby Set</p>
                </div>
              </div>
              
              {/* Optional: if actual image is added later */}
              {/* <img src="/images/hero-gift-box.jpg" alt="Personalized Gift Box" className="object-cover w-full h-full" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}

function GiftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="20 12 20 22 4 22 4 12" />
      <rect width="20" height="5" x="2" y="7" />
      <line x1="12" x2="12" y1="22" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
  )
}

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
