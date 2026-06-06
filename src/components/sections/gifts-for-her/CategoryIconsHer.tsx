import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faShoppingBag,
  faWallet,
  faPersonDress,
  faRing,
  faMugHot,
  faPumpSoap,
  faGift,
  faBriefcase,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons"

export function CategoryIconsHer() {
  const categories = [
    { name: "Tote Bags",           icon: <FontAwesomeIcon icon={faShoppingBag}   className="w-7 h-7" /> },
    { name: "Pouches",             icon: <FontAwesomeIcon icon={faWallet}         className="w-7 h-7" /> },
    { name: "Hoodies",             icon: <FontAwesomeIcon icon={faPersonDress}    className="w-7 h-7" /> },
    { name: "Personalized Jewelry",icon: <FontAwesomeIcon icon={faRing}           className="w-7 h-7" /> },
    { name: "Mugs & Bottles",      icon: <FontAwesomeIcon icon={faMugHot}         className="w-7 h-7" /> },
    { name: "Towels",              icon: <FontAwesomeIcon icon={faPumpSoap}       className="w-7 h-7" /> },
    { name: "Gift Boxes",          icon: <FontAwesomeIcon icon={faGift}           className="w-7 h-7" /> },
    { name: "Makeup Pouches",      icon: <FontAwesomeIcon icon={faBriefcase}      className="w-7 h-7" /> },
    { name: "Desk Essentials",     icon: <FontAwesomeIcon icon={faDesktop}        className="w-7 h-7" /> },
  ]

  return (
    <section className="py-8 md:py-12 bg-[#FFF5F5] border-b border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto pb-4 md:pb-0 hide-scrollbar gap-4 md:gap-6 justify-start lg:justify-center">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 min-w-[80px] md:min-w-[100px] cursor-pointer group"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#FFF5F5] flex items-center justify-center text-pink-500 group-hover:bg-primary group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-sm border border-transparent group-hover:border-primary/20">
                {cat.icon}
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