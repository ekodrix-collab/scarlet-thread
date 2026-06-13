"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Sparkles } from "lucide-react";
import { motion, Variants } from "framer-motion";

export function HeroOccasions() {
  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative w-full overflow-hidden bg-gray-50">
      <div className="relative w-full h-[380px] sm:h-[450px] md:h-[500px] lg:h-[600px] overflow-hidden">

        {/* Background Image */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/images/special_occasions2.png"
            alt="Special Occasions"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>

        {/* Sophisticated Overlay for better visibility */}
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-white/95 via-white/80 md:from-white/70 md:via-white/30 to-white/20 md:to-transparent backdrop-blur-[1px] md:backdrop-blur-none" />

        {/* Content */}
        <div className="absolute inset-0 flex items-end md:items-center pb-8 md:pb-0">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="w-full max-w-xl px-5 sm:px-8 md:px-12 lg:px-20"
          >

            {/* Tagline */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md mb-4 md:mb-6 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs md:text-sm font-semibold text-primary uppercase tracking-wider">
                Celebrate Every Moment
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="text-[2.5rem] leading-[1.05] sm:text-5xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-3 md:mb-4 drop-shadow-sm"
            >
              <span className="text-gray-900 block">
                Special Occasions,
              </span>
              <span className="text-gray-900 block mt-1 md:mt-2">
                Special <motion.span
                  className="text-primary inline-flex items-center relative"
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  Memories
                  <motion.div
                    className="absolute -right-5 -top-1"
                    animate={{ y: [0, -4, 0], rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Heart className="w-4 h-4 md:w-5 md:h-5 fill-primary text-primary" />
                  </motion.div>
                </motion.span>
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-gray-700 text-sm sm:text-base md:text-lg max-w-[280px] sm:max-w-md font-medium leading-relaxed mb-6 md:mb-8"
            >
              Thoughtful, personalized gifts for every festival and celebration. Make every moment truly unique.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto"
              >
                <Button className="w-full sm:w-auto rounded-full px-6 md:px-8 h-11 md:h-12 bg-primary hover:bg-primary/90 text-sm md:text-base shadow-lg shadow-primary/20 transition-all">
                  Shop All Occasions
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.div>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  className="w-full sm:w-auto rounded-full px-6 md:px-8 h-11 md:h-12 border-gray-300 hover:border-primary hover:text-primary hover:bg-primary/5 bg-white/90 backdrop-blur-md text-sm md:text-base transition-all shadow-sm"
                >
                  Explore Collection
                </Button>
              </motion.div>
            </motion.div>

          </motion.div>
        </div>

        {/* Floating Decorative Elements */}
        <motion.div
          className="hidden md:block absolute top-10 right-20 w-40 h-40 bg-primary/20 rounded-full blur-[80px]"
          animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute -bottom-10 -right-10 w-32 h-32 md:w-48 md:h-48 bg-primary/15 rounded-full blur-[60px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

      </div>
    </section>
  );
}