"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, ChevronUp, ChevronDown, Sparkles, Truck, RefreshCcw, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const thumbImages = [
  "/images/forhimpage/scarlet-kinghoodie.png",
  "/images/forhimpage/scarlet-hoodie.png",
  "/images/forhimpage/scarlet-papahoodie.png",
  "/images/forhimpage/scarlet-amazinghoodie.png",
  "/images/forhimpage/scarlet-hubbyhoodie.png",
]

export function ProductGallery() {
  const [activeIdx, setActiveIdx] = useState(0)

  return (
    <div className="flex flex-col gap-5">

      {/* ── Image Row ── */}
      <div className="flex gap-4">
        {/* Thumbnails */}
        <div className="w-[72px] hidden md:flex flex-col gap-3">
          <button className="flex justify-center text-primary/40 hover:text-primary transition-colors py-1">
            <ChevronUp className="w-5 h-5" />
          </button>

          {thumbImages.map((src, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`w-[72px] h-20 rounded-xl overflow-hidden border-2 cursor-pointer transition-all flex-shrink-0 bg-[#F5F0EA] ${
                idx === activeIdx
                  ? "border-primary shadow-md scale-[1.04]"
                  : "border-transparent hover:border-primary/30"
              }`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={src}
                  alt={`Product view ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </button>
          ))}

          <button className="flex justify-center text-primary/40 hover:text-primary transition-colors py-1">
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>

        {/* Main Image */}
        <div className="flex-1 relative h-[500px] rounded-3xl overflow-hidden border border-black/5 shadow-sm bg-[#F5F0EA]">
          <Image
            src={thumbImages[activeIdx]}
            alt="King Dad Hoodie"
            fill
            className="object-cover object-center transition-all duration-300"
            priority
          />

          {/* Bestseller Badge */}
          <div className="absolute top-4 right-4 w-16 h-16 bg-white rounded-full flex flex-col items-center justify-center shadow-md border border-primary/10 text-primary">
            <Star className="w-5 h-5 fill-current mb-0.5" />
            <span className="text-[9px] font-bold uppercase tracking-wider text-center leading-tight">Best<br />seller</span>
          </div>

          {/* Mobile dots */}
          <div className="md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
            {thumbImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === activeIdx ? "bg-primary w-4" : "bg-primary/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Description (moved from Configurator) ── */}
      <p className="text-foreground/80 text-sm">
        A premium embroidered hoodie for the king of your heart. Personalize it with name or title to make it truly special.
      </p>

      {/* ── Trust Badges (moved from Configurator) ── */}
      <div className="flex flex-wrap gap-4 text-xs font-medium text-foreground/80">
        <div className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-primary" /> Premium Embroidery</div>
        <div className="flex items-center gap-1.5"><Heart    className="w-4 h-4 text-primary" /> Made with Love</div>
        <div className="flex items-center gap-1.5"><Truck    className="w-4 h-4 text-primary" /> 7-10 Days Delivery</div>
        <div className="flex items-center gap-1.5"><RefreshCcw className="w-4 h-4 text-primary" /> Easy Returns</div>
      </div>

      {/* ── Action Buttons (moved from Configurator) ── */}
      <div className="space-y-3">
        <Button className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-[5px] shadow-md transition-all">
          Preview My Design <span className="ml-2">→</span>
        </Button>
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="flex-1 h-12 text-base font-semibold text-primary border-primary hover:bg-primary/5 rounded-[5px] transition-all"
          >
            Add to Cart
          </Button>
          <Button className="flex-1 h-12 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-[5px] shadow-md transition-all">
            Buy Now
          </Button>
        </div>
      </div>

    </div>
  )
}
