import { Heart, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function CraftedGallery() {
  const mockImages: { image?: string; text?: string; bg?: string }[] = [
    { image:"/images/forhimpage/scarlet-papahoodie.png"},
    { image:"/images/forhimpage/scarlet-mrperfect.png"},
    { image:"/images/forhimpage/scarlet-papapouch.png"},
    { image:"/images/forhimpage/scarlet-amazinghoodie.png"},
    { image:"/images/forhimpage/scarlet-kinghoodie.png"},
     
  ]

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-heading font-bold flex items-center justify-center gap-2">
            Crafted With Love - Just For Him <Heart className="w-5 h-5 text-primary fill-transparent" />
          </h2>
        </div>

        <div className="flex overflow-x-auto gap-4 pb-8 hide-scrollbar justify-start md:justify-center">
          {mockImages.map((img, index) => (
            <div key={index} className="relative w-40 h-40 md:w-56 md:h-56 shrink-0 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              {img.image ? (
                <Image
                  src={img.image}
                  alt={"Gallery image"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 160px, 224px"
                />
              ) : (
                <div className={`w-full h-full ${img.bg} flex items-center justify-center`}>
                  <span className="text-xl md:text-2xl text-white font-heading font-medium italic">{img.text}</span>
                </div>
              )}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
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
