"use client"

import { ArrowRight, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

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

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    clipPath: "inset(100% 0 0 0)", // sophisticated curtain reveal
  },
  show: { 
    opacity: 1, 
    y: 0, 
    clipPath: "inset(0% 0 0 0)",
    transition: { 
      duration: 1.2, 
      ease: [0.16, 1, 0.3, 1] // Custom ease curve for a very smooth landing
    } 
  },
}

const contentReveal = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.4, ease: "easeOut" } }
}

export function FestivalCollectionsGrid() {
  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-heading font-bold flex items-center justify-center gap-2">
            Explore Our Festival Collections
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="w-5 h-5 text-primary fill-transparent drop-shadow-sm" />
            </motion.div>
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {festivals.map((fest) => (
            <motion.div key={fest.id} variants={itemVariants} className="group relative h-[190px] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500">
              <Link
                href={`/special-occasions/${fest.id}`}
                className="block w-full h-full"
              >
                {/* Full Banner Image with slow initial scale out */}
                <motion.div 
                  className="absolute inset-0 w-full h-full"
                  initial={{ scale: 1.3 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={`/images/festival-images/${fest.id}.png`}
                    alt={fest.title}
                    fill
                    priority
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </motion.div>

                {/* Content Overlay */}
                <div className="absolute ml-18 inset-0 z-10 flex items-center">
                  <motion.div variants={contentReveal} className="p-1 max-w-[55%]">
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
                      className={`inline-flex items-center gap-2 px-4 py-2 mt-2 rounded-xl text-xs font-bold text-white shadow-sm transition-all duration-300 ${fest.buttonBg}`}
                    >
                      {fest.buttonText}
                      <motion.div
                        className="inline-block"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <ArrowRight className="w-3.5 h-3.5" />
                      </motion.div>
                    </span>
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}