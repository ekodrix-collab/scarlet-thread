"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Sparkles, Star, Heart } from "lucide-react"

export function HeroHer() {
  return (
    <section className="relative overflow-hidden bg-[#fce8ec]">
      {/* ── Full-bleed background image ── */}
      <Image
        src="/images/forher/scarlet-forherbanner-image.png"
        alt="Personalized gifts for her — premium embroidered set"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Gradient overlay so left text stays readable */} 
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, #fce8ec 0%, #fce8eccc 38%, #fce8ec88 58%, transparent 80%)",
        }}
      />

      {/* ── Content row ── */}
      <div className="relative flex min-h-[240px] flex-col md:flex-row md:min-h-[280px] lg:min-h-[300px]">

        {/* ── Left Content ── */}
        <div className="relative z-10 flex flex-[1.3] flex-col justify-center px-8 py-23 md:pl-14 md:pr-6 lg:pl-20 md:max-w-[60%]">
          {/* Badge */}
          <div className="mb-3 flex items-center gap-1.5">
            <Heart className="h-3 w-3 fill-[#c0004e] text-[#c0004e]" />
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#c0004e]">
              Gifts For Her
            </span>
          </div>

          {/* Headline */}
          <h1 className="mb-3 font-sans text-[1.75rem] font-extrabold leading-[1.18] text-[#111] md:text-[2.2rem] lg:text-[2.6rem]">
            Made for Her,{" "}
            <span className="text-[#c0004e]">Personalized</span>
            <br />
            with Love
          </h1>

          {/* Sub-text */}
          <p className="mb-6 max-w-[360px] text-[0.78rem] leading-relaxed text-[#666] md:text-[0.82rem]">
            Thoughtful, personalized &amp; embroidered gifts that celebrate the
            most special women in your life.
          </p>

          {/* CTA Buttons */}
          <div className="mb-6 flex flex-wrap items-center gap-2.5">
            <Link
              href="/gifts-for-her"
              className="inline-flex h-9 items-center rounded-full bg-[#c0004e] px-5 text-[0.78rem] font-bold text-white shadow transition-all duration-200 hover:bg-[#a0003f] hover:-translate-y-px active:translate-y-0"
            >
              Shop Best Sellers
            </Link>
            <Link
              href="/gifts-for-her"
              className="inline-flex h-9 items-center rounded-full border border-[#c0004e]/60 bg-white/60 px-5 text-[0.78rem] font-semibold text-[#c0004e] backdrop-blur-sm transition-all duration-200 hover:bg-white hover:-translate-y-px active:translate-y-0"
            >
              Explore Collection
              <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <TrustBadge icon={<Sparkles className="h-3 w-3" />} label="Personalized &amp; Unique" />
            <TrustBadge icon={<Star className="h-3 w-3" />} label="Premium Quality" />
            <TrustBadge icon={<Heart className="h-3 w-3" />} label="Embroidered Items" />
          </div>
        </div>


      </div>
    </section>
  )
}

/* ── Helper ── */
function TrustBadge({
  icon,
  label,
}: {
  icon: React.ReactNode
  label: string
}) {
  return (
    <div className="flex items-center gap-1.5 rounded-full bg-white/55 px-3 py-1 text-[0.7rem] font-medium text-[#444] shadow-sm backdrop-blur-sm">
      <span className="text-[#c0004e]">{icon}</span>
      <span dangerouslySetInnerHTML={{ __html: label }} />
    </div>
  )
}
