import Image from "next/image"

export function WhyShopOccasions() {
  const reasons = [
    {
      image: "/images/why-shop/festival10.png",
      title: "Wide Range of Festivals",
      desc: "All major festivals covered",
    },
    {
      image: "/images/why-shop/personalization10.png",
      title: "Custom Personalization",
      desc: "Make it unique with your personal touch",
    },
    {
      image: "/images/why-shop/handmade10.png",
      title: "Handmade With Love",
      desc: "Crafted by skilled artisans",
    },
    {
      image: "/images/why-shop/packaging10.png",
      title: "Premium Packaging",
      desc: "Elegant & gift ready packaging",
    },
    {
      image: "/images/why-shop/delivery10.png",
      title: "On-Time Delivery",
      desc: "Delivering happiness on every occasion",
    },
    {
      image: "/images/why-shop/returns10.png",
      title: "Hassle Free Returns",
      desc: "Easy returns & exchange policy",
    },
  ]

  return (
    <section className="py-12 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1400px]">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold flex items-center justify-center gap-3 text-[#2f1f3a]">
            Why Shop Occasions With Us?
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#C86DD7"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </h2>
        </div>

        {/* Main Box */}
        <div className="bg-[#FCF9FF] border border-[#f0e6f7] rounded-3xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">

            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center text-center px-4 py-8 md:py-10 hover:bg-white transition-colors duration-300"
              >
                {/* Divider Line */}
                {index !== reasons.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-16 w-px bg-[#f0e6f7]" />
                )}

                {/* Icon Circle */}
                <div className="w-16 h-16 mb-4 rounded-full border border-[#ecdaf4] bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-[-5deg] transition-all duration-300 group-hover:border-[#c86dd7] group-hover:shadow-[0_8px_20px_-5px_rgba(200,109,215,0.2)]">
                  <Image
                    src={reason.image}
                    alt={reason.title}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-[#3a2944] mb-1.5 leading-tight">
                    {reason.title}
                  </h4>

                  <p className="text-xs text-[#7f7388] leading-relaxed max-w-[140px] mx-auto">
                    {reason.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}