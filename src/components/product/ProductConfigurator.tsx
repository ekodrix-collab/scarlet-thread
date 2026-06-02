import { Heart, Star, Check, Sparkles, Truck, RefreshCcw, Ruler, Crown, Car, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ProductConfigurator() {
  const colors = [
    { name: "Navy Blue", hex: "bg-[#1A237E]", active: true },
    { name: "Black", hex: "bg-[#212121]", active: false },
    { name: "Grey", hex: "bg-[#9E9E9E]", active: false },
    { name: "White", hex: "bg-[#FFFFFF]", active: false },
    { name: "Maroon", hex: "bg-[#880E4F]", active: false },
    { name: "Beige", hex: "bg-[#D7CCC8]", active: false },
    { name: "Olive", hex: "bg-[#33691E]", active: false },
  ]

  const sizes = ["S", "M", "L", "XL", "XXL", "3XL"]
  const activeSize = "M"

  const threads = [
    { hex: "bg-yellow-400", active: true },
    { hex: "bg-white", active: false },
    { hex: "bg-gray-800", active: false },
    { hex: "bg-gray-300", active: false },
    { hex: "bg-blue-900", active: false },
    { hex: "bg-red-600", active: false },
    { hex: "bg-pink-400", active: false },
  ]

  const icons = [
    { id: "crown", icon: <Crown className="w-5 h-5 text-yellow-500" />, active: true },
    { id: "heart", icon: <Heart className="w-5 h-5 text-red-500" />, active: false },
    { id: "star", icon: <Star className="w-5 h-5 text-yellow-400" />, active: false },
    { id: "car", icon: <Car className="w-5 h-5 text-blue-500" />, active: false },
    { id: "bow", icon: <Gift className="w-5 h-5 text-pink-500" />, active: false },
  ]

  return (
    <div className="flex flex-col h-full pt-4">
      
      {/* Header */}
      <div className="flex justify-between items-start mb-2">
        <h1 className="text-3xl font-heading font-bold text-foreground">King Dad Hoodie</h1>
        <button className="text-primary hover:scale-110 transition-transform">
          <Heart className="w-6 h-6" />
        </button>
      </div>

      {/* Ratings */}
      <div className="flex items-center gap-3 text-sm mb-4">
        <div className="flex text-yellow-400">
          <Star className="w-4 h-4 fill-current" />
          <Star className="w-4 h-4 fill-current" />
          <Star className="w-4 h-4 fill-current" />
          <Star className="w-4 h-4 fill-current" />
          <Star className="w-4 h-4 fill-current" />
        </div>
        <span className="font-medium">4.9</span>
        <span className="text-muted-foreground">(256 reviews)</span>
        <span className="text-muted-foreground">|</span>
        <span className="text-primary font-medium text-xs bg-primary/5 px-2 py-0.5 rounded-full">1000+ Happy Customers</span>
      </div>

      <p className="text-foreground/80 text-sm mb-6">
        A premium embroidered hoodie for the king of your heart. Personalize it with name or title to make it truly special.
      </p>

      {/* Price */}
      <div className="flex items-end gap-3 mb-8">
        <span className="text-3xl font-bold text-primary">AED 149</span>
        <span className="text-lg text-muted-foreground line-through mb-1">AED 199</span>
        <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-1 rounded-md mb-1">25% OFF</span>
      </div>

      {/* Trust Badges */}
      <div className="flex flex-wrap gap-4 mb-8 text-xs font-medium text-foreground/80">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#FF69B4]" /> Premium Embroidery
        </div>
        <div className="flex items-center gap-2">
          <Heart className="w-4 h-4 text-[#FF69B4]" /> Made with Love
        </div>
        <div className="flex items-center gap-2">
          <Truck className="w-4 h-4 text-[#FF69B4]" /> 7-10 Days Delivery
        </div>
        <div className="flex items-center gap-2">
          <RefreshCcw className="w-4 h-4 text-[#FF69B4]" /> Easy Returns
        </div>
      </div>

      <div className="w-full h-px bg-border/60 mb-8"></div>

      {/* Color Selection */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <span className="font-bold text-sm">Select Hoodie Color</span>
          <span className="text-xs text-muted-foreground font-medium">Navy Blue</span>
        </div>
        <div className="flex flex-wrap gap-3">
          {colors.map((color, idx) => (
            <button 
              key={idx}
              className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                color.active ? 'border-primary scale-110 shadow-sm' : 'border-border/50 hover:scale-105'
              } ${color.hex}`}
              title={color.name}
            >
              {color.active && <Check className={`w-5 h-5 ${color.name === 'White' || color.name === 'Beige' ? 'text-black' : 'text-white'}`} strokeWidth={3} />}
            </button>
          ))}
        </div>
      </div>

      {/* Size Selection */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <span className="font-bold text-sm">Select Size</span>
          <button className="text-xs text-primary font-medium flex items-center gap-1 hover:underline">
            <Ruler className="w-3 h-3" /> Size Guide
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button 
              key={size}
              className={`min-w-[48px] h-10 px-3 rounded-lg border font-medium text-sm transition-colors ${
                size === activeSize 
                  ? 'border-primary bg-[#FDF8FF] text-primary' 
                  : 'border-border text-foreground hover:border-primary/30'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full h-px bg-border/60 mb-8"></div>

      {/* Personalization Options */}
      <div className="mb-8">
        <h3 className="font-bold text-lg mb-4">Personalization Options</h3>
        
        {/* Text Input */}
        <div className="mb-6">
          <label className="block text-xs text-muted-foreground mb-2">Enter Name / Title (Max 15 characters)</label>
          <div className="relative">
            <Input 
              type="text" 
              value="Dad" 
              className="h-12 bg-[#FAFAFA] border-border focus-visible:ring-primary/20 text-base font-medium"
              readOnly
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-muted-foreground font-medium">3/15</span>
          </div>
        </div>

        {/* Thread Color */}
        <div className="mb-6">
          <label className="block text-xs text-muted-foreground mb-3">Choose Embroidery Thread Color</label>
          <div className="flex flex-wrap gap-3">
            {threads.map((thread, idx) => (
              <button 
                key={idx}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all shadow-sm ${
                  thread.active ? 'ring-2 ring-primary ring-offset-2 scale-110' : 'hover:scale-105 border border-border'
                } ${thread.hex}`}
              >
                {thread.active && <Check className={`w-4 h-4 ${thread.hex === 'bg-white' ? 'text-black' : 'text-white'}`} strokeWidth={3} />}
              </button>
            ))}
          </div>
        </div>

        {/* Add Small Icon */}
        <div className="mb-6">
          <label className="block text-xs text-muted-foreground mb-3">Add Small Icon (Optional)</label>
          <div className="flex flex-wrap gap-3">
            {icons.map((item) => (
              <button 
                key={item.id}
                className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all ${
                  item.active ? 'border-primary bg-[#FDF8FF] shadow-sm scale-105' : 'border-border bg-[#FAFAFA] hover:border-primary/30'
                }`}
              >
                {item.icon}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-auto space-y-3">
        <Button className="w-full h-12 text-base font-bold bg-[#4A154B] hover:bg-[#3E113E] text-white">
          Preview My Design <span className="ml-2">→</span>
        </Button>
        <div className="flex gap-3">
          <Button variant="outline" className="flex-1 h-12 text-base font-bold text-primary border-primary hover:bg-primary/5">
            Add to Cart
          </Button>
          <Button className="flex-1 h-12 text-base font-bold bg-primary hover:bg-primary/90">
            Buy Now
          </Button>
        </div>
      </div>

    </div>
  )
}
