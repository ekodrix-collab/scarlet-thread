"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const occasions = [
  {
    label: "Birthday\nGifts",
    image: "/images/gift-occasion/birthday-gift.png",
    alt: "Birthday gifts",
    href: "/occasions/birthday",
  },
  {
    label: "Anniversary\nGifts",
    image: "/images/gift-occasion/anniversary-gift.png",
    alt: "Anniversary gifts",
    href: "/occasions/anniversary",
  },
  {
    label: "New Baby\nGifts",
    image: "/images/gift-occasion/baby-gift.png",
    alt: "New baby gifts",
    href: "/occasions/new-baby",
  },
  {
    label: "Eid\nGifts",
    image: "/images/gift-occasion/eid-gift.png",
    alt: "Eid gifts",
    href: "/occasions/eid",
  },
  {
    label: "Wedding\nGifts",
    image: "/images/gift-occasion/wedding-gift.png",
    alt: "Wedding gifts",
    href: "/occasions/wedding",
  },
  {
    label: "Ramadan\nGifts",
    image: "/images/gift-occasion/ramdan-gift.png",
    alt: "Ramadan gifts",
    href: "/occasions/ramadan",
  },
  {
    label: "Corporate\nGifts",
    image: "/images/gift-occasion/corporate-gift.png",
    alt: "Corporate gifts",
    href: "/occasions/corporate",
  },
  {
    label: "Gifts Under\nAED 200",
    image: "/images/gift-occasion/gift-under-aed-200.png",
    alt: "Gifts under AED 200",
    href: "/occasions/under-200",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: -16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function ShopByOccasion() {
  return (
    <section className="w-full py-5 md:py-24 bg-white">
      {/* Header */}
      <motion.div
        className="relative max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 mb-5 flex items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={headingVariants}
      >
        <h2 className="text-lg md:text-[28px] font-bold text-gray-800 text-center">
          Shop by <span className="text-violet-500">Occasion</span>
        </h2>
        <Link
          href="/occasions"
          className="absolute right-4 sm:right-6 md:right-12 lg:right-16 text-sm text-violet-500 hover:text-violet-700 font-medium transition-colors whitespace-nowrap"
        >
          View All
        </Link>
      </motion.div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        {/* Mobile: horizontal scroll */}
        <motion.div
          className="flex gap-3 overflow-x-auto pb-2 sm:hidden scrollbar-hide"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {occasions.map((occasion) => (
            <motion.div key={occasion.href} variants={cardVariants}>
              <OccasionCard occasion={occasion} />
            </motion.div>
          ))}
        </motion.div>

        {/* Tablet+: centered wrapping flex */}
        <motion.div
          className="hidden sm:flex sm:flex-wrap justify-center gap-3"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {occasions.map((occasion) => (
            <motion.div key={occasion.href} variants={cardVariants}>
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
    <Link
      href={occasion.href}
      className="flex-shrink-0 flex flex-col items-center gap-2 p-3 rounded-2xl border border-gray-100 bg-white hover:shadow-md hover:border-violet-100 transition-all duration-200 group w-[86px] sm:w-[100px] md:w-[110px]"
    >
      {/* Image container */}
      <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-gray-50 group-hover:bg-violet-50 transition-colors duration-200">
        <Image
          src={occasion.image}
          alt={occasion.alt}
          fill
          sizes="56px"
          className="object-contain p-1"
        />
      </div>

      {/* Label */}
      <span className="text-center text-[12px] leading-tight text-gray-600 font-medium whitespace-pre-line">
        {occasion.label}
      </span>
    </Link>
  );
}