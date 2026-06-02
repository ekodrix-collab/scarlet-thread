import { Shirt, Bath, Box, Coffee, Briefcase, Gift, PartyPopper } from "lucide-react"

export function CategoryIcons() {
  const categories = [
    { name: "Hoodies", icon: <Shirt className="w-8 h-8" /> },
    { name: "Sweatshirts", icon: <Shirt className="w-8 h-8" /> },
    { name: "Towels", icon: <Bath className="w-8 h-8" /> },
    { name: "Gift Boxes", icon: <Box className="w-8 h-8" /> },
    { name: "Mugs", icon: <Coffee className="w-8 h-8" /> },
    { name: "Travel Pouches", icon: <Briefcase className="w-8 h-8" /> },
    { name: "Birthday Gifts", icon: <PartyPopper className="w-8 h-8" /> },
    { name: "Anniversary Gifts", icon: <Gift className="w-8 h-8" /> },
  ]

  return (
    <section className="py-8 md:py-12 bg-white border-b border-border/40">
      <div className="container mx-auto px-4">
        {/* Horizontal scroll container on mobile, flex wrap on desktop */}
        <div className="flex overflow-x-auto pb-4 md:pb-0 hide-scrollbar gap-4 md:gap-6 justify-start lg:justify-center">
          {categories.map((cat, index) => (
            <div key={index} className="flex flex-col items-center gap-3 min-w-[80px] md:min-w-[100px] cursor-pointer group">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-sm border border-transparent group-hover:border-primary/20">
                {cat.icon}
              </div>
              <span className="text-xs md:text-sm font-medium text-center text-foreground group-hover:text-primary transition-colors line-clamp-1">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Hide scrollbar CSS inline for this specific container if needed, though Tailwind 'hide-scrollbar' plugin is better, we'll use inline styles to be safe */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  )
}
