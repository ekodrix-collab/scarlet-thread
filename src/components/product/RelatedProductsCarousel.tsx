import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Heart, Star, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const products = [
  {
    id: 101,
    name: "Best Dad Ever Hoodie",
    price: 149,
    rating: 4.9,
    reviews: 125,
    badge: "Bestseller",
    image: "/images/forhimpage/scarlet-dadhero.png",
  },
  {
    id: 102,
    name: "Dad Est. Hoodie",
    price: 149,
    rating: 4.8,
    reviews: 95,
    badge: null,
    image: "/images/forhimpage/scarlet-papahoodie.png",
  },
  {
    id: 103,
    name: "Dad Life Cap",
    price: 79,
    rating: 4.9,
    reviews: 74,
    badge: "New",
    image: "/images/forhimpage/scarlet-Cap.png",
  },
  {
    id: 104,
    name: "Personalized Wallet",
    price: 99,
    rating: 4.9,
    reviews: 62,
    badge: null,
    image: "/images/forhimpage/scarlet-pouch.png",
  },
  {
    id: 105,
    name: "Super Dad Mug",
    price: 59,
    rating: 4.7,
    reviews: 81,
    badge: "Sale",
    image: "/images/forhimpage/scarlet-mug.png",
  },
  {
    id: 106,
    name: "The Man The Myth The Legend T-Shirt",
    price: 99,
    rating: 4.8,
    reviews: 112,
    badge: null,
    image: "/images/forhimpage/scarlet-hoodie.png",
  },
]

export function RelatedProductsCarousel() {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold flex items-center justify-center gap-2">
            You May Also Like{" "}
            <Heart className="w-5 h-5 text-primary fill-transparent" />
          </h2>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <button className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -ml-6 w-10 h-10 bg-white rounded-full shadow-md items-center justify-center z-10 hover:bg-[#FDF8FF] transition-colors border border-border">
            <ChevronLeft className="w-5 h-5 text-muted-foreground" />
          </button>

          <button className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 -mr-6 w-10 h-10 bg-white rounded-full shadow-md items-center justify-center z-10 hover:bg-[#FDF8FF] transition-colors border border-border">
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>

          <div className="flex overflow-x-auto gap-6 pb-8 pt-4 px-2 snap-x hide-scrollbar">
            {products.map((product) => (
              <Card
                key={product.id}
                className="min-w-[260px] max-w-[280px] shrink-0 snap-start overflow-hidden border-border/50 shadow-sm hover:shadow-md transition-all group flex flex-col h-full rounded-2xl"
              >
                <div className="relative aspect-square bg-[#FAFAFA] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {product.badge && (
                    <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded border border-border shadow-sm text-[10px] font-bold uppercase tracking-wider text-primary z-10">
                      {product.badge}
                    </div>
                  )}

                  <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur flex items-center justify-center text-primary shadow-sm hover:bg-primary hover:text-white transition-colors border border-primary/10 z-10">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>

                <CardContent className="p-4 pt-5 flex-1 flex flex-col">
                  <h3 className="font-bold text-base mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>

                  <div className="font-bold text-sm mb-3 text-primary">
                    AED {product.price}
                  </div>

                  <div className="flex items-center gap-1 text-[11px] text-muted-foreground mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, index) => (
                        <Star key={index} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                    <span>{product.rating}</span>
                    <span className="ml-1">({product.reviews})</span>
                  </div>

                  <Link
                    href={`/product/${product.id}`}
                    className={cn(
                      buttonVariants({ variant: "outline", size: "default" }),
                      "w-full mt-auto rounded-lg text-primary border-primary hover:bg-primary/5 font-medium h-10"
                    )}
                  >
                    Add to Cart
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
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