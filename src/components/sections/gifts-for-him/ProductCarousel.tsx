"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Star, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "Embroidered Hoodie",
    price: 1499,
    rating: 4.9,
    reviews: 102,
    imagePlaceholder: "Hoodie",
    bestSeller: true,
    image: "/images/forhimpage/scarlet-hoodie.png",
  },
  {
    id: 2,
    name: "Embroidered Towel",
    price: 899,
    rating: 4.8,
    reviews: 86,
    imagePlaceholder: "Towel",
    bestSeller: true,
    image: "/images/forhimpage/scarlet-towel.png",
  },
  {
    id: 3,
    name: "Travel Pouch",
    price: 699,
    rating: 4.9,
    reviews: 44,
    imagePlaceholder: "Pouch",
    bestSeller: true,
    image: "/images/forhimpage/scarlet-pouch.png",
  },
  {
    id: 4,
    name: "Personalized Mug",
    price: 449,
    rating: 4.8,
    reviews: 38,
    imagePlaceholder: "Mug",
    bestSeller: true,
    image: "/images/forhimpage/scarlet-mug.png",
  },
  {
    id: 5,
    name: "Embroidered Cap",
    price: 499,
    rating: 4.7,
    reviews: 30,
    imagePlaceholder: "Cap",
    bestSeller: true,
    image: "/images/forhimpage/scarlet-cap.png",
  },
]

export function ProductCarousel() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <motion.div initial={{ opacity: 0, y: 40, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8, ease: "circOut" }} className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold flex items-center justify-center gap-2">
            Most Loved Gifts For Him{" "}
            <Heart className="w-5 h-5 text-primary fill-transparent" />
          </h2>
          <p className="text-muted-foreground mt-2">
            Handpicked gifts that he will truly appreciate
          </p>
        </div>

        <div className="relative">
          {/* Navigation Arrows (Simulated) */}
          <button className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -ml-6 w-10 h-10 bg-white rounded-full shadow-md items-center justify-center z-10 hover:bg-secondary transition-colors border border-border">
            <ChevronLeft className="w-5 h-5 text-muted-foreground" />
          </button>

          <button className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 -mr-6 w-10 h-10 bg-white rounded-full shadow-md items-center justify-center z-10 hover:bg-secondary transition-colors border border-border">
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>

          <div className="flex overflow-x-auto gap-6 pb-8 pt-4 px-2 snap-x hide-scrollbar">
            {products.map((product) => (
              <Card
                key={product.id}
                className="min-w-[260px] max-w-[280px] shrink-0 snap-start overflow-hidden border-border/50 shadow-sm hover:shadow-md transition-all group flex flex-col h-full rounded-2xl"
              >
                <div className="relative aspect-square bg-secondary/30 p-4">
                  {product.bestSeller && (
                    <div className="absolute top-4 left-4 z-10 bg-white px-2 py-1 rounded text-[10px] font-bold tracking-wider uppercase shadow-sm">
                      Best Seller
                    </div>
                  )}

                  <div className="w-full h-full bg-white rounded-xl shadow-sm flex items-center justify-center border border-border/30 overflow-hidden relative">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="280px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <span className="font-heading italic text-2xl text-primary font-medium">
                        {product.imagePlaceholder}
                      </span>
                    )}
                  </div>
                </div>

                <CardContent className="p-4 pt-5 flex-1 flex flex-col">
                  <h3 className="font-bold text-base mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                    <div className="flex text-yellow-400">
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                    </div>
                    <span>{product.rating}</span>
                    <span className="ml-1">({product.reviews})</span>
                  </div>

                  <div className="font-bold text-lg mb-4 text-primary">
                    ₹{product.price}
                  </div>

                  <Link href={`/product/${product.id}`} className="mt-auto">
                    <Button className="w-full rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium h-10">
                      Personalize Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </motion.div>

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