import Link from "next/link"
import Image from "next/image"

const categories = [
  { id: 1, name: "Gifts for Him", icon: "/icons/gift-blue.png", href: "/gifts-for-him" },
  { id: 2, name: "Gifts for Her", icon: "/icons/gift-pink.png", href: "/gifts-for-her" },
  { id: 3, name: "Kids & Babies", icon: "/icons/teddy.png", href: "/kids-babies" },
  { id: 4, name: "Special Occasions", icon: "/icons/balloons.png", href: "/special-occasions" },
  { id: 5, name: "Corporate Gifts", icon: "/icons/bag.png", href: "/corporate" },
  { id: 6, name: "Custom Orders", icon: "/icons/custom.png", href: "/custom" },
]

export function Categories() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              href={category.href}
              className="flex flex-col items-center group text-center space-y-4"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-secondary flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
                {/* Fallback box for icon since we don't have actual images yet */}
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/50 rounded-xl flex items-center justify-center text-primary">
                  <GiftIcon />
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
