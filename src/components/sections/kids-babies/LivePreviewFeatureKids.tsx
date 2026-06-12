"use client"

import { Gift, Type, Truck, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function LivePreviewFeatureKids() {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Single unified pink background — no split panels */}
        <div className="rounded-[20px] sm:rounded-[32px] overflow-hidden bg-[#FFF0F5] flex flex-col lg:flex-row items-stretch shadow-sm border border-pink-100 min-h-[200px] sm:min-h-[260px]">

          {/* Left: Image — no background, blends into parent pink */}
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:w-[44%] w-full flex-shrink-0 relative overflow-hidden h-[200px] sm:h-[240px] lg:h-auto"
          >
            <img
              src="/images/scarlet-secondbanner.png"
              alt="Personalized baby gifts"
              className="w-full h-full object-cover object-center"
            />
            {/* Right-side fade so image bleeds smoothly into content */}
            <div className="hidden lg:block absolute inset-y-0 right-0 w-20 bg-gradient-to-r from-transparent to-[#FFF0F5]" />
            <div className="lg:hidden absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#FFF0F5] to-transparent" />
          </motion.div>

          {/* Right: 3 Steps — same bg as parent, no border */}
          <div className="flex-1 flex flex-col justify-center px-5 sm:px-8 md:px-12 py-6 sm:py-10 text-center lg:text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground inline-flex items-center gap-2 mb-6 sm:mb-10 justify-center lg:justify-start w-full"
            >
              Personalize in 3 Simple Steps
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-1">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </motion.h2>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15
                  }
                }
              }}
              className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 relative"
            >

              {/* Step 1 */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, scale: 0.9, y: 15 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                }}
                className="flex flex-col items-center text-center flex-1 relative z-10"
              >
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-primary shadow-sm border border-primary/20 mb-4">
                  <Gift strokeWidth={1.5} className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-sm text-primary mb-2">1. Choose Your Gift</h4>
                <p className="text-xs text-muted-foreground">Pick your favorite product from our collection</p>
              </motion.div>

              {/* Arrow 1 */}
              <div className="hidden sm:flex absolute top-8 left-1/4 w-1/4 items-center justify-center -mt-3 pointer-events-none">
                <div className="w-full border-t border-dashed border-primary/30"></div>
                <ArrowRight className="text-primary/30 w-6 h-6 flex-shrink-0" />
              </div>

              {/* Step 2 */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, scale: 0.9, y: 15 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                }}
                className="flex flex-col items-center text-center flex-1 relative z-10"
              >
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-primary shadow-sm border border-primary/20 mb-4">
                  <Type strokeWidth={1.5} className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-sm text-primary mb-2">2. Personalize It</h4>
                <p className="text-xs text-muted-foreground">Add name, initials or choose a cute design</p>
              </motion.div>

              {/* Arrow 2 */}
              <div className="hidden sm:flex absolute top-8 right-1/4 w-1/4 items-center justify-center -mt-3 pointer-events-none">
                <div className="w-full border-t border-dashed border-primary/30"></div>
                <ArrowRight className="text-primary/30 w-6 h-6 flex-shrink-0" />
              </div>

              {/* Step 3 */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, scale: 0.9, y: 15 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                }}
                className="flex flex-col items-center text-center flex-1 relative z-10"
              >
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-primary shadow-sm border border-primary/20 mb-4">
                  <Truck strokeWidth={1.5} className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-sm text-primary mb-2">3. We Craft & Deliver</h4>
                <p className="text-xs text-muted-foreground">Handmade with love & delivered to your doorstep</p>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}