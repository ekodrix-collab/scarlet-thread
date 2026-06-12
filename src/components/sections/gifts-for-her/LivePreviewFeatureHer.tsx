"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { Gift, Type, Truck } from "lucide-react"
import { springScaleUp } from "@/lib/animations"

export function LivePreviewFeatureHer() {
  return (
    <section className="py-4">
      <motion.div 
        variants={springScaleUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="container px-4 sm:px-6 md:px-12 lg:px-24"
      >
        <div className="bg-gradient-to-r from-[#fff7fb] via-[#fdf0f8] to-[#fff7fb] rounded-2xl flex flex-col lg:flex-row items-stretch overflow-hidden shadow-sm border border-[#ead6ec]/60">

          {/* Left: Product Showcase */}
          <div className="relative w-full lg:w-[40%] min-h-[180px] lg:min-h-[340px] ">
            <Image
              src="/images/forherproduct/scarlet-personilize.png"
              alt="Personalized gift preview"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#fff7fb]/80 pointer-events-none" />
          </div>

          {/* Right: 3 Steps */}
          <div className="flex-1 flex flex-col justify-center py-4 px-5 md:px-8 lg:py-5 ">
            <h2 className="text-base md:text-lg font-heading font-bold text-[#3d2b3a] flex items-center gap-2 mb-5 justify-center lg:justify-center">
              Personalize in 3 Simple Steps
              <span className="text-lg">♡</span>
            </h2>

            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4 md:gap-0 relative">

              {/* Step 1 */}
              <div className="flex flex-col items-center text-center flex-1 relative z-10 px-2">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#9b4bb3] shadow-sm border border-[#ead6ec]/70 mb-2">
                  <Gift strokeWidth={1.5} className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-xs text-[#8f3ca8] mb-1">1. Choose Your Gift</h4>
                <p className="text-[11px] text-[#6f5f70] leading-relaxed">Pick your favorite product<br />from our collection</p>
              </div>

              {/* Arrow 1 */}
              <div className="hidden md:flex items-center justify-center self-center mt-[-34px] px-1 pointer-events-none">
                <svg width="50" height="16" viewBox="0 0 50 16" fill="none" className="text-[#b56bc8]">
                  <line x1="0" y1="8" x2="40" y2="8" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" />
                  <path d="M38 4 L46 8 L38 12" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center flex-1 relative z-10 px-2">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#9b4bb3] shadow-sm border border-[#ead6ec]/70 mb-2">
                  <Type strokeWidth={1.5} className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-xs text-[#8f3ca8] mb-1">2. Personalize It</h4>
                <p className="text-[11px] text-[#6f5f70] leading-relaxed">Add name, text or initials<br />choose a design</p>
              </div>

              {/* Arrow 2 */}
              <div className="hidden md:flex items-center justify-center self-center mt-[-34px] px-1 pointer-events-none">
                <svg width="50" height="16" viewBox="0 0 50 16" fill="none" className="text-[#b56bc8]">
                  <line x1="0" y1="8" x2="40" y2="8" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" />
                  <path d="M38 4 L46 8 L38 12" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center flex-1 relative z-10 px-2">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#9b4bb3] shadow-sm border border-[#ead6ec]/70 mb-2">
                  <Truck strokeWidth={1.5} className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-xs text-[#8f3ca8] mb-1">3. We Craft & Deliver</h4>
                <p className="text-[11px] text-[#6f5f70] leading-relaxed">Handmade with love &<br /><strong>delivered to her doorstep</strong></p>
              </div>

            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}