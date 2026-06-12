"use client"

import { motion, Variants } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Sparkles, Star, Heart } from "lucide-react"

export function HeroHer() {
  const titleText = "Made for Her,\nPersonalized\nwith Love"
  const typingSpeed = 0.09

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const fadeUp: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="relative bg-[#fce8ec] py-6 md:py-6 overflow-hidden">
      {/* Background Image — Desktop */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 hidden md:block"
      >
        <Image
          src="/images/forher/scarlet-forherbanner-image.png"
          alt="Personalized gifts for her — premium embroidered set"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Gradient overlay so left text stays readable on desktop */} 
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, #fce8ec 0%, #fce8eccc 38%, #fce8ec88 58%, transparent 80%)",
          }}
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
          src="/images/forher/scarlet-forhermobile.png"
          alt="Personalized gifts for her — premium embroidered set"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        {/* Gradient overlay so text stays readable on mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/10 pointer-events-none" />
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10"
      >
        <div className="flex flex-col md:flex-row items-center gap-12 min-h-[360px] md:min-h-[500px]">
          {/* Left Content */}
          <div className="flex-1 text-left py-10 sm:py-14 md:py-0">
            <motion.div
              variants={fadeUp}
              className="inline-block text-[10px] font-semibold tracking-widest text-[#c0004e] uppercase mb-3"
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
                  <Heart className="h-3 w-3 fill-[#c0004e] text-[#c0004e]" />
                </motion.div>
                <span>Gifts For Her</span>
              </div>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-3xl md:text-5xl lg:text-6xl font-sans font-extrabold text-[#111] mb-4 md:mb-5 leading-tight"
            >
              {titleText.split("").map((char, index) => {
                if (char === "\n") {
                  return <br key={index} />
                }

                const isPersonalized = index >= titleText.indexOf("Personalized") && index < titleText.indexOf("Personalized") + 12

                return (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: index * typingSpeed,
                      duration: 0.010,
                    }}
                    className={isPersonalized ? "text-[#c0004e]" : ""}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                )
              })}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-sm md:text-base text-[#666] mb-6 max-w-md"
            >
              Thoughtful, personalized &amp; embroidered gifts that celebrate the
              most special women in your life.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mb-6 flex flex-wrap items-center gap-2.5"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
              >
                <Link
                  href="/gifts-for-her"
                  className="inline-flex h-10 md:h-11 items-center rounded-full bg-[#c0004e] px-6 text-[0.78rem] md:text-sm font-bold text-white shadow transition-all duration-200 hover:bg-[#a0003f] hover:-translate-y-px active:translate-y-0"
                >
                  Shop Best Sellers
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
              >
                <Link
                  href="/gifts-for-her"
                  className="inline-flex h-10 md:h-11 items-center rounded-full border border-[#c0004e]/60 bg-white/60 px-6 text-[0.78rem] md:text-sm font-semibold text-[#c0004e] backdrop-blur-sm transition-all duration-200 hover:bg-white hover:-translate-y-px active:translate-y-0"
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
              variants={fadeUp}
              className="flex flex-wrap items-center justify-start gap-3 md:gap-4 text-xs font-medium text-[#444]"
            >
              <TrustBadge icon={<Sparkles className="h-3 w-3" />} label="Personalized &amp; Unique" />
              <TrustBadge icon={<Star className="h-3 w-3" />} label="Premium Quality" />
              <TrustBadge icon={<Heart className="h-3 w-3" />} label="Embroidered Items" />
            </motion.div>
          </div>

          {/* Empty Right Side - Preserves Layout */}
          <div className="flex-1 hidden md:block" />
        </div>
      </motion.div>
    </section>
  )
}

/* ── Helper ── */
function TrustBadge({
  icon,
  label,
}: {
  icon: React.ReactNode
  label: string
}) {
  return (
    <div className="flex items-center gap-1.5 rounded-full bg-white/55 px-3 py-2 md:py-2.5 text-[0.7rem] md:text-xs font-medium text-[#444] shadow-sm backdrop-blur-sm">
      <span className="text-[#c0004e]">{icon}</span>
      <span dangerouslySetInnerHTML={{ __html: label }} />
    </div>
  )
}
