import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#faeef9] w-full py-12 md:py-16 lg:py-0 md:min-h-[500px] lg:h-[550px] flex items-center">
      {/* Background Image Container (Desktop Only - spans full height and correct aspect ratio) */}
      <div className="absolute right-0 top-0 bottom-0 h-full aspect-[1584/993] z-0 select-none pointer-events-none hidden md:block">
        <img 
          src="/images/scarlet-homebanner.png" 
          alt="Scarlet Thread Home Banner" 
          className="w-full h-full object-cover object-right"
        />
        {/* Gradient overlay to blend the image left edge seamlessly with the background color */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-60 bg-gradient-to-r from-[#faeef9] via-[#faeef9]/90 to-transparent" />
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          <div className="space-y-5 z-20 relative">
            {/* Decorative background elements positioned relative to the content */}
            <div className="absolute -top-3 left-[32%] w-5 h-5 text-pink-400 opacity-70 transform rotate-12 animate-pulse hidden md:block">
              <HeartIcon />
            </div>
            <div className="absolute top-[42%] -right-8 w-6 h-6 text-pink-400 opacity-70 transform -rotate-12 animate-pulse hidden md:block">
              <HeartIcon />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
              Because Just A Gift<br />
              Was Never <span className="text-primary italic font-serif">Enough</span>
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-md">
              Personalized, embroidered & made with love for your special moments.
            </p>
            
            <div className="flex items-center gap-6 pt-2">
              <Button size="lg" className="text-base h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl shadow-md transition-all">
                Shop Now
              </Button>
              <Link href="/gifts" className="text-primary hover:text-primary/80 font-semibold flex items-center gap-2 transition-colors text-base py-2">
                Explore Gifts <span className="text-lg">→</span>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 pt-6 mt-6 border-t border-primary/10">
              <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-muted-foreground bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/10 shadow-sm whitespace-nowrap">
                <GiftIcon className="h-4 w-4 text-primary shrink-0" />
                <span>Personalized Just for You</span>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-muted-foreground bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/10 shadow-sm whitespace-nowrap">
                <StarIcon className="h-4 w-4 text-primary shrink-0" />
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-muted-foreground bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/10 shadow-sm whitespace-nowrap">
                <HeartIcon className="h-4 w-4 text-primary shrink-0" />
                <span>Made with Love</span>
              </div>
            </div>
          </div>

          {/* Right Column: Mobile Image / Desktop Empty spacer */}
          <div className="w-full flex justify-center md:block relative z-10">
            <img 
              src="/images/scarlet-homebanner.png" 
              alt="Scarlet Thread Gift Set" 
              className="w-full max-w-[450px] h-auto object-contain md:hidden"
            />
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
