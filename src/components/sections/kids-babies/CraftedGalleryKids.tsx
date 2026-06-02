import { Heart, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CraftedGalleryKids() {
  const mockImages = [
    { text: "Myra", bg: "bg-[#FFF0F5]" },
    { text: "Aarav", bg: "bg-blue-100" },
    { text: "Teddy", bg: "bg-[#FDF8EB]" },
    { text: "Little Princess", bg: "bg-pink-100" },
    { text: "Princess", bg: "bg-blue-200" },
    { text: "Siya", bg: "bg-orange-50" }
  ]

  return (
    <section className="py-16 bg-[#FAFAFA] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-heading font-bold flex items-center justify-center gap-2">
            Loved By Parents, Made For Their Little Ones <Heart className="w-5 h-5 text-primary fill-transparent" />
          </h2>
        </div>

        <div className="flex overflow-x-auto gap-4 pb-8 hide-scrollbar justify-start md:justify-center">
          {mockImages.map((img, index) => (
            <div key={index} className="relative w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 shrink-0 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className={`w-full h-full ${img.bg} flex items-center justify-center p-4 text-center border border-black/5`}>
                <span className={`text-xl md:text-2xl font-heading font-medium italic text-foreground/70`}>
                  {img.text}
                </span>
              </div>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                <Heart className="text-[#FF69B4] w-8 h-8 fill-transparent" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="sm" className="rounded-full bg-primary text-white hover:bg-primary/90">
            View More Creations <ArrowRight className="w-3 h-3 ml-2" />
          </Button>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  )
}
