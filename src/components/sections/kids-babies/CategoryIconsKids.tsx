"use client"

import { motion } from "framer-motion"
import { Baby, Shirt, Bath, Layers, ToyBrick, Backpack, BedDouble, Gift } from "lucide-react"

export function CategoryIconsKids() {
  const categories = [
    { name: "Newborn Gifts", icon: <Baby strokeWidth={1.5} className="w-8 h-8" /> },
    { name: "Baby Clothing", icon: <Shirt strokeWidth={1.5} className="w-8 h-8" /> },
    { name: "Hooded Towels", icon: <Bath strokeWidth={1.5} className="w-8 h-8" /> },
    { name: "Blankets & Wraps", icon: <Layers strokeWidth={1.5} className="w-8 h-8" /> },
    { name: "Soft Toys", icon: <ToyBrick strokeWidth={1.5} className="w-8 h-8" /> },
    { name: "Backpacks", icon: <Backpack strokeWidth={1.5} className="w-8 h-8" /> },
    { name: "Bedding Sets", icon: <BedDouble strokeWidth={1.5} className="w-8 h-8" /> },
    { name: "Return Gifts", icon: <Gift strokeWidth={1.5} className="w-8 h-8" /> },
  ]

  return (
    <section className="py-6 md:py-10 bg-white border-b border-border/40">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08
              }
            }
          }}
          className="flex overflow-x-auto pb-4 md:pb-0 hide-scrollbar gap-4 md:gap-6 justify-start lg:justify-center"
        >
          {categories.map((cat, index) => (
            <motion.div 
              key={index} 
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
              }}
              className="flex flex-col items-center gap-3 min-w-[80px] md:min-w-[100px] cursor-pointer group"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white flex items-center justify-center text-[#FF69B4] group-hover:bg-[#FF69B4] group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-sm border border-[#FF69B4]/20 group-hover:border-transparent">
                {cat.icon}
              </div>
              <span className="text-xs md:text-sm font-medium text-center text-foreground group-hover:text-[#FF69B4] transition-colors line-clamp-2">
                {cat.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  )
}
