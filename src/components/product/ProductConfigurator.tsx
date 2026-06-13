"use client"

import { useState } from "react"
import { Heart, Star, Check, Ruler, Crown, Car, Gift } from "lucide-react"
import { Input } from "@/components/ui/input"

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

const THREADS = [
  { name: "Gold",   hex: "#FACC15" },
  { name: "White",  hex: "#FFFFFF" },
  { name: "Black",  hex: "#1F2937" },
  { name: "Silver", hex: "#D1D5DB" },
  { name: "Navy",   hex: "#1E3A8A" },
  { name: "Red",    hex: "#DC2626" },
  { name: "Pink",   hex: "#F472B6" },
]

const ICONS = [
  { id: "crown", label: "Crown", el: <Crown className="w-5 h-5 text-yellow-500" /> },
  { id: "heart", label: "Heart", el: <Heart className="w-5 h-5 text-red-500" />   },
  { id: "star",  label: "Star",  el: <Star  className="w-5 h-5 text-yellow-400" />},
  { id: "car",   label: "Car",   el: <Car   className="w-5 h-5 text-blue-500" />  },
  { id: "gift",  label: "Gift",  el: <Gift  className="w-5 h-5 text-pink-500" />  },
]

const LIGHT_COLORS = new Set(["#FFFFFF", "#D7CCC8", "#D1D5DB", "#F472B6", "#9E9E9E"])

export function ProductConfigurator() {
  const [activeColor,  setActiveColor]  = useState("Navy Blue")
  const [activeSize,   setActiveSize]   = useState("M")
  const [activeThread, setActiveThread] = useState("Gold")
  const [activeIcon,   setActiveIcon]   = useState("crown")
  const [personName,   setPersonName]   = useState("Dad")
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

      {/* ── Personalization ── */}
      <div className="mb-4">
        <h3 className="font-bold text-base mb-4">Personalization Options</h3>

        {/* Name */}
        <div className="mb-5">
          <label className="block text-xs text-muted-foreground mb-2">
            Enter Name / Title (Max 15 characters)
          </label>
          <div className="relative">
            <Input
              type="text"
              value={personName}
              maxLength={15}
              onChange={e => setPersonName(e.target.value)}
              className="h-12 bg-secondary/30 border-border focus-visible:ring-primary/20 text-base font-medium rounded-[5px] pr-12"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-muted-foreground font-medium">
              {personName.length}/15
            </span>
          </div>
        </div>

        {/* Thread Color */}
        <div className="mb-5">
          <div className="flex justify-between items-center mb-3">
            <label className="text-xs text-muted-foreground">Embroidery Thread Color</label>
            <span className="text-xs font-medium text-muted-foreground">{activeThread}</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {THREADS.map((thread) => {
              const isActive = thread.name === activeThread
              const isLight  = LIGHT_COLORS.has(thread.hex)
              return (
                <button
                  key={thread.name}
                  title={thread.name}
                  onClick={() => setActiveThread(thread.name)}
                  style={{ backgroundColor: thread.hex }}
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-all border ${
                    isActive
                      ? "ring-2 ring-primary ring-offset-2 scale-110 border-transparent shadow-sm"
                      : "border-border/50 hover:scale-105 hover:border-primary/30"
                  }`}
                >
                  {isActive && (
                    <Check
                      className={`w-4 h-4 ${isLight ? "text-gray-800" : "text-white"}`}
                      strokeWidth={3}
                    />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Icon Selector */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <label className="text-xs text-muted-foreground">Add Small Icon (Optional)</label>
            <span className="text-xs font-medium text-muted-foreground capitalize">{activeIcon}</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {ICONS.map((item) => (
              <button
                key={item.id}
                title={item.label}
                onClick={() => setActiveIcon(item.id)}
                className={`w-12 h-12 rounded-[5px] flex items-center justify-center border transition-all ${
                  item.id === activeIcon
                    ? "border-primary bg-primary/10 shadow-sm scale-105"
                    : "border-border bg-secondary/30 hover:border-primary/40 hover:bg-secondary/60"
                }`}
              >
                {item.el}
              </button>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}
