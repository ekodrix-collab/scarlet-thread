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
    <section className="py-10 md:py-20 bg-#F9F5FF">
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#262033] mb-2">
            How Personalization Works
          </h2>
          <p className="text-[#7E7488] text-sm md:text-base mb-10">
            Create a meaningful gift in 3 simple steps
          </p>
        </motion.div>

        <motion.div
          className="relative flex flex-col md:flex-row justify-between items-center gap-4 md:gap-2 bg-[#FCFAFF] rounded-[32px] px-5 sm:px-8 md:px-14 py-8 md:py-12 shadow-[0_10px_45px_rgba(107,70,193,0.08)] border border-[#F1EAF8]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <StepCard
            number="1"
            title="Choose Your Product"
            desc="Pick a product from our collection"
            image="/images/personalise/scarlet-bride.png"
          />

          {/* Desktop: right arrow | Mobile: down arrow */}
          <motion.div className="hidden md:block text-[#9B6BD3]" variants={arrowVariants}>
            <ArrowRightIcon />
          </motion.div>
          <motion.div className="block md:hidden text-[#9B6BD3]" variants={arrowVariants}>
            <ArrowDownIcon />
          </motion.div>

          <StepCard
            number="2"
            title="Personalize It"
            desc="Add name, choose font, color & message"
            customContent
          />

          {/* Desktop: right arrow | Mobile: down arrow */}
          <motion.div className="hidden md:block text-[#9B6BD3]" variants={arrowVariants}>
            <ArrowRightIcon />
          </motion.div>
          <motion.div className="block md:hidden text-[#9B6BD3]" variants={arrowVariants}>
            <ArrowDownIcon />
          </motion.div>

          <StepCard
            number="3"
            title="We Make & Deliver"
            desc="We craft with love & deliver to your doorstep"
            image="/images/personalise/scarlet-giftbox.png"
          />
        </motion.div>
      </div>
    </section>
  )
}

function StepCard({
  number,
  title,
  desc,
  image,
  customContent,
}: {
  number: string
  title: string
  desc: string
  image?: string
  customContent?: boolean
}) {
  return (
    <motion.div
      className="relative w-full md:w-[31%] min-h-[130px] md:min-h-[220px] bg-white rounded-[24px] px-5 sm:px-6 py-6 md:py-7 text-left shadow-[0_8px_35px_rgba(45,27,78,0.06)] border border-[#F3EDF8]"
      variants={stepVariants}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <div className="absolute -top-4 -left-4 w-11 h-11 rounded-full bg-[#6F35C4] text-white flex items-center justify-center text-lg font-bold shadow-lg">
        {number}
      </div>

      <div className="flex items-center justify-between gap-4 h-full">
        <div className="flex-1 min-w-0">
          <h3 className="text-base md:text-lg font-bold text-[#2B2238] mb-2">
            {title}
          </h3>
          <p className="text-sm text-[#8B8194] leading-relaxed">{desc}</p>
        </div>

        {customContent ? (
          <PersonalizeBox />
        ) : (
          <div className="w-[110px] sm:w-[130px] h-[110px] sm:h-[130px] flex items-center justify-center flex-shrink-0">
            {image && (
              <Image
                src={image}
                alt={title}
                width={190}
                height={170}
                className="object-contain drop-shadow-xl scale-170"
              />
            )}
          </div>
        )}
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
      viewBox="0 0 90 38"
      fill="none"
      className="w-24 h-12"
    >
      <path
        d="M4 20 C 22 6, 36 34, 55 19 C 65 11, 75 14, 84 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="5 6"
        opacity="0.45"
      />
      <path
        d="M77 12 L85 19 L77 26"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.55"
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