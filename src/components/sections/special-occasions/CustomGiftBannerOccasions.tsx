"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { rotateXPerspective } from "@/lib/animations"

export function CustomGiftBannerOccasions() {
  return (
    <section className="py-12 bg-white overflow-hidden" style={{ perspective: 1000 }}>
      <div className="container mx-auto px-4 max-w-7xl">

        <motion.div 
          variants={rotateXPerspective}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="group relative overflow-hidden rounded-[2rem] min-h-[280px] md:min-h-[340px] shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(200,109,215,0.3)] transition-all duration-500 hover:-translate-y-2 border border-[#f0e6f7] hover:border-[#d7b8e6]"
        >

          {/* Background Image */}
          <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
            <Image
              src="/images/banners/custom-gift-banner.png"
              alt="Custom Gift Banner"
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1"
            />
          </div>

          {/* Light Overlay */}
          <div className="absolute inset-0 bg-[#F6EDFF]/10 transition-colors duration-500 group-hover:bg-[#F6EDFF]/0" />

          {/* Floating Cute Elements */}
          <div className="absolute top-12 right-[15%] text-[#c86dd7] animate-[bounce_3s_infinite] opacity-80 z-10 hidden md:block">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
            </svg>
          </div>
          <div className="absolute bottom-16 right-[25%] text-yellow-400 animate-[bounce_4s_infinite_0.5s] opacity-70 z-10 hidden md:block">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
            </svg>
          </div>
          <div className="absolute top-20 left-[45%] text-[#f0e6f7] animate-pulse opacity-90 z-10">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
            </svg>
          </div>

          {/* Content */}
          <div className="relative z-20 h-full flex items-center min-h-[280px] md:min-h-[340px]">
            <div className="max-w-[520px] px-8 md:px-16 py-10 transition-transform duration-500 group-hover:translate-x-2">

              <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#2C1844] leading-tight mb-8 md:mb-5 drop-shadow-sm">
                Can't Find The Perfect Gift For
                <br />
                Your Special Occasion?
              </h2>

              <p className="hidden md:block text-[#4A3266] text-base md:text-lg leading-relaxed mb-8 max-w-[450px]">
                We create custom gifts for any festival or celebration.
                <br />
                Share your idea and we'll bring it to life!
              </p>

              <Button
                size="lg"
                className="group/btn bg-[#c86dd7] hover:bg-[#b05dc0] text-white rounded-xl px-8 h-14 font-bold shadow-md hover:shadow-lg transition-all duration-300"
              >
                Create Custom Gift
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover/btn:translate-x-2" />
              </Button>

            </div>
          </div>

        </motion.div>

      </div>
    </section>
  )
}