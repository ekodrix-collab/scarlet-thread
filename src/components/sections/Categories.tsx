import Link from "next/link"
import Image from "next/image"

const categories = [
  { id: 1, name: "Gifts for Him", icon: "/images/scarlet-gift1.png", href: "/gifts-for-him", bgColor: "#E0F2FE"},
  { id: 2, name: "Gifts for Her", icon: "/images/scarlet-gift2.png", href: "/gifts-for-her",bgColor: "#FCE7F3" },
  { id: 3, name: "Kids & Babies", icon: "/images/scarlet-gift3.png", href: "/kids-babies",bgColor: "#FEF3C7" },
  { id: 4, name: "Special Occasions", icon: "/images/scarlet-gift4.png", href: "/special-occasions",bgColor: "#FEE2E2" },
  { id: 5, name: "Couple Gifts", icon: "/images/scarlet-couple.png", href: "/corporate",bgColor: "#FEE2E2" },
  { id: 6, name: "Faith Based", icon: "/images/scarlet-faith.png", href: "/custom",bgColor: "#E8D5C4" },
]

export function Categories() {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4  md:gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="flex flex-col items-center text-center py-3 space-y-3  bg-white border border-gray-200 shadow-lg rounded-2xl"
            >
              <div
              style={{backgroundColor:category.bgColor}} className="w-24 h-24 md:w-40 md:h-40 rounded-3xl flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
                {/* Fallback box for icon since we don't have actual images yet */}
                <div className="w-full h-full  flex items-center justify-center text-primary">
                  <Image src={category.icon} alt={category.name} width={500} height={550} />
                </div>
              </div>
              <span className="font-sans font-medium text-sm md:text-base text-foreground group-hover:text-primary transition-colors">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function GiftIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <polyline points="20 12 20 22 4 22 4 12" />
      <rect width="20" height="5" x="2" y="7" />
      <line x1="12" x2="12" y1="22" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
  )
}
