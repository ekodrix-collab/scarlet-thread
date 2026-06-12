"use client"

import Image from "next/image"
import { motion, Variants } from "framer-motion"

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

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.9, rotateY: 15 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotateY: 0,
      transition: { 
        type: "spring", 
        stiffness: 90, 
        damping: 15 
      } 
    },
  }

  return (
    <section className="py-12 bg-white relative overflow-hidden perspective-1000">
      <div className="container mx-auto px-4 max-w-[1400px]">

        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -20, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold flex items-center justify-center gap-3 text-[#2f1f3a]">
            Why Shop Occasions With Us?
            <motion.div
              animate={{ rotate: [0, -15, 15, -5, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C86DD7"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="drop-shadow-sm"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </motion.div>
          </h2>
        </motion.div>

        {/* Main Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#FCF9FF] border border-[#f0e6f7] rounded-3xl overflow-hidden shadow-sm"
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
          >

            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative flex flex-col items-center text-center px-4 py-8 md:py-10 hover:bg-white transition-colors duration-500"
              >
                {/* Divider Line */}
                {index !== reasons.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-16 w-px bg-[#f0e6f7]" />
                )}

                {/* Icon Circle */}
                <div className="w-16 h-16 mb-5 rounded-full border border-[#ecdaf4] bg-white shadow-sm flex items-center justify-center shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:border-[#c86dd7] group-hover:shadow-[0_10px_25px_-5px_rgba(200,109,215,0.3)]">
                  <motion.div whileHover={{ scale: 1.15, rotate: 8 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Image
                      src={reason.image}
                      alt={reason.title}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </motion.div>
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-[15px] font-bold text-[#3a2944] mb-2 leading-tight group-hover:text-[#b05dc0] transition-colors duration-300">
                    {reason.title}
                  </h4>

                  <p className="text-[13px] text-[#7f7388] leading-relaxed max-w-[140px] mx-auto">
                    {reason.desc}
                  </p>
                </div>
              </motion.div>
            ))}

          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}