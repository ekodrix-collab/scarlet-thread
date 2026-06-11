import { Shirt, Bath, Box, Coffee, Briefcase, Gift, PartyPopper } from "lucide-react"
import Image from "next/image"

export function CategoryIcons() {
  const categories = [
    { name: "Hoodies", icon:"/images/forhimicons/scarlet-hoodieicon.png" },
    { name: "Sweatshirts", icon: "/images/forhimicons/scarlet-sweatshirt.png" },
    { name: "Towels", icon: "/images/forhimicons/scarlet-towelicon.png" },
    { name: "Gift Boxes", icon: "/images/forhimicons/scarlet-giftboxicon.png"},
    { name: "Mugs", icon: "/images/forhimicons/scarlet-mugicon.png"},
    { name: "Travel Pouches", icon: "/images/forhimicons/scarlet-pouchicon2.png" },
    { name: "Birthday Gifts", icon: "/images/forhimicons/scarlet-gifticon2.png"},
    { name: "Anniversary Gifts", icon: "/images/forhimicons/scarlet-anniverseryicon.png" },
  ]

  return (
    <section className="py-8 md:py-12 bg-white border-b border-border/40">
      <div className="container mx-auto px-4">
        {/* Horizontal scroll container on mobile, flex wrap on desktop */}
        <div className="flex overflow-x-auto pb-4 md:pb-0 hide-scrollbar gap-4 md:gap-6 justify-start lg:justify-center">
          {categories.map((cat, index) => (
            <div key={index} className="flex flex-col items-center gap-2 min-w-[90px] md:min-w-[110px] cursor-pointer group">
              <div className="w-[90px] h-[70px] md:w-[110px] md:h-[80px] rounded-xl bg-secondary flex items-center justify-center text-primary transition-all duration-300 shadow-sm border border-transparent group-hover:shadow-md group-hover:border-primary/20">
                {typeof cat.icon === 'string' ? (
                  <div className="relative w-24 h-28 md:w-24 md:h-28">
                    <Image src={cat.icon} alt={cat.name} fill className="object-contain transition-transform duration-300 group-hover:scale-110" sizes="96px" />
                  </div>
                ) : (
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    {cat.icon}
                  </div>
                )}
              </div>
              <span className="text-[10px] md:text-xs font-medium text-center text-foreground group-hover:text-primary transition-colors line-clamp-1 max-w-[90px] md:max-w-[110px]">
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
