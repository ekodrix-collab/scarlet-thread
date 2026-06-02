import { ArrowRight, Heart } from "lucide-react"
import Link from "next/link"

const occasions = [
  {
    id: "birthday",
    title: "Birthday Gifts",
    description: "Make her birthday extra special",
    bgColor: "bg-[#F5F3FF]",
    titleColor: "text-primary",
    imagePlaceholder: "Pink Gift Box"
  },
  {
    id: "anniversary",
    title: "Anniversary Gifts",
    description: "Celebrate your beautiful journey",
    bgColor: "bg-[#FFF5F5]",
    titleColor: "text-red-500",
    imagePlaceholder: "Heart Box"
  },
  {
    id: "mothers-day",
    title: "Mother's Day Gifts",
    description: "Thank her for everything",
    bgColor: "bg-[#FDF8EB]",
    titleColor: "text-orange-500",
    imagePlaceholder: "Best Mom Mug"
  },
  {
    id: "valentines",
    title: "Valentine's Gifts",
    description: "Send her love in the most special way",
    bgColor: "bg-[#FFF0F5]",
    titleColor: "text-pink-600",
    imagePlaceholder: "Heart Pillow"
  }
]

export function OccasionsGridHer() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-heading font-bold flex items-center justify-center gap-2">
            Gifts For Every Occasion <Heart className="w-5 h-5 text-primary fill-transparent" />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {occasions.map((occ) => (
            <div key={occ.id} className={`${occ.bgColor} rounded-3xl p-6 relative overflow-hidden group hover:shadow-md transition-shadow flex flex-col h-full min-h-[220px]`}>
              <div className="relative z-10 w-2/3">
                <h3 className={`font-bold text-xl mb-2 ${occ.titleColor}`}>
                  {occ.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                  {occ.description}
                </p>
                <Link href={`/gifts-for-her/${occ.id}`} className="inline-flex items-center text-xs font-bold uppercase tracking-wider hover:text-primary transition-colors">
                  Shop Now <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              
              {/* Image Placeholder */}
              <div className="absolute right-0 bottom-0 w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 translate-x-4 translate-y-4">
                <div className="w-full h-full bg-white/50 backdrop-blur rounded-full flex items-center justify-center border border-white shadow-sm p-4 text-center">
                  <span className="text-xs font-medium text-muted-foreground">{occ.imagePlaceholder}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
