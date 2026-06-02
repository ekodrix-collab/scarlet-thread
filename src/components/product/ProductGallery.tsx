import { Star } from "lucide-react"
import { ChevronDown } from "lucide-react"

export function ProductGallery() {
  return (
    <div className="flex gap-4 h-full">
      {/* Thumbnails */}
      <div className="w-20 hidden md:flex flex-col gap-4">
        {[1, 2, 3, 4, 5].map((item, idx) => (
          <div 
            key={idx} 
            className={`w-20 h-24 rounded-lg overflow-hidden border-2 cursor-pointer transition-colors ${idx === 0 ? 'border-primary' : 'border-transparent hover:border-primary/30'}`}
          >
            <div className="w-full h-full bg-[#1A237E] flex items-center justify-center p-2 relative">
               <span className="text-[10px] text-white/50 text-center font-heading italic">Thumb {idx + 1}</span>
            </div>
          </div>
        ))}
        <div className="w-20 flex justify-center text-primary/50 py-2 cursor-pointer hover:text-primary">
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>

      {/* Main Image */}
      <div className="flex-1 relative aspect-[4/5] bg-[#FAFAFA] rounded-3xl overflow-hidden border border-black/5 flex items-center justify-center shadow-sm">
        <div className="absolute inset-0 bg-[#E8E1D3] flex items-center justify-center overflow-hidden">
            <div className="w-full h-full bg-[url('/placeholder-texture.png')] opacity-10 mix-blend-overlay"></div>
            {/* Visual representation of the hoodie from the design */}
            <div className="w-3/4 h-3/4 bg-[#1A237E] rounded-[30%_30%_10%_10%] relative flex items-center justify-center shadow-2xl">
               <div className="text-center">
                  <div className="text-yellow-400 text-3xl mb-2">👑</div>
                  <div className="text-white font-heading italic text-5xl font-bold mb-1">King</div>
                  <div className="text-white font-heading text-4xl font-bold tracking-widest uppercase">
                    DAD <span className="text-red-500">❤</span>
                  </div>
               </div>
            </div>
        </div>

        {/* Bestseller Badge */}
        <div className="absolute top-4 right-4 w-16 h-16 bg-white rounded-full flex flex-col items-center justify-center shadow-md border border-primary/10 text-primary">
          <Star className="w-5 h-5 fill-current mb-0.5" />
          <span className="text-[9px] font-bold uppercase tracking-wider">Bestseller</span>
        </div>
        
        {/* Pagination Dots for Mobile */}
        <div className="md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
           <div className="w-2 h-2 rounded-full bg-primary"></div>
           <div className="w-2 h-2 rounded-full bg-primary/30"></div>
           <div className="w-2 h-2 rounded-full bg-primary/30"></div>
        </div>
      </div>
    </div>
  )
}
