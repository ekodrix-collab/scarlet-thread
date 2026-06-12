"use client"

import Image from "next/image"
import { motion, Variants } from "framer-motion"

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

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50, rotateX: -45, scale: 0.9 },
    show: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0, 
      scale: 1, 
      transition: { 
        type: "spring", 
        stiffness: 120, 
        damping: 14 
      } 
    },
  }

  return (
    <section className="py-6 bg-white overflow-hidden perspective-1000">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="rounded-[24px] bg-[#FAF5FF] border border-[#E9D5FF] px-8 py-6"
          style={{ transformPerspective: 1000 }}
        >
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10"
          >
            {props.map((prop, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center gap-4 group"
              >
                {/* Icon Circle */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white border border-[#E9D5FF] shadow-sm group-hover:border-[#c86dd7] transition-colors duration-500 overflow-hidden relative">
                  <motion.div
                    className="absolute inset-0 bg-[#f6edff] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: [0, -10, 10, -5, 5, 0] }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10"
                  >
                    <Image
                      src={prop.icon}
                      alt={prop.title}
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div>
                  <h4 className="text-[15px] font-semibold text-primary mb-1 transition-colors duration-300 group-hover:text-[#b05dc0]">
                    {prop.title}
                  </h4>

                  <div className="text-[13px] text-[#6B7280] leading-relaxed">
                    {prop.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}