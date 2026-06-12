"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Star, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { staggerContainer, fadeUp } from "@/lib/animations"

const products = [
  {
    id: 11,
    name: "Embroidered Hoodie",
    price: 1499,
    rating: 4.9,
    reviews: 124,
    imagePlaceholder: "Pink Hoodie",
    image: "/images/forherproduct/scarlet-pinkhoodie.png",
    bestSeller: false,
  },
  {
    id: 12,
    name: "Makeup Pouch",
    price: 599,
    rating: 4.8,
    reviews: 98,
    imagePlaceholder: "Pouch",
    image: "/images/forherproduct/scarlet-pouch.png",
    bestSeller: false,
  },
  {
    id: 13,
    name: "Personalized Jewelry Box",
    price: 899,
    rating: 4.9,
    reviews: 215,
    imagePlaceholder: "Jewelry Box",
    image: "/images/forherproduct/scarlet-bag.png",
    bestSeller: false,
  },
  {
    id: 14,
    name: "Metal Tumbler",
    price: 699,
    rating: 4.8,
    reviews: 85,
    imagePlaceholder: "Tumbler",
    image: "/images/forherproduct/scarlet-trumbler.png",
    bestSeller: false,
  },
  {
    id: 15,
    name: "Tote Bag",
    price: 699,
    rating: 4.7,
    reviews: 72,
    imagePlaceholder: "Tote Bag",
    image: "/images/forherproduct/scarlet-totebag.png",
    bestSeller: false,
  },
]

export function ProductCarouselHer() {

  return (
    <section className="py-4 md:py-8 bg-white">
      <div className="container px-4 sm:px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-heading font-bold flex items-center justify-center gap-2">
            Most Loved Gifts For Her{" "}
            <motion.div
              animate={{
                y: [0, -4, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="inline-block"
            >
              <Heart className="w-5 h-5 text-primary fill-transparent" />
            </motion.div>
          </h2>
          <p className="text-muted-foreground mt-2">
            Handpicked with love, just for her
          </p>
        </motion.div>

        <div className="relative">
          <button className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -ml-6 w-10 h-10 bg-white rounded-full shadow-md items-center justify-center z-10 hover:bg-[#FFF5F5] transition-colors border border-border">
            <ChevronLeft className="w-5 h-5 text-muted-foreground" />
          </button>

          <button className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 -mr-6 w-10 h-10 bg-white rounded-full shadow-md items-center justify-center z-10 hover:bg-[#FFF5F5] transition-colors border border-border">
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>

          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="flex overflow-x-auto gap-4 sm:gap-6 pb-8 pt-4 px-1 sm:px-2 snap-x hide-scrollbar justify-start md:justify-center"
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                variants={fadeUp(0.6, 40)}
                whileHover={{
                  y: -10,
                }}
                className="min-w-[200px] sm:min-w-[220px] md:min-w-[200px] lg:min-w-[220px] max-w-[280px] w-[calc((100%-96px)/5)] shrink-0 snap-start flex flex-col h-full group"
              >
                <Card className="w-full h-full overflow-hidden border-border/50 shadow-sm hover:shadow-md transition-all flex flex-col rounded-2xl">
                  <div className="relative aspect-square overflow-hidden bg-[#FFF5F5]">
                    {product.image ? (
                      <motion.div
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.4 }}
                        className="relative w-full h-full"
                      >
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 280px"
                        />
                      </motion.div>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="font-heading italic text-2xl text-primary font-medium">
                          {product.imagePlaceholder}
                        </span>
                      </div>
                    )}

                    {/* Floating Glow */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl border border-primary/20 pointer-events-none"
                      animate={{
                        opacity: [0.2, 0.6, 0.2],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    />

                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full border border-pink-100 shadow-sm z-10">
                      <span className="text-[10px] font-heading italic font-semibold text-primary">
                        {product.imagePlaceholder}
                      </span>
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

                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full mt-auto"
                    >
                      <Link href={`/product/${product.id}`} className="w-full">
                        <Button className="w-full rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium h-10 flex items-center justify-center text-sm">
                          Personalize Now
                        </Button>
                      </Link>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
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