"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import { motion, Variants } from "framer-motion";

export function HeroOccasions() {
  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

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
  };

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">

        {/* Background Image */}
        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
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

        {/* Optional Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/20 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-xl px-6 md:px-12 lg:px-20"
          >

            {/* Tagline */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-2 text-primary mb-2"
            >
              <span className="italic text-lg md:text-xl">
                Celebrate Every Moment
              </span>

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
                <Heart className="w-5 h-5 fill-current" />
              </motion.div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              <span className="text-black text-nowrap">
                Special Occasions,
              </span>
              <br />
              <span className="text-black text-nowrap">
                Special
              </span>{" "}
              <motion.span
                className="text-primary inline-block"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                Memories
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="mt-4 text-gray-700 text-base md:text-lg max-w-md"
            >
              Thoughtful, personalized gifts for every festival,
              celebration and special moment. Because every occasion
              deserves something truly unique.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
              >
                <Button className="rounded-full px-8 h-12 bg-primary hover:bg-primary/90">
                  Shop All Occasions
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  >
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.div>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
              >
                <Button
                  variant="outline"
                  className="rounded-full px-8 h-12 border-primary/20 bg-white/80 backdrop-blur-sm"
                >
                  Explore Collection
                </Button>
              </motion.div>
            </motion.div>

          </motion.div>
        </div>

        {/* Floating Decorative Blur */}
        <motion.div
          className="absolute top-20 right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />

        <motion.div
          className="absolute bottom-10 right-40 w-24 h-24 bg-primary/10 rounded-full blur-2xl"
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
        />

      </div>
    </section>
  );
}