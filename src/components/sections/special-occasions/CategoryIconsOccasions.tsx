import { Moon, Sun, Flame, Link2, TreePine, Heart, PartyPopper, Gift } from "lucide-react"

export function CategoryIconsOccasions() {
  const categories = [
    { name: "Eid Collection", icon: <Moon strokeWidth={1.5} className="w-8 h-8" /> },
    { name: "Onam Gifts", icon: <Sun strokeWidth={1.5} className="w-8 h-8" /> },
    { name: "Diwali Gifts", icon: <Flame strokeWidth={1.5} className="w-8 h-8" /> },
    { name: "Raksha Bandhan", icon: <Link2 strokeWidth={1.5} className="w-8 h-8" /> },
    { name: "Christmas Gifts", icon: <TreePine strokeWidth={1.5} className="w-8 h-8" /> },
    { name: "Valentine's Day", icon: <Heart strokeWidth={1.5} className="w-8 h-8" /> },
    { name: "New Year Gifts", icon: <PartyPopper strokeWidth={1.5} className="w-8 h-8" /> },
    { name: "All Occasions", icon: <Gift strokeWidth={1.5} className="w-8 h-8" /> },
  ]

  return (
    <section className="py-8 md:py-12 bg-white border-b border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto pb-4 md:pb-0 hide-scrollbar gap-4 md:gap-6 justify-start lg:justify-center">
          {categories.map((cat, index) => (
            <div key={index} className="flex flex-col items-center gap-3 min-w-[90px] md:min-w-[110px] cursor-pointer group">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-sm border border-primary/10 group-hover:border-transparent">
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
