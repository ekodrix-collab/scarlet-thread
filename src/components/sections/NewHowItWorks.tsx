"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const headingVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

const stepVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
}

const arrowVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
}

export function NewHowItWorks() {
  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        {/* ── Lavender outer rounded container ── */}
        <div className="bg-[#EEE8FA] rounded-[28px] px-5 sm:px-8 md:px-12 py-10 md:py-12">
          {/* Heading */}
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1530] uppercase text-center tracking-wide mb-8 md:mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={headingVariants}
          >
            Creating Your Perfect Custom Gift
          </motion.h2>

          {/* ── Steps row ── */}
          <motion.div
            className="flex flex-col md:flex-row items-stretch gap-4 md:gap-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <StepCard
              number="1"
              title="Choose Your Product"
              desc="Find your favorite base product and complete secure payment to lock in your order."
              image="/images/heropage/scarlet-heartbag.png"
            />

            {/* Arrow */}
            <motion.div className="hidden md:flex items-center flex-shrink-0 text-[#9B6BD3]" variants={arrowVariants}>
              <ArrowRightIcon />
            </motion.div>
            <motion.div className="flex md:hidden justify-center text-[#9B6BD3]" variants={arrowVariants}>
              <ArrowDownIcon />
            </motion.div>

            <StepCard
              number="2"
              title="WhatsApp Us Details"
              desc="Check your email confirmation for your order details and share your design idea with us on WhatsApp."
              image="/images/heropage/scarlet-phone.png"
            />

            {/* Arrow */}
            <motion.div className="hidden md:flex items-center flex-shrink-0 text-[#9B6BD3]" variants={arrowVariants}>
              <ArrowRightIcon />
            </motion.div>
            <motion.div className="flex md:hidden justify-center text-[#9B6BD3]" variants={arrowVariants}>
              <ArrowDownIcon />
            </motion.div>

            <StepCard
              number="3"
              title="Mockup & Approval"
              desc="We create a realistic digital mockup for your review. Give us your final thumbs up before we craft!"
              image="/images/heropage/scarlet-laptop.png"
            />

            {/* Arrow */}
            <motion.div className="hidden md:flex items-center flex-shrink-0 text-[#9B6BD3]" variants={arrowVariants}>
              <ArrowRightIcon />
            </motion.div>
            <motion.div className="flex md:hidden justify-center text-[#9B6BD3]" variants={arrowVariants}>
              <ArrowDownIcon />
            </motion.div>

            <StepCard
              number="4"
              title="We Craft & Ship"
              desc="Once approved, our team creates your unique gift with care and ships it straight to your doorstep."
              image="/images/heropage/scarlet-delivery.png"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function StepCard({
  number,
  title,
  desc,
  image,
}: {
  number: string
  title: string
  desc: string
  image?: string
}) {
  return (
    <motion.div
      className="relative flex-1 bg-white rounded-[18px] px-4 pt-7 pb-4 md:px-5 md:pt-8 md:pb-5
                 shadow-[0_4px_20px_rgba(107,70,193,0.08)] border border-[#EDE6F8]
                 flex flex-col overflow-visible"
      variants={stepVariants}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      {/* Number badge — overlaps top-left edge, overflow-visible keeps it visible */}
      <div className="absolute -top-4 left-3 w-9 h-9 rounded-full bg-[#6F35C4] text-white flex items-center justify-center text-sm font-bold shadow-md z-10 select-none">
        {number}
      </div>

      {/* Row: text left + SVG placeholder right */}
      <div className="flex items-end justify-between gap-2 flex-1">
        {/* Text */}
        <div className="flex-1 min-w-0 self-start">
          <h3 className="text-[13px] md:text-sm font-bold text-[#1A1530] mb-1.5 leading-snug">
            {title}
          </h3>
          <p className="text-[11px] text-[#8B8194] leading-relaxed">
            {desc}
          </p>
        </div>

        {/* SVG placeholder — drop your SVG illustration here */}
        <div className="flex-shrink-0 self-end w-[100px] h-[150px] md:w-[115px] md:h-[115px] relative">
          {image && (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          )}
        </div>
      </div>
    </motion.div>
  )
}

function PersonalizeBox() {
  return (
    <div className="w-[150px] sm:w-[180px] flex-shrink-0 bg-white rounded-2xl border border-[#EFE6F7] shadow-[0_6px_25px_rgba(107,70,193,0.08)] p-3 sm:p-4">
      <label className="text-[11px] text-[#8B8194] block mb-1">
        Enter Name
      </label>

      <div className="h-9 rounded-md border border-[#E7DFF0] text-xs flex items-center px-3 text-[#2B2238] font-medium mb-3">
        Ayesha
      </div>

      <p className="text-[11px] text-[#8B8194] mb-1">Choose Font</p>

      <div className="flex gap-1.5 mb-3">
        {["Abc", "Abc", "Abc"].map((font, index) => (
          <span
            key={index}
            className="text-xs border border-[#E7DFF0] rounded px-2 py-1 text-[#2B2238]"
          >
            {font}
          </span>
        ))}
      </div>

      <p className="text-[11px] text-[#8B8194] mb-2">Thread Color</p>

      <div className="flex gap-2">
        {["#6F35C4", "#26A69A", "#4F8DF7", "#F6A623", "#E94B5A", "#111827"].map(
          (color) => (
            <span
              key={color}
              className="w-4 h-4 rounded-full border border-white shadow"
              style={{ backgroundColor: color }}
            />
          )
        )}
      </div>
    </div>
  )
}

function ArrowRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 16"
      fill="none"
      className="w-8 h-4"
    >
      <line
        x1="2"
        y1="8"
        x2="32"
        y2="8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeDasharray="4 4"
        opacity="0.5"
      />
      <path
        d="M28 4 L34 8 L28 12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
    </svg>
  )
}

function ArrowDownIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 38 70"
      fill="none"
      className="w-10 h-16"
    >
      <path
        d="M19 4 C 6 20, 32 30, 18 52 C 14 60, 16 62, 19 66"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="5 6"
        opacity="0.45"
      />
      <path
        d="M12 59 L19 67 L26 59"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.55"
      />
    </svg>
  )
}