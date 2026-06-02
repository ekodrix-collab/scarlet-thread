import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function RelatedCategories() {
  const categories = [
    { name: "Gifts For Her", href: "/gifts-for-her", icon: "/images/gifts_for_her.png" },
    { name: "Newborn & Kids", href: "/kids-babies", icon: "/images/kids_babies.png" },
    { name: "Special Occasions", href: "/special-occasions", icon: "/images/special_occasions.png" },
    { name: "Custom Orders", href: "/custom", icon: "/images/gallery.png" },
  ]

  return (
    <section className="py-16 bg-[#FAFAFA] border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
            You May Also Like
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
          {categories.map((cat, index) => (
            <Link key={index} href={cat.href} className="bg-white rounded-2xl p-4 md:p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all group border border-transparent hover:border-primary/20">
              <div className="w-16 h-16 md:w-20 md:h-20 mb-4 rounded-full overflow-hidden relative">
                <Image src={cat.icon} alt={cat.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h4 className="font-bold text-sm md:text-base text-foreground group-hover:text-primary transition-colors mb-2">
                {cat.name}
              </h4>
              <span className="text-xs font-medium text-muted-foreground flex items-center gap-1 group-hover:text-primary transition-colors">
                Explore More <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
