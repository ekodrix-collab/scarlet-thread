import Image from "next/image"

export function CategoryIconsOccasions() {
  const categories = [
    { name: "Eid Collection", image: "/images/specialOccasion/eid.png" },
    { name: "Onam Gifts", image: "/images/specialOccasion/onam.png" },
    { name: "Diwali Gifts", image: "/images/specialOccasion/diwali.png" },
    { name: "Raksha Bandhan", image: "/images/specialOccasion/raksha-bandhan.png" },
    { name: "Christmas Gifts", image: "/images/specialOccasion/christmas.png" },
    { name: "Valentine's Day", image: "/images/specialOccasion/valentine.png" },
    { name: "New Year Gifts", image: "/images/specialOccasion/newyear.png" },
    { name: "All Occasions", image: "/images/specialOccasion/all-occasions.png" },
  ]

  return (
    <section className=" md:py-5 bg-white border-b border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto pb-4 md:pb-0 hide-scrollbar gap-4 md:gap-15 justify-start lg:justify-center">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 min-w-[90px] md:min-w-[110px] cursor-pointer group"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white flex items-center justify-center group-hover:scale-105 transition-all duration-300 shadow-sm border border-primary/10 group-hover:border-transparent overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  width={80}
                  height={80}
                  className="w-full h-full object-contain p-2"
                />
              </div>

              <span className="text-xs md:text-sm font-medium text-center text-foreground group-hover:text-primary transition-colors line-clamp-2">
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