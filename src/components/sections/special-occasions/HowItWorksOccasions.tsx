"use client"

import Image from "next/image"
import { motion, Variants } from "framer-motion"

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

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.5, // Slower stagger for a profound journey feel
      },
    },
  }

  const stepVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.5 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { 
        type: "spring",
        stiffness: 80,
        damping: 10,
        mass: 1.2
      } 
    },
  }

  const lineVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    show: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeInOut" 
      } 
    },
  }

  return (
    <section className="py-1 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-[#faf6fd] border border-[#f0e6f7] rounded-[28px] px-6 md:px-10 py-10 shadow-[inset_0_0_40px_rgba(200,109,215,0.05)]"
        >

          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2f1f3a] flex items-center justify-center gap-2">
              How It Works
              <motion.div
                animate={{ rotate: [0, 15, -10, 5, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C86DD7"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </motion.div>
            </h2>
          </div>

          {/* Steps */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-4 relative"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={stepVariants}
                className="relative flex flex-col items-center text-center flex-1 group"
              >
                {/* Icon Circle */}
                <div className="relative z-10 w-20 h-20 rounded-full bg-white border border-[#ecdaf4] shadow-sm flex items-center justify-center mb-5 transition-all duration-500 group-hover:border-[#c86dd7] group-hover:shadow-[0_10px_30px_-5px_rgba(200,109,215,0.4)] group-hover:-translate-y-2">
                  <motion.div whileHover={{ scale: 1.1, rotate: [-5, 5, -5, 0] }} transition={{ duration: 0.4 }}>
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={36}
                      height={36}
                      className="object-contain"
                    />
                  </motion.div>
                </div>

                <h3 className="font-semibold text-[#3a2944] text-base mb-2 group-hover:text-[#c86dd7] transition-colors duration-300">
                  {step.title}
                </h3>

                <p className="text-sm text-[#7f7388] leading-relaxed max-w-[150px]">
                  {step.desc}
                </p>

                {/* Desktop SVG Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[65%] w-[70%] z-0">
                    <svg className="w-full h-[24px] overflow-visible" preserveAspectRatio="none">
                      <motion.path 
                        d="M 20 12 L 100 12" 
                        vectorEffect="non-scaling-stroke"
                        stroke="#d7b8e6" 
                        strokeWidth="2" 
                        strokeDasharray="6 6"
                        fill="none" 
                        variants={lineVariants}
                      />
                      <motion.path 
                        d="M 95 7 L 102 12 L 95 17" 
                        vectorEffect="non-scaling-stroke"
                        stroke="#c86dd7" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        fill="none" 
                        variants={lineVariants}
                      />
                    </svg>
                  </div>
                )}

                {/* Mobile Line */}
                {index < steps.length - 1 && (
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, scaleY: 0, originY: 0 },
                      show: { opacity: 1, scaleY: 1, transition: { duration: 0.6 } }
                    }}
                    className="lg:hidden h-12 border-l-2 border-dashed border-[#d7b8e6] my-4 origin-top" 
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}