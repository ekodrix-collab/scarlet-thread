"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Heart, Award } from "lucide-react"
import { staggerContainer, fadeUp } from "@/lib/animations"

export function HeroHim() {
  const titleText = "Make Every Gift "

  return (
    <section className="relative bg-[#FFF7FD] py-6 md:py-6 overflow-hidden">
      {/* Background Image — Desktop */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 hidden md:block"
      >
        <Image
          src="/images/forhimpage/scarlet-forhimbanner.png"
          alt="Personalized gifts for him"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Background Image — Mobile */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 md:hidden"
      >
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
      </motion.div>

      <motion.div
        variants={staggerContainer(0.2)}
        initial="hidden"
        animate="show"
        className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10"
      >
        <div className="flex flex-col md:flex-row items-center gap-12 min-h-[360px] md:min-h-[500px]">
          {/* Left Content */}
          <div className="flex-1 text-left py-10 sm:py-14 md:py-0">
            <motion.div
              variants={fadeUp(0.8, 40)}
              className="inline-block text-[10px] font-semibold tracking-widest text-primary uppercase mb-3"
            >
              <div className="flex items-center gap-1.5">
                <motion.div
                  animate={{
                    y: [0, -6, 0],
                    rotate: [0, 8, -8, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <Heart className="h-3 w-3 fill-primary text-primary" />
                </motion.div>
                <span>Gifts For Him</span>
              </div>
            </motion.div>

            <motion.h1
              variants={fadeUp(0.8, 40)}
              className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-4 md:mb-5 leading-tight"
            >
              {titleText}
              <br className="hidden md:block" />
              <span className="text-primary">Personal</span>
            </motion.h1>

            <motion.p
              variants={fadeUp(0.8, 40)}
              className="text-sm md:text-base text-muted-foreground mb-4 max-w-md"
            >
              Thoughtfully embroidered gifts for husbands, boyfriends, fathers,
              brothers and best friends.
            </motion.p>

            <motion.p
              variants={fadeUp(0.8, 40)}
              className="text-sm text-foreground/80 mb-6 max-w-md"
            >
              Personalized with names, dates, quotes, and memories that last
              forever.
            </motion.p>

            <motion.div
              variants={fadeUp(0.8, 40)}
              className="mb-6 md:mb-10 flex flex-wrap items-center gap-2.5"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
              >
                <Link
                  href="/gifts-for-him"
                  className="inline-flex h-10 md:h-11 items-center rounded-full bg-primary px-6 text-[0.78rem] md:text-sm font-bold text-white shadow transition-all duration-200 hover:bg-primary/90 hover:-translate-y-px active:translate-y-0"
                >
                  Shop Best Sellers
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
              >
                <Link
                  href="/gifts-for-him"
                  className="inline-flex h-10 md:h-11 items-center rounded-full border border-primary/60 bg-white/60 px-6 text-[0.78rem] md:text-sm font-semibold text-primary backdrop-blur-sm transition-all duration-200 hover:bg-white hover:-translate-y-px active:translate-y-0"
                >
                  Explore Collection
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                    className="inline-block"
                  >
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={fadeUp(0.8, 40)}
              className="flex flex-wrap items-center justify-start gap-3 md:gap-4 text-xs font-medium text-[#444]"
            >
              <div className="flex items-center gap-1.5 rounded-full bg-white/55 px-3 py-2 md:py-2.5 text-[0.7rem] md:text-xs font-medium text-[#444] shadow-sm backdrop-blur-sm">
                <span className="text-primary"><Award className="h-3 w-3" /></span>
                Premium Quality
              </div>

              <div className="flex items-center gap-1.5 rounded-full bg-white/55 px-3 py-2 md:py-2.5 text-[0.7rem] md:text-xs font-medium text-[#444] shadow-sm backdrop-blur-sm">
                <span className="text-primary"><CheckCircle2 className="h-3 w-3" /></span>
                Personalized For You
              </div>

              <div className="flex items-center gap-1.5 rounded-full bg-white/55 px-3 py-2 md:py-2.5 text-[0.7rem] md:text-xs font-medium text-[#444] shadow-sm backdrop-blur-sm">
                <span className="text-primary"><Heart className="h-3 w-3" /></span>
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