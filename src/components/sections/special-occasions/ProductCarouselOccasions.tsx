import { Card, CardContent } from "@/components/ui/card"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Heart, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

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

export function ProductCarouselOccasions() {
  return (
    <section className="py-3 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-2">
            Popular Occasion Gifts
            <Heart className="w-5 h-5 text-pink-400" />
          </h2>

          <p className="text-sm text-muted-foreground mt-1">
            Curated gifts that make every celebration extra special
          </p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 px-15">
            {products.map((product) => (
              <Card
                key={product.id}
                className=""
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-2xl">
                  <div className="relative aspect-square w-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center">
                    <Heart className="w-4 h-4 text-pink-400" />
                  </button>
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

                  <Link
                    href={`/product/${product.id}`}
                    className={cn(
                      buttonVariants({ variant: "default" }),
                      "w-full h-8 rounded-md text-xs font-medium bg-primary hover:bg-primary/90"
                    )}
                  >
                    Personalize Now
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}