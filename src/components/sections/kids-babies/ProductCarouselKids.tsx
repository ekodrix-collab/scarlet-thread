import { Card, CardContent } from "@/components/ui/card"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Heart, Star, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const products = [
  {
    id: 21,
    name: "Hooded Towel",
    price: 899,
    rating: 4.9,
    reviews: 128,
    imagePlaceholder: "Myra Towel"
  },
  {
    id: 22,
    name: "Embroidered Onesie",
    price: 699,
    rating: 4.8,
    reviews: 95,
    imagePlaceholder: "Little Prince"
  },
  {
    id: 23,
    name: "Personalized Teddy",
    price: 999,
    rating: 4.9,
    reviews: 112,
    imagePlaceholder: "Teddy Bear"
  },
  {
    id: 24,
    name: "Kids Backpack",
    price: 1299,
    rating: 4.8,
    reviews: 74,
    imagePlaceholder: "Ananya Backpack"
  },
  {
    id: 25,
    name: "Baby Blanket",
    price: 1099,
    rating: 4.9,
    reviews: 86,
    imagePlaceholder: "Vihaan Blanket"
  }
]

export function ProductCarouselKids() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold flex items-center justify-center gap-2">
            Most Loved Kids & Baby Gifts <Heart className="w-5 h-5 text-primary fill-transparent" />
          </h2>
          <p className="text-muted-foreground mt-2">Handpicked favorites for your little stars</p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -ml-6 w-10 h-10 bg-white rounded-full shadow-md items-center justify-center z-10 hover:bg-[#FFF0F5] transition-colors border border-border">
            <ChevronLeft className="w-5 h-5 text-muted-foreground" />
          </button>
          
          <button className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 -mr-6 w-10 h-10 bg-white rounded-full shadow-md items-center justify-center z-10 hover:bg-[#FFF0F5] transition-colors border border-border">
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>

          <div className="flex overflow-x-auto gap-6 pb-8 pt-4 px-2 snap-x hide-scrollbar">
            {products.map((product) => (
              <Card key={product.id} className="min-w-[260px] max-w-[280px] shrink-0 snap-start overflow-hidden border-border/50 shadow-sm hover:shadow-md transition-all group flex flex-col h-full rounded-2xl">
                <div className="relative aspect-square bg-[#FAFAFA] p-0">
                  <div className="w-full h-full bg-[#FAFAFA] flex items-center justify-center overflow-hidden relative">
                    <span className="font-heading italic text-xl text-primary font-medium">{product.imagePlaceholder}</span>
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
                  
                  <div className="font-bold text-lg mb-4 text-[#FF69B4]">₹{product.price}</div>
                  
                  <Link
                    href={`/product/${product.id}`}
                    className={cn(
                      buttonVariants({ variant: "default", size: "default" }),
                      "w-full mt-auto rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium h-10"
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
