"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Heart, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion, Variants } from "framer-motion"

const products = [
  {
    id: 31,
    name: "Eid Cushion",
    price: 799,
    rating: 4.8,
    reviews: 86,
    image: "/images/products/eid-cushion.png",
  },
  {
    id: 32,
    name: "Onam Towel",
    price: 899,
    rating: 4.9,
    reviews: 74,
    image: "/images/products/onam-towel.png",
  },
  {
    id: 33,
    name: "Diwali Hamper Box",
    price: 1299,
    rating: 4.8,
    reviews: 65,
    image: "/images/products/diwali-hamper.png",
  },
  {
    id: 34,
    name: "Raksha Bandhan Rakhi",
    price: 699,
    rating: 4.9,
    reviews: 52,
    image: "/images/products/rakhi-box.png",
  },
  {
    id: 35,
    name: "Christmas Stocking",
    price: 849,
    rating: 4.8,
    reviews: 41,
    image: "/images/products/christmas-stocking.png",
  },
]

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export function ProductCarouselOccasions() {
  return (
    <section className="py-3 bg-white overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-2">
            Popular Occasion Gifts

            <motion.div
              animate={{
                y: [0, -4, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <Heart className="w-5 h-5 text-pink-400 fill-pink-400" />
            </motion.div>
          </h2>

          <p className="text-sm text-muted-foreground mt-1">
            Curated gifts that make every celebration extra special
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 px-2 md:px-10"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={item}
              whileHover={{
                y: -10,
              }}
            >
              <Card className="group border-0 shadow-none bg-transparent">

                {/* Image */}
                <div className="relative overflow-hidden rounded-2xl">

                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                    className="relative aspect-square w-full"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </motion.div>

                  {/* Floating Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl border border-primary/20"
                    animate={{
                      opacity: [0.2, 0.6, 0.2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />

                  {/* Wishlist */}
                  <motion.button
                    whileHover={{
                      scale: 1.15,
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center"
                  >
                    <Heart className="w-4 h-4 text-pink-400" />
                  </motion.button>

                </div>

                {/* Content */}
                <CardContent className="px-1 pt-3 pb-0">
                  <h3 className="font-semibold text-sm text-foreground mb-2 line-clamp-1">
                    {product.name}
                  </h3>

                  <div className="flex items-center justify-between mb-3">
                    <div className="text-primary font-bold text-xl">
                      ₹{product.price}
                    </div>

                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span>{product.rating}</span>
                      <span>({product.reviews})</span>
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Link
                      href={`/product/${product.id}`}
                      className={cn(
                        buttonVariants({ variant: "default" }),
                        "w-full h-8 rounded-md text-xs font-medium bg-primary hover:bg-primary/90"
                      )}
                    >
                      Personalize Now
                    </Link>
                  </motion.div>
                </CardContent>

              </Card>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}