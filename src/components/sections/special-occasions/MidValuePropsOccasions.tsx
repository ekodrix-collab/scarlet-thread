import Image from "next/image"
import { Heart, Award, Truck } from "lucide-react"

export function MidValuePropsOccasions() {
  const props = [
    {
      icon: "/images/icons/personalized.png",
      title: "Personalized for You",
      desc: (
        <>
          Add names, dates
          <br />
          & special messages
        </>
      ),
    },
    {
      icon: "/images/icons/premium-quality.png",
      title: "Premium Quality",
      desc: (
        <>
          Finest materials &
          <br />
          embroidery
        </>
      ),
    },
    {
      icon: "/images/icons/made-with-love.png",
      title: "Made With Love",
      desc: (
        <>
          Handcrafted with care
          <br />
          by our artisans
        </>
      ),
    },
    {
      icon: "/images/icons/fast-delivery.png",
      title: "Fast Delivery",
      desc: (
        <>
          Safe & quick delivery
          <br />
          across India
        </>
      ),
    },
  ]

  return (
    <section className="py-6 bg-white">
      <div className="container mx-auto px-4">
        <div className="rounded-[24px] bg-[#FAF5FF] border border-[#E9D5FF] px-8 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
            {props.map((prop, index) => (
              <div
                key={index}
                className="flex items-center gap-4"
              >
                {/* Icon Circle */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white border border-[#E9D5FF]">
                  <Image
                    src={prop.icon}
                    alt={prop.title}
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>

                {/* Content */}
                <div>
                  <h4 className="text-[15px] font-semibold text-primary mb-1">
                    {prop.title}
                  </h4>

                  <div className="text-[13px] text-[#6B7280] leading-relaxed">
                    {prop.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}