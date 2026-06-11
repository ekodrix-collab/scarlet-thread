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
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-4xl font-heading font-bold flex items-center justify-center gap-2">
            Why Shop Occasions With Us?

            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </h2>
        </div>

        {/* Main Box */}
        <div className="bg-[#FCF9FF] border border-primary/10 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6">

            {reasons.map((reason, index) => (
              <div
                key={index}
                className="relative flex items-center gap-3 px-5 py-6"
              >
                {/* Divider Line */}
                {index !== reasons.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-10 w-px bg-primary/15" />
                )}

                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-full border border-primary/15 bg-white flex items-center justify-center shrink-0">
                  <Image
                    src={reason.image}
                    alt={reason.title}
                    width={26}
                    height={26}
                    className="object-contain"
                  />
                </div>

                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-[11px] font-semibold text-primary whitespace-nowrap mb-1">
                    {reason.title}
                  </h4>

                  <p className="text-[10px] text-muted-foreground leading-relaxed">
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