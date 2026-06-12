"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import {
  Heart,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function CraftedGallery() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const mockImages: { image?: string; text?: string; bg?: string }[] = [
    { image: "/images/forhimpage/scarlet-papahoodie.png" },
    { image: "/images/forhimpage/scarlet-mrperfect.png" },
    { image: "/images/forhimpage/scarlet-papapouch.png" },
    { image: "/images/forhimpage/scarlet-amazinghoodie.png" },
    { image: "/images/forhimpage/scarlet-kinghoodie.png" },
    { image: "/images/forhimpage/scarlet-mannat.png" },
    { image: "/images/forhimpage/scarlet-dadhero.png" },
  ]

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -300,
      behavior: "smooth",
    })
  }

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 300,
      behavior: "smooth",
    })
  }

  return (
    <section className="py-16 bg-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.2, ease: "circOut" }}
        className="container px-4 sm:px-6 md:px-12 lg:px-24"
      >
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-heading font-bold flex items-center justify-center gap-2">
            Crafted With Love - Just For Him
            <Heart className="w-5 h-5 text-primary fill-transparent" />
          </h2>
        </div>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="hidden md:flex absolute left-[-20px] top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-md items-center justify-center hover:shadow-lg transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="hidden md:flex absolute right-[-20px] top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-md items-center justify-center hover:shadow-lg transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-3 pb-6 hide-scrollbar scroll-smooth snap-x snap-mandatory"
          >
            {mockImages.map((img, index) => (
              <div
                key={index}
                className="relative w-[180px] md:w-[240px] shrink-0 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group bg-[#f8f4f1] snap-start"
              >
                <div className="relative aspect-[4/3]">
                  {img.image ? (
                    <Image
                      src={img.image}
                      alt="Gallery image"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 180px, 240px"
                    />
                  ) : (
                    <div
                      className={`w-full h-full ${img.bg} flex items-center justify-center`}
                    >
                      <span className="text-xl md:text-2xl text-white font-heading font-medium italic">
                        {img.text}
                      </span>
                    </div>
                  )}
                </div>

                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Heart className="text-white w-7 h-7 fill-transparent" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button
            size="sm"
            className="rounded-full bg-primary text-white hover:bg-primary/90"
          >
            View More Creations
            <ArrowRight className="w-3 h-3 ml-2" />
          </Button>
        </div>
      </motion.div>

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