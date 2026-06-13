"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";
import { occasionMeta } from "@/lib/occasion-products";

interface OccasionHeroProps {
  slug: string;
}

export function OccasionHero({ slug }: OccasionHeroProps) {
  const meta = occasionMeta[slug] ?? {
    label: "Occasion Gifts",
    description: "Beautifully personalised gifts for every moment.",
    icon: "/images/gift-occasion/birthday-gift.png",
    color: "from-violet-50 to-pink-50",
  };

  return (
    <section className={`w-full bg-gradient-to-br ${meta.color} border-b border-gray-100`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-8 md:py-12">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-1.5 text-xs text-gray-500 mb-6"
          aria-label="Breadcrumb"
        >
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-primary transition-colors"
          >
            <Home className="w-3 h-3" />
            Home
          </Link>
          <ChevronRight className="w-3 h-3 opacity-50" />
          <span className="text-gray-400">Occasions</span>
          <ChevronRight className="w-3 h-3 opacity-50" />
          <span className="text-primary font-medium">{meta.label}</span>
        </motion.nav>

        {/* Hero Content */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 md:gap-10">
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative w-24 h-24 md:w-32 md:h-32 shrink-0 bg-white rounded-3xl shadow-md flex items-center justify-center"
          >
            <Image
              src={meta.icon}
              alt={meta.label}
              fill
              className="object-contain p-3"
              sizes="128px"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center sm:text-left"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
              Shop by Occasion
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 leading-tight">
              {meta.label}
            </h1>
            <p className="text-gray-500 text-sm md:text-base max-w-xl leading-relaxed">
              {meta.description}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mt-4 justify-center sm:justify-start">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-white/80 border border-gray-200 text-gray-600 rounded-full px-3 py-1.5">
                ✦ Free personalisation
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-white/80 border border-gray-200 text-gray-600 rounded-full px-3 py-1.5">
                ✦ Delivered in 3–5 days
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-white/80 border border-gray-200 text-gray-600 rounded-full px-3 py-1.5">
                ✦ Gift wrapping available
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
