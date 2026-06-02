import { Heart, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CraftedGalleryHer() {
  const mockImages = [
    { text: "Girl Boss", bg: "bg-[#FFF5F5]" },
    { text: "Be You", bg: "bg-[#FDF8EB]" },
    { text: "Happy Soul", bg: "bg-primary/20" },
    { text: "Stay Positive", bg: "bg-[#FFF0F5]" },
    { text: "R", bg: "bg-[#F5F3FF]" },
    { text: "Make Yourself Proud", bg: "bg-gray-900", textColor: "text-white" }
  ]

  return (
    <section className="py-16 bg-[#FAFAFA] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-heading font-bold flex items-center justify-center gap-2">
            Loved By Her, Crafted By Us <Heart className="w-5 h-5 text-primary fill-transparent" />
          </h2>
        </div>

        <div className="flex overflow-x-auto gap-4 pb-8 hide-scrollbar justify-start md:justify-center">
          {mockImages.map((img, index) => (
            <div key={index} className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 shrink-0 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className={`w-full h-full ${img.bg} flex items-center justify-center p-4 text-center`}>
                <span className={`text-xl md:text-2xl font-heading font-medium italic ${img.textColor || 'text-foreground'}`}>
                  {img.text}
                </span>
              </div>
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Heart className="text-white w-8 h-8 fill-transparent" />
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
