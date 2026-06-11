import Image from "next/image"
import { Heart, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CraftedGalleryKids() {
  const mockImages = [
    { text: "Myra", image: "/images/scarlet-babie1.png" },
    { text: "Aarav", image: "/images/scarlet-gift.png" },
    { text: "Teddy", image: "/images/scarlet-babie3.png" },
    { text: "Little Princess", image: "/images/scarlet-loved4.png" },
    { text: "Princess", image: "/images/scarlet-loved5.png" },
    { text: "Siya", image: "/images/scarlet-loved6.png" },
  ]

  return (
    <section className="py-16 bg-[#FAFAFA] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-heading font-bold flex items-center justify-center gap-2">
            Loved By Parents, Made For Their Little Ones
            <Heart className="w-5 h-5 text-primary fill-transparent" />
          </h2>
        </div>

        <div className="flex overflow-x-auto gap-4 pb-8 hide-scrollbar justify-start md:justify-center">
          {mockImages.map((img, index) => (
            <div
              key={index}
              className="relative w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 shrink-0 rounded-2xl overflow-hidden shadow-sm hover:shadow-md group"
            >
              <div className="relative w-full h-full border border-black/5">
                <Image
                  src={img.image}
                  alt={img.text}
                  fill
                  className="object-cover"
                />

              </div>

              {/* <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px] z-20">
                <Heart className="text-[#FF69B4] w-8 h-8 fill-transparent" />
              </div> */}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="sm"
            className="rounded-full bg-primary text-white hover:bg-primary/90"
          >
            View More Creations
            <ArrowRight className="w-3 h-3 ml-2" />
          </Button>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .hide-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `,
        }}
      />
    </section>
  )
}