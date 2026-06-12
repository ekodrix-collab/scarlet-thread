"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function CategoryIconsOccasions() {
  const categories = [
    { name: "Eid Collection", image: "/images/specialOccasion/eid.png" },
    { name: "Onam Gifts", image: "/images/specialOccasion/onam.png" },
    { name: "Diwali Gifts", image: "/images/specialOccasion/diwali.png" },
    { name: "Raksha Bandhan", image: "/images/specialOccasion/raksha-bandhan.png" },
    { name: "Christmas Gifts", image: "/images/specialOccasion/christmas.png" },
    { name: "Valentine's Day", image: "/images/specialOccasion/valentine.png" },
    { name: "New Year Gifts", image: "/images/specialOccasion/newyear.png" },
    { name: "All Occasions", image: "/images/specialOccasion/all-occasions.png" },
  ]

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const item = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section className="md:py-5 bg-white border-b border-border/40">
      <div className="container mx-auto px-4">

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex overflow-x-auto pb-4 md:pb-0 hide-scrollbar gap-2 md:gap-15 justify-start lg:justify-center"
        >
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -6 }}
              className="flex flex-col items-center gap-2 md:gap-3 min-w-[76px] md:min-w-[110px] cursor-pointer group"
            >
              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotate: 3,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
                className="relative w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-primary/10 overflow-hidden"
              >
                {/* Glow Effect */}
                <motion.div
                  className="hidden md:block absolute inset-0 rounded-2xl border border-primary/20"
                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.2, 0.7, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />

                {/* Floating Image */}
                <motion.div
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    duration: 3 + index * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-full h-full"
                >
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-contain p-1.5 md:p-2"
                  />
                </motion.div>
              </motion.div>

              <motion.span
                whileHover={{ y: -2 }}
                className="text-xs md:text-sm font-medium text-center text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2"
              >
                {cat.name}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>

      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }

            .hide-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `,
        }}
      />
    </section>
  )
}