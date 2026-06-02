import { ArrowRight, Heart } from "lucide-react"
import Link from "next/link"

const festivals = [
  {
    id: "eid",
    title: "Eid Mubarak",
    description: "Celebrate with faith and beautiful gifts",
    bgColor: "bg-[#E6F4EA]",
    textColor: "text-emerald-900",
    buttonBg: "bg-emerald-800 hover:bg-emerald-900",
    buttonText: "Shop Eid Gifts",
    imagePlaceholder: "Mosque Silhouette"
  },
  {
    id: "onam",
    title: "Happy Onam",
    description: "Celebrate tradition with personalized gifts",
    bgColor: "bg-[#FFF8E1]",
    textColor: "text-orange-900",
    buttonBg: "bg-orange-500 hover:bg-orange-600",
    buttonText: "Shop Onam Gifts",
    imagePlaceholder: "Boat Race / Floral"
  },
  {
    id: "diwali",
    title: "Happy Diwali",
    description: "Spread light, love and happiness",
    bgColor: "bg-[#4A154B]",
    textColor: "text-yellow-400",
    buttonBg: "bg-yellow-500 hover:bg-yellow-600 text-purple-900",
    buttonText: "Shop Diwali Gifts",
    imagePlaceholder: "Diyas"
  },
  {
    id: "rakhi",
    title: "Raksha Bandhan",
    description: "A bond that deserves something special",
    bgColor: "bg-[#FFF0F5]",
    textColor: "text-[#D32F2F]",
    buttonBg: "bg-[#FF5252] hover:bg-[#D32F2F]",
    buttonText: "Shop Rakhi Gifts",
    imagePlaceholder: "Rakhi Thread"
  },
  {
    id: "christmas",
    title: "Christmas Joy",
    description: "Make Christmas more memorable",
    bgColor: "bg-[#F1F8E9]",
    textColor: "text-green-900",
    buttonBg: "bg-green-700 hover:bg-green-800",
    buttonText: "Shop Christmas Gifts",
    imagePlaceholder: "Tree & Gifts"
  },
  {
    id: "valentines",
    title: "Valentine's Day",
    description: "Celebrate love in the most beautiful way",
    bgColor: "bg-[#FFEBEE]",
    textColor: "text-rose-900",
    buttonBg: "bg-rose-500 hover:bg-rose-600",
    buttonText: "Shop Valentine Gifts",
    imagePlaceholder: "Teddy & Heart"
  }
]

export function FestivalCollectionsGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold flex items-center justify-center gap-2">
            Explore Our Festival Collections <Heart className="w-5 h-5 text-primary fill-transparent" />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {festivals.map((fest) => (
            <div key={fest.id} className={`${fest.bgColor} rounded-3xl p-6 md:p-8 relative overflow-hidden group hover:shadow-lg transition-all border border-black/5 min-h-[220px] flex items-center`}>
              
              <div className="relative z-10 w-3/5">
                <h3 className={`font-bold text-2xl mb-2 ${fest.textColor}`}>
                  {fest.title}
                </h3>
                <p className={`text-sm mb-6 opacity-80 ${fest.textColor}`}>
                  {fest.description}
                </p>
                <Link href={`/special-occasions/${fest.id}`} className={`inline-flex items-center text-xs font-bold px-4 py-2 rounded-full text-white transition-colors ${fest.buttonBg}`}>
                  {fest.buttonText} <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              
              {/* Themed Image Placeholder */}
              <div className="absolute right-0 top-0 w-2/5 h-full flex items-center justify-center translate-x-4">
                <div className="w-full h-full bg-white/20 backdrop-blur-sm rounded-l-[100px] flex items-center justify-center border-l-4 border-white/40 shadow-inner p-4 text-center">
                  <span className={`text-xs font-medium ${fest.textColor}`}>{fest.imagePlaceholder}</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
