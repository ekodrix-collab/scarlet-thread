import { RefreshCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MasonryGrid() {
  // Mock data representing the 16 images in the gallery
  const galleryItems = [
    { text: "Aditya", desc: "Navy Hoodie", height: "h-[320px]", bg: "bg-[#1A237E]", textCol: "text-white" },
    { text: "Ananya", desc: "Pink Pouch", height: "h-[260px]", bg: "bg-[#FCE4EC]", textCol: "text-[#880E4F]" },
    { text: "Good things take time", desc: "Tote Bag", height: "h-[380px]", bg: "bg-[#F5F5DC]", textCol: "text-[#5D4037]" },
    { text: "Little Princess", desc: "Onesie", height: "h-[280px]", bg: "bg-[#FFF0F5]", textCol: "text-[#FF69B4]" },
    
    { text: "Mr. Perfect", desc: "White Towel", height: "h-[340px]", bg: "bg-white", textCol: "text-black" },
    { text: "Eid Mubarak", desc: "Green Cushion", height: "h-[280px]", bg: "bg-[#1B5E20]", textCol: "text-yellow-400" },
    { text: "Be You", desc: "Purple Hoodie", height: "h-[280px]", bg: "bg-[#E1BEE7]", textCol: "text-[#4A148C]" },
    { text: "Rohan", desc: "Black Pouch", height: "h-[240px]", bg: "bg-[#212121]", textCol: "text-white" },
    
    { text: "Diya", desc: "Cream Towel", height: "h-[280px]", bg: "bg-[#FFF8E1]", textCol: "text-[#D84315]" },
    { text: "Papa Box", desc: "Black Hamper", height: "h-[340px]", bg: "bg-[#263238]", textCol: "text-white" },
    { text: "My World My Love", desc: "Teddy Bear", height: "h-[300px]", bg: "bg-[#EFEBE9]", textCol: "text-[#4E342E]" },
    { text: "Myra", desc: "Purple Towel", height: "h-[320px]", bg: "bg-[#CE93D8]", textCol: "text-white" },
    
    { text: "Sunshine", desc: "Peach Hoodie", height: "h-[280px]", bg: "bg-[#FFCCBC]", textCol: "text-[#BF360C]" },
    { text: "A ♥", desc: "White Pouch", height: "h-[240px]", bg: "bg-white", textCol: "text-black" },
    { text: "King", desc: "Black Cap", height: "h-[260px]", bg: "bg-[#212121]", textCol: "text-white" },
    { text: "Best Brother Ever", desc: "Mug Hamper", height: "h-[300px]", bg: "bg-[#3E2723]", textCol: "text-white" },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* CSS Grid Masonry approach (Staggered columns) */}
        <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4">
          {galleryItems.map((item, idx) => (
            <div 
              key={idx} 
              className={`w-full ${item.height} ${item.bg} rounded-2xl break-inside-avoid relative overflow-hidden group cursor-pointer border border-black/5 shadow-sm hover:shadow-md transition-shadow`}
            >
              {/* Texture Overlay */}
              <div className="absolute inset-0 bg-[url('/placeholder-texture.png')] opacity-20 mix-blend-overlay"></div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                <span className={`font-heading font-medium italic text-3xl mb-2 drop-shadow-sm transition-transform group-hover:scale-110 duration-500 ${item.textCol}`}>
                  {item.text}
                </span>
                {/* Reveal description on hover */}
                <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 absolute bottom-6 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm">
                  <span className="text-xs font-bold text-foreground uppercase tracking-widest">{item.desc}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="outline" size="lg" className="rounded-full px-8 font-bold border-primary/20 text-primary hover:bg-primary/5 hover:border-primary">
             Load More Creations <RefreshCcw className="w-4 h-4 ml-2" />
          </Button>
        </div>

      </div>
    </section>
  )
}
