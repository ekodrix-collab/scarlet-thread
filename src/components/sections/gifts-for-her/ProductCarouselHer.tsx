import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Star, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const products = [
  {
    id: 11,
    name: "Embroidered Hoodie",
    price: 1499,
    rating: 4.9,
    reviews: 124,
    imagePlaceholder: "Pink Hoodie",
    image: "/images/forherproduct/scarlet-pinkhoodie.png",
    bestSeller: false
  },
  {
    id: 12,
    name: "Makeup Pouch",
    price: 599,
    rating: 4.8,
    reviews: 98,
    imagePlaceholder: "Pouch",
    image: "/images/forherproduct/scarlet-pouch.png",
    bestSeller: false
  },
  {
    id: 13,
    name: "Personalized Jewelry Box",
    price: 899,
    rating: 4.9,
    reviews: 215,
    imagePlaceholder: "Jewelry Box",
    image: "/images/forherproduct/scarlet-bag.png",
    bestSeller: false
  },
  {
    id: 14,
    name: "Metal Tumbler",
    price: 699,
    rating: 4.8,
    reviews: 85,
    imagePlaceholder: "Tumbler",
    image: "/images/forherproduct/scarlet-trumbler.png",
    bestSeller: false
  },
  {
    id: 15,
    name: "Tote Bag",
    price: 699,
    rating: 4.7,
    reviews: 72,
    imagePlaceholder: "Tote Bag",
    image: "/images/forherproduct/scarlet-totebag.png",
    bestSeller: false
  }
]

export function ProductCarouselHer() {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold flex items-center justify-center gap-2">
            Most Loved Gifts For Her <Heart className="w-5 h-5 text-primary fill-transparent" />
          </h2>
          <p className="text-muted-foreground mt-2">Handpicked with love, just for her</p>
        </div>

        <div className="relative"> 
          {/* Navigation Arrows */}
          <button className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -ml-6 w-10 h-10 bg-white rounded-full shadow-md items-center justify-center z-10 hover:bg-[#FFF5F5] transition-colors border border-border">
            <ChevronLeft className="w-5 h-5 text-muted-foreground" />
          </button>

          <button className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 -mr-6 w-10 h-10 bg-white rounded-full shadow-md items-center justify-center z-10 hover:bg-[#FFF5F5] transition-colors border border-border">
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>

          <div className="flex overflow-x-auto gap-6 pb-8 pt-4 px-2 snap-x hide-scrollbar">
            {products.map((product) => (
              <Card key={product.id} className="min-w-[260px] max-w-[280px] shrink-0 snap-start overflow-hidden border-border/50 shadow-sm hover:shadow-md transition-all group flex flex-col h-full rounded-2xl">
                <div className="relative aspect-[4/3] bg-[#FFF5F5] overflow-hidden">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="font-heading italic text-2xl text-primary font-medium">
                        {product.imagePlaceholder}
                      </span>
                    </div>
                  )}
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

                  <div className="font-bold text-lg mb-4 text-primary">₹{product.price}</div>

                  <Button asChild className="w-full mt-auto rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium h-10">
                    <Link href={`/product/${product.id}`}>Personalize Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
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
