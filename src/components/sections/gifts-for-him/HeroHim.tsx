"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Heart, Award } from "lucide-react"

export function HeroHim() {
  const titleText = "Make Every\nGift Personal"
  const typingSpeed = 0.09

  return (
    <section className="relative bg-[#FFF7FD] py-6 md:py-6 overflow-hidden">
      {/* Background Image — Desktop */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="/images/forhimpage/scarlet-forhimbanner.png"
          alt="Personalized gifts for him"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Background Image — Mobile */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src="/images/forhimpage/scarlet-mobilebanner.png"
          alt="Personalized gifts for him"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        {/* Gradient overlay so text stays readable on mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/10 pointer-events-none" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10"
      >
        <div className="flex flex-col md:flex-row items-center gap-12 min-h-[360px] md:min-h-[500px]">
          {/* Left Content */}
          <div className="flex-1 text-left py-10 sm:py-14 md:py-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-block text-[10px] font-semibold tracking-widest text-primary uppercase mb-3"
            >
              Gifts For Him
            </motion.div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-4 md:mb-5 leading-tight">
              {titleText.split("").map((char, index) => {
                if (char === "\n") {
                  return <br key={index} className="hidden md:block" />
                }

                const isPersonal = index >= titleText.indexOf("Personal")

                return (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: index * typingSpeed,
                      duration: 0.010,
                    }}
                    className={isPersonal ? "text-primary" : ""}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                )
              })}
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.2, duration: 0.5 }}
              className="text-sm md:text-base text-muted-foreground mb-4 max-w-md"
            >
              Thoughtfully embroidered gifts for husbands, boyfriends, fathers,
              brothers and best friends.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5, duration: 0.5 }}
              className="text-sm text-foreground/80 mb-6 max-w-md"
            >
              Personalized with names, dates, quotes, and memories that last
              forever.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.8, duration: 0.5 }}
            >
              <Button
                size="lg"
                className="rounded-md px-6 h-10 md:h-11 text-sm shadow-lg shadow-primary/20 mb-6 md:mb-10"
              >
                Shop Best Sellers
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.1, duration: 0.5 }}
              className="flex flex-wrap justify-start gap-4 md:gap-6 text-xs font-medium text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <Award className="w-3 h-3 text-primary" />
                Premium Quality
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3 h-3 text-primary" />
                Personalized For You
              </div>

              <div className="flex items-center gap-2">
                <Heart className="w-3 h-3 text-primary" />
                Made with Love
              </div>
            </motion.div>
          </div>

          {/* Empty Right Side - Preserves Original Layout */}
          <div className="flex-1 hidden md:block" />
        </div>
      </motion.div>

      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-0 w-1/3 h-1/2 bg-gradient-to-r from-secondary/50 to-transparent"></div>
      </div>
    </section>
  )
}