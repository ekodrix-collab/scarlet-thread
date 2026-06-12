"use client"
import { motion } from "framer-motion"
import { Heart, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function CraftedGalleryHer() {
  const mockImages = [
    { image: "/images/occassion/scarlet-girlboss.png" },
    { image: "/images/occassion/scarlet-beyou.png" },
    { image: "/images/occassion/scarlet-happysoul.png" },
    { image: "/images/occassion/scarlet-staypositive.png" },
    { image: "/images/occassion/scarlet-box.png" },
    { image: "/images/occassion/scarlet-proud.png" },
  ]

  return (
    <section className="py-16 bg-[#FAFAFA] overflow-hidden">
      <motion.div initial={{ opacity: 0, scale: 1.05 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 1.2, ease: "circOut" }} className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-heading font-bold flex items-center justify-center gap-2">
            Loved By Her, Crafted By Us <Heart className="w-5 h-5 text-primary fill-transparent" />
          </h2>
        </div>

        <div className="flex overflow-x-auto gap-4 pb-8 hide-scrollbar justify-start md:justify-center">
          {mockImages.map((img, index) => (
            <div
              key={index}
              className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 shrink-0 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
            >
              <Image
                src={img.image}
                alt="Gallery image"
                fill
                sizes="(max-width: 768px) 160px, (max-width: 1024px) 192px, 224px"
                className="object-cover"
              />

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
      </motion.div>

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