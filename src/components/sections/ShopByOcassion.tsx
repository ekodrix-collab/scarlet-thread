"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const occasions = [
  {
    label: "Birthday\nGifts",
    image: "/images/gift-occasion/birthday-gift.png",
    alt: "Birthday gifts",
    href: "/products/birthday",
  },
  {
    label: "Anniversary\nGifts",
    image: "/images/gift-occasion/anniversary-gift.png",
    alt: "Anniversary gifts",
    href: "/products/anniversary",
  },
  {
    label: "New Baby\nGifts",
    image: "/images/gift-occasion/baby-gift.png",
    alt: "New baby gifts",
    href: "/products/new-baby",
  },
  {
    label: "Eid\nGifts",
    image: "/images/gift-occasion/eid-gift.png",
    alt: "Eid gifts",
    href: "/products/eid",
  },
  {
    label: "Wedding\nGifts",
    image: "/images/gift-occasion/wedding-gift.png",
    alt: "Wedding gifts",
    href: "/products/wedding",
  },
  {
    label: "Ramadan\nGifts",
    image: "/images/gift-occasion/ramdan-gift.png",
    alt: "Ramadan gifts",
    href: "/products/ramadan",
  },
  {
    label: "Corporate\nGifts",
    image: "/images/gift-occasion/corporate-gift.png",
    alt: "Corporate gifts",
    href: "/products/corporate",
  },
  {
    label: "Gifts Under\nAED 200",
    image: "/images/gift-occasion/gift-under-aed-200.png",
    alt: "Gifts under AED 200",
    href: "/products/under-200",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }, // premium cubic-bezier easeOut
  },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ShopByOccasion() {
  return (
    <section className="w-full py-10 md:py-20 bg-white border-b border-gray-50 overflow-hidden">
      {/* Header Layout with Viewport Animation */}
      <motion.div
        className="relative max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 mb-8 md:mb-12 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={headingVariants}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 tracking-tight">
          Shop by <span className="text-violet-500">Occasion</span>
        </h2>
        <p className="text-gray-400 text-sm mt-2 max-w-xl mx-auto">
          Celebrate every milestone with handpicked, beautifully personalised gifts crafted to tell your unique story.
        </p>

        {/* Mobile View All */}
        <Link
          href="/special-occasions"
          className="text-xs text-violet-500 hover:text-violet-700 font-bold transition-colors whitespace-nowrap flex items-center justify-center gap-1 mt-3 sm:hidden group"
        >
          View All Occasions 
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>

        {/* Desktop View All absolute at the top right */}
        <Link
          href="/special-occasions"
          className="absolute right-4 sm:right-6 md:right-12 lg:right-16 top-0 text-sm text-violet-500 hover:text-violet-700 font-bold transition-colors whitespace-nowrap hidden sm:flex items-center gap-1 group"
        >
          View All Occasions 
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </motion.div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        {/* Mobile: horizontal scroll with Viewport Animation */}
        <motion.div
          className="flex gap-4 overflow-x-auto pb-4 sm:hidden scrollbar-hide -mx-4 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={containerVariants}
        >
          {occasions.map((occasion) => (
            <motion.div key={occasion.href} variants={cardVariants} className="shrink-0">
              <OccasionCard occasion={occasion} />
            </motion.div>
          ))}
        </motion.div>

        {/* Tablet+: grid layout with Viewport Animation */}
        <motion.div
          className="hidden sm:grid grid-cols-4 lg:grid-cols-8 gap-4 md:gap-5 justify-items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
        >
          {occasions.map((occasion) => (
            <motion.div key={occasion.href} variants={cardVariants} className="w-full max-w-[160px]">
              <OccasionCard occasion={occasion} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

type Occasion = {
  label: string;
  image: string;
  alt: string;
  href: string;
};

function OccasionCard({ occasion }: { occasion: Occasion }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="w-full h-full"
    >
      <Link
        href={occasion.href}
        className="flex flex-col items-center gap-3.5 p-4 sm:p-5 rounded-2xl border border-gray-100 bg-white hover:shadow-lg hover:border-violet-200 transition-all duration-300 group w-full h-full min-w-[110px]"
      >
        {/* Image container */}
        <div className="relative w-18 h-18 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden bg-gray-50/50 group-hover:bg-violet-50/60 transition-all duration-300 flex items-center justify-center p-2">
          <motion.div
            className="relative w-full h-full"
            whileHover={{ 
              rotate: [0, -6, 6, -3, 3, 0], 
              scale: 1.1 
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Image
              src={occasion.image}
              alt={occasion.alt}
              fill
              sizes="(max-width: 640px) 72px, (max-width: 768px) 80px, 96px"
              className="object-contain p-2"
            />
          </motion.div>
        </div>

        {/* Label */}
        <span className="text-center text-xs sm:text-sm leading-tight text-gray-700 font-semibold group-hover:text-violet-600 transition-colors whitespace-pre-line">
          {occasion.label}
        </span>
      </Link>
    </motion.div>
  );
}