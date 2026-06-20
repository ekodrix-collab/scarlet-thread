"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { GiftIcon, HeartIcon, StarIcon } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

// ---------------------------------------------------------------------------
// Slide data
// Each slide carries:
//   - desktop background (replaces scarlet-homebanner.png per slide)
//   - tablet image  (sm–md, shown in the top image block)
//   - mobile image  (xs, shown in the top image block)
//   - heading / description / cta link
// ---------------------------------------------------------------------------
const slides = [
  {
    id: 0,
    desktopBg: "/images/heropage/scarlet-couple1.png",
    tabletImg: "/images/heropage/scarlet-couple1.png",
    mobileImg: "/images/heropage/scarlet-mobile.png",
    ctaLink: "/gifts",
  },
  {
    id: 1,
    desktopBg: "/images/heropage/scarlet-baby1.png",
    tabletImg: "/images/heropage/scarlet-baby1.png",
    mobileImg: "/images/heropage/scarlet-mobilebaby.png",
    ctaLink: "/gifts",
  },
  {
    id: 2,
    desktopBg: "/images/heropage/scarlet-couple2.png",
    tabletImg: "/images/heropage/scarlet-couple2.png",
    mobileImg: "/images/heropage/scarlet-mobilecouple.png",
    ctaLink: "/gifts",
  },
  {
    id: 3,
    desktopBg: "/images/heropage/scarlet-lady2.png",
    tabletImg: "/images/heropage/scarlet-lady2.png",
    mobileImg: "/images/heropage/scarlet-mobilelady.png",
    ctaLink: "/gifts",
  },
]

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------
const contentVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
  exit: { opacity: 0, transition: { duration: 0.3, ease: "easeIn" as const } },
}

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const, delay: 0.05 } },
}

const descVariants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" as const, delay: 0.3 } },
}

const btnVariants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" as const, delay: 0.5 } },
}

const imageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease: "easeOut" as const } },
  exit: { opacity: 0, transition: { duration: 0.25, ease: "easeIn" as const } },
}

// ---------------------------------------------------------------------------
// Dot indicator
// ---------------------------------------------------------------------------
function Dots({ total, active, onChange }: { total: number; active: number; onChange: (i: number) => void }) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onChange(i)}
          aria-label={`Go to slide ${i + 1}`}
          className={`rounded-full transition-all duration-300 ${i === active
              ? "bg-primary w-5 h-2"
              : "bg-primary/30 hover:bg-primary/60 w-2 h-2"
            }`}
        />
      ))}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------
export function Hero() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [])

  // Auto-advance every 5 s
  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [paused, next])

  const slide = slides[current]

  return (
    <section
      className="relative overflow-hidden w-full lg:py-16 xl:py-0 min-h-screen flex flex-col lg:flex-row lg:items-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Desktop background — cross-fades per slide ── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`desktop-bg-${current}`}
          className="absolute inset-0 z-0 select-none pointer-events-none bg-cover bg-right hidden lg:block"
          style={{ backgroundImage: `url('${slide.desktopBg}')` }}
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        />
      </AnimatePresence>

      {/* ══════════════════════════════════════════════
          Mobile / Tablet layout  (< lg)
      ══════════════════════════════════════════════ */}
      <div className="lg:hidden flex flex-col w-full h-[100svh] relative z-20">

        {/* Image — cross-fades, different src for mobile vs tablet */}
        <div className="relative w-full flex-shrink-0 overflow-hidden" style={{ height: "100svh" }}>
          <AnimatePresence mode="sync">
            <motion.div
              key={`mobile-img-${current}`}
              className="absolute inset-0 bg-cover bg-center"
              // mobile: mobileImg, sm+: tabletImg via inline style trick using CSS custom property
              style={{
                backgroundImage: `url('${slide.mobileImg}')`,
              }}
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            />
          </AnimatePresence>

          {/* Tablet override via a second layer visible only sm+ */}
          <AnimatePresence mode="sync">
            <motion.div
              key={`tablet-img-${current}`}
              className="absolute inset-0 bg-cover bg-center hidden sm:block"
              style={{ backgroundImage: `url('${slide.tabletImg}')` }}
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            />
          </AnimatePresence>
        </div>

        {/* Content — pinned to top on mobile */}
        <div className="absolute top-28 left-0 w-full px-4 sm:px-8 py-6 flex flex-col items-start sm:items-center space-y-3 z-30">
          <motion.div
            className="flex flex-col items-start sm:items-center space-y-3"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-3xl font-bold uppercase text-foreground text-left sm:text-center"
              variants={headingVariants}
            >
              More Than a Gift.<br className="block sm:hidden" />
              A Memory in the <span className="text-primary">Making</span>
            </motion.h1>

            <motion.p
              className="text-sm text-muted-foreground text-left sm:text-center max-w-xs"
              variants={descVariants}
            >
              Whether you're celebrating someone special or treating yourself, make it uniquely personal.
            </motion.p>

            <motion.div className="pt-1" variants={btnVariants}>
              <Link href="/products">
                <Button size="lg" className="text-base h-12 px-8 bg-primary cursor-pointer hover:bg-primary/90 text-primary-foreground font-semibold rounded-[5px] shadow-md transition-all">
                  Shop Now
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Dots — pinned to bottom on mobile */}
        <div className="absolute bottom-10 left-0 w-full flex justify-start sm:justify-center px-4 sm:px-8 z-30">
          <Dots total={slides.length} active={current} onChange={setCurrent} />
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          Desktop layout  (≥ lg)
      ══════════════════════════════════════════════ */}
      <div className="hidden lg:block w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          <div className="space-y-5 z-20 relative">

            {/* Decorative hearts — unchanged */}
            <div className="absolute -top-3 left-[32%] w-5 h-5 text-pink-400 opacity-70 transform rotate-12 animate-pulse hidden md:block">
              <HeartIcon />
            </div>
            <div className="absolute top-[42%] -right-8 w-6 h-6 text-pink-400 opacity-70 transform -rotate-12 animate-pulse hidden md:block">
              <HeartIcon />
            </div>

            {/* Animated content block */}
            <motion.div
              className="space-y-5"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-foreground"
                variants={headingVariants}
              >
                More Than a Gift.<br />
                A Memory in the <span className="text-primary">Making</span>
              </motion.h1>

              <motion.p
                className="text-sm text-muted-foreground max-w-md"
                variants={descVariants}
              >
                Whether you're celebrating someone special or treating yourself, make it uniquely personal.
              </motion.p>

              <motion.div
                className="flex items-center gap-6 pt-2"
                variants={btnVariants}
              >
                <Link href="/products">
                  <Button size="lg" className="text-base h-12 px-8 bg-primary cursor-pointer hover:bg-primary/90 text-primary-foreground font-semibold rounded-[5px] shadow-md transition-all">
                    Shop Now
                  </Button>
                </Link>
                <span className="text-primary font-semibold flex items-center gap-2 text-base py-2 select-none">
                  Explore Gifts <span className="text-lg">→</span>
                </span>
              </motion.div>
            </motion.div>

            {/* Badge strip — static, unchanged */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 pt-6 mt-6 border-t border-primary/30">
              <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-muted-foreground bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/10 shadow-sm whitespace-nowrap">
                <GiftIcon className="h-4 w-4 text-primary shrink-0" />
                <span>Personalized Just for You</span>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-muted-foreground bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/10 shadow-sm whitespace-nowrap">
                <StarIcon className="h-4 w-4 text-primary shrink-0" />
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-muted-foreground bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/10 shadow-sm whitespace-nowrap">
                <HeartIcon className="h-4 w-4 text-primary shrink-0" />
                <span>Made with Love</span>
              </div>
            </div>

            {/* Dots */}
            <div className="pt-1">
              <Dots total={slides.length} active={current} onChange={setCurrent} />
            </div>
          </div>

          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}