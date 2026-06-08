import Image from "next/image"

export function CategoryIconsHer() {
  const categories = [
    {
      name: "Tote Bags",
      icon: "/images/categoryicons/scarlet-totebag.png",
    },
    {
      name: "Pouches",
      icon: "/images/categoryicons/scarlet-pouch.png",
    },
    {
      name: "Hoodies",
      icon: "/images/categoryicons/scarlet-hoodie.png",
    },
    {
      name: "Personalized Jewelry",
      icon: "/images/categoryicons/scarlet-jewelery.png",
    },
    {
      name: "Mugs & Bottles",
      icon: "/images/categoryicons/scarlet-bottle.png",
    },
    {
      name: "Towels",
      icon: "/images/categoryicons/scarlet-towel.png",
    },
    {
      name: "Gift Boxes",
      icon: "/images/categoryicons/scarlet-giftbox.png",
    },
    {
      name: "Makeup Pouches",
      icon: "/images/categoryicons/scarlet-pouch.png",
    },
    {
      name: "Desk Essentials",
      icon: "/images/categoryicons/scarlet-desk.png",
    },
  ]

  return (
    <section className="py-6 bg-white border-b border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto hide-scrollbar gap-3 md:gap-4 justify-start lg:justify-center pb-2">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 min-w-[90px] md:min-w-[110px] cursor-pointer group"
            >
              <div className="w-[90px] h-[70px] md:w-[110px] md:h-[80px] rounded-xl bg-[#FFF8FB] border border-[#F5E8EE] flex items-center justify-center transition-all duration-300 hover:shadow-md hover:border-primary/30">
                <div className="relative w-24 h-28 md:w-24 md:h-28">
                  <Image
                    src={cat.icon}
                    alt={cat.name}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>

              <span className="text-[10px] md:text-xs font-medium text-center text-gray-700 leading-tight max-w-[90px] md:max-w-[110px]">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }

            .hide-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `,
        }}
      />
    </section>
  )
}