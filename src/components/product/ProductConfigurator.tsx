"use client"

import { useState } from "react"
import { Heart, Star, Check, Ruler, Sparkles, Truck, RefreshCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

const COLORS = [
  { name: "Navy Blue", hex: "#1A237E" },
  { name: "Black",     hex: "#212121" },
  { name: "Grey",      hex: "#9E9E9E" },
  { name: "White",     hex: "#FFFFFF" },
  { name: "Maroon",    hex: "#880E4F" },
  { name: "Beige",     hex: "#D7CCC8" },
  { name: "Olive",     hex: "#33691E" },
]

const SIZES = ["S", "M", "L", "XL", "XXL", "3XL"]



const LIGHT_COLORS = new Set(["#FFFFFF", "#D7CCC8", "#D1D5DB", "#F472B6", "#9E9E9E"])

export function ProductConfigurator() {
  const [activeColor,  setActiveColor]  = useState("Navy Blue")
  const [activeSize,   setActiveSize]   = useState("M")

  const [wishlisted,   setWishlisted]   = useState(false)

  return (
    <div className="flex flex-col pt-4">

      {/* ── Header ── */}
      <div className="flex justify-between items-start mb-2">
        <h1 className="text-3xl font-heading font-bold text-foreground">King Dad Hoodie</h1>
        <button
          onClick={() => setWishlisted(w => !w)}
          className="text-primary hover:scale-110 transition-transform"
        >
          <Heart className={`w-6 h-6 transition-all ${wishlisted ? "fill-primary" : ""}`} />
        </button>
      </div>

      {/* ── Ratings ── */}
      <div className="flex flex-wrap items-center gap-3 text-sm mb-4">
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
        </div>
        <span className="font-medium">4.9</span>
        <span className="text-muted-foreground">(256 reviews)</span>
        <span className="text-muted-foreground">|</span>
        <span className="text-primary font-medium text-xs bg-primary/5 px-2 py-0.5 rounded-full">
          1000+ Happy Customers
        </span>
      </div>

      {/* ── Price ── */}
      <div className="flex items-end gap-3 mb-6">
        <span className="text-3xl font-bold text-primary">AED 149</span>
        <span className="text-lg text-muted-foreground line-through mb-1">AED 199</span>
        <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-1 rounded-md mb-1">25% OFF</span>
      </div>

      {/* ── Description ── */}
      <p className="text-foreground/80 text-sm mb-6">
        A premium embroidered hoodie for the king of your heart. Custom crafted to order.
      </p>

      {/* ── Trust Badges ── */}
      {/* <div className="flex flex-wrap gap-4 text-xs font-medium text-foreground/80 mb-6">
        <div className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-primary" /> Premium Embroidery</div>
        <div className="flex items-center gap-1.5"><Heart    className="w-4 h-4 text-primary" /> Made with Love</div>
        <div className="flex items-center gap-1.5"><Truck    className="w-4 h-4 text-primary" /> 7-10 Days Delivery</div>
        <div className="flex items-center gap-1.5"><RefreshCcw className="w-4 h-4 text-primary" /> Easy Returns</div>
      </div> */}

      <div className="w-full h-px bg-border/60 mb-6" />



      {/* ── Color Selection ── */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <span className="font-bold text-sm">Select Hoodie Color</span>
          <span className="text-xs text-muted-foreground font-medium">{activeColor}</span>
        </div>
        <div className="flex flex-wrap gap-3">
          {COLORS.map((color) => {
            const isActive = color.name === activeColor
            const isLight  = LIGHT_COLORS.has(color.hex)
            return (
              <button
                key={color.name}
                title={color.name}
                onClick={() => setActiveColor(color.name)}
                style={{ backgroundColor: color.hex }}
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                  isActive
                    ? "border-primary scale-110 shadow-sm"
                    : "border-border/50 hover:scale-105 hover:border-primary/40"
                }`}
              >
                {isActive && (
                  <Check
                    className={`w-5 h-5 ${isLight ? "text-gray-800" : "text-white"}`}
                    strokeWidth={3}
                  />
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* ── Size Selection ── */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <span className="font-bold text-sm">Select Size</span>
          <button className="text-xs text-primary font-medium flex items-center gap-1 hover:underline">
            <Ruler className="w-3 h-3" /> Size Guide
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {SIZES.map((size) => (
            <button
              key={size}
              onClick={() => setActiveSize(size)}
              className={`min-w-[48px] h-10 px-3 rounded-[5px] border font-semibold text-sm transition-all ${
                size === activeSize
                  ? "border-primary bg-primary text-primary-foreground shadow-sm"
                  : "border-border text-foreground hover:border-primary/60 hover:bg-secondary/50"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full h-px bg-border/60 mb-6" />

      {/* ── Action Buttons ── */}
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
  )
}
