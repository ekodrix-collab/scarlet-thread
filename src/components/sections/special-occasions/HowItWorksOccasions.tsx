import Image from "next/image"

export function HowItWorksOccasions() {
  const steps = [
    {
      image: "/images/icons/occasion1.png",
      title: "Choose Occasion",
      desc: "Select the festival or special moment",
    },
    {
      image: "/images/icons/gift2.png",
      title: "Pick Your Gift",
      desc: "Browse our curated collection",
    },
    {
      image: "/images/icons/personalize.png",
      title: "Personalize It",
      desc: "Add name, message or design",
    },
    {
      image: "/images/icons/craft.png",
      title: "We Craft It",
      desc: "Our artisans handcraft with love",
    },
    {
      image: "/images/icons/delivery.png",
      title: "Delivered With Love",
      desc: "Delivered to your doorstep on time",
    },
  ]

  return (
    <section className="py-1 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#faf6fd] border border-[#f0e6f7] rounded-[28px] px-6 md:px-10 py-10">

          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2f1f3a] flex items-center justify-center gap-2">
              How It Works
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C86DD7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </h2>
          </div>

          {/* Steps */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-4 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center flex-1"
              >
                {/* Icon Circle */}
                <div className="relative z-10 w-20 h-20 rounded-full bg-white border border-[#ecdaf4] shadow-sm flex items-center justify-center mb-4">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                </div>

                <h3 className="font-semibold text-[#3a2944] text-base mb-2">
                  {step.title}
                </h3>

                <p className="text-sm text-[#7f7388] leading-relaxed max-w-[150px]">
                  {step.desc}
                </p>

                {/* Desktop Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-10 left-[90%] w-[60px] items-center justify-center z-0">
                    <div className="flex-1 border-t-2 border-dashed border-[#d7b8e6]" />

                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#C86DD7"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="-ml-1"
                    >
                      <path d="M5 12h14" />
                      <path d="m13 6 6 6-6 6" />
                    </svg>
                  </div>
                )}

                {/* Mobile Line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden h-10 border-l-2 border-dashed border-[#d7b8e6] my-3" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}