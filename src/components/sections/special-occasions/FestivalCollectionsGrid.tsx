import { ArrowRight, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const festivals = [
  {
    id: "eid1",
    title: "Eid Mubarak",
    description: "Celebrate with faith and beautiful gifts",
    textColor: "text-emerald-900",
    buttonBg: "bg-emerald-800 hover:bg-emerald-900",
    buttonText: "Shop Eid Gifts"
  },
  {
    id: "onam1",
    title: "Happy Onam",
    description: "Celebrate tradition with personalized gifts",
    textColor: "text-orange-900",
    buttonBg: "bg-orange-500 hover:bg-orange-600",
    buttonText: "Shop Onam Gifts"
  },
  {
    id: "diwali1",
    title: "Happy Diwali",
    description: "Spread light, love and happiness",
    textColor: "text-yellow-400",
    buttonBg: "bg-yellow-500 hover:bg-yellow-600 text-purple-900",
    buttonText: "Shop Diwali Gifts"
  },
  {
    id: "rakhi",
    title: "Raksha Bandhan",
    description: "A bond that deserves something special",
    textColor: "text-[#D32F2F]",
    buttonBg: "bg-[#FF5252] hover:bg-[#D32F2F]",
    buttonText: "Shop Rakhi Gifts"
  },
  {
    id: "christmas1",
    title: "Christmas Joy",
    description: "Make Christmas more memorable",
    textColor: "text-green-900",
    buttonBg: "bg-green-700 hover:bg-green-800",
    buttonText: "Shop Christmas Gifts"
  },
  {
    id: "valentines1",
    title: "Valentine's Day",
    description: "Celebrate love in the most beautiful way",
    textColor: "text-rose-900",
    buttonBg: "bg-rose-500 hover:bg-rose-600",
    buttonText: "Shop Valentine Gifts"
  }
]

export function FestivalCollectionsGrid() {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold flex items-center justify-center gap-2">
            Explore Our Festival Collections
            <Heart className="w-5 h-5 text-primary fill-transparent" />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {festivals.map((fest) => (
            <Link
              key={fest.id}
              href={`/special-occasions/${fest.id}`}
              className="relative h-[190px] overflow-hidden rounded-3xl group shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Full Banner Image */}
              <Image
                src={`/images/festival-images/${fest.id}.png`}
                alt={fest.title}
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Content Overlay */}
              <div className="absolute ml-18 inset-0 z-10 flex items-center">
                <div className="p-1 max-w-[55%]">
                  <h3
                    className={`text-2xl font-bold leading-tight  ${fest.textColor}`}
                  >
                    {fest.title}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed mb-1 opacity-90 ${fest.textColor}`}
                  >
                    {fest.description}
                  </p>

                  <span
                    className={`inline-flex items-center gap-1 px-4 py-2 rounded-lg text-xs font-semibold text-white ${fest.buttonBg}`}
                  >
                    {fest.buttonText}
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}