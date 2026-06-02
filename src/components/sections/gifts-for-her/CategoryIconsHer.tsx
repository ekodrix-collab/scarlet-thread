import { ShoppingBag, Briefcase, Shirt, Gem, Coffee, Bath, Box, Scissors, Monitor } from "lucide-react"

export function CategoryIconsHer() {
  const categories = [
    { name: "Tote Bags", icon: <ShoppingBag strokeWidth={1.5} className="w-8 h-8" /> },
    { name: "Pouches", icon: <Briefcase strokeWidth={1.5} className="w-8 h-8" /> },
    { name: "Hoodies", icon: <Shirt strokeWidth={1.5} className="w-8 h-8" /> },
    { name: "Personalized Jewelry", icon: <Gem strokeWidth={1.5} className="w-8 h-8" /> },
    { name: "Mugs & Bottles", icon: <Coffee strokeWidth={1.5} className="w-8 h-8" /> },
    { name: "Towels", icon: <Bath strokeWidth={1.5} className="w-8 h-8" /> },
    { name: "Gift Boxes", icon: <Box strokeWidth={1.5} className="w-8 h-8" /> },
    { name: "Makeup Pouches", icon: <Scissors strokeWidth={1.5} className="w-8 h-8" /> },
    { name: "Desk Essentials", icon: <Monitor strokeWidth={1.5} className="w-8 h-8" /> },
  ]

  return (
    <section className="py-8 md:py-12 bg-white border-b border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto pb-4 md:pb-0 hide-scrollbar gap-4 md:gap-6 justify-start lg:justify-center">
          {categories.map((cat, index) => (
            <div key={index} className="flex flex-col items-center gap-3 min-w-[80px] md:min-w-[100px] cursor-pointer group">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#FFF5F5] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-sm border border-transparent group-hover:border-primary/20">
                {cat.icon}
              </div>
              <span className="text-xs md:text-sm font-medium text-center text-foreground group-hover:text-primary transition-colors line-clamp-2">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      
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
