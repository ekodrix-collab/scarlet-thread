import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Star, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const products = [
  {
    id: 31,
    name: "Eid Cushion",
    price: 799,
    rating: 4.8,
    reviews: 86,
    imagePlaceholder: "Green Cushion"
  },
  {
    id: 32,
    name: "Onam Towel",
    price: 899,
    rating: 4.9,
    reviews: 74,
    imagePlaceholder: "White Towel"
  },
  {
    id: 33,
    name: "Diwali Hamper Box",
    price: 1299,
    rating: 4.8,
    reviews: 65,
    imagePlaceholder: "Purple Box"
  },
  {
    id: 34,
    name: "Raksha Bandhan Rakhi",
    price: 699,
    rating: 4.9,
    reviews: 52,
    imagePlaceholder: "Wood Rakhi Box"
  },
  {
    id: 35,
    name: "Christmas Stocking",
    price: 849,
    rating: 4.8,
    reviews: 41,
    imagePlaceholder: "Red Stocking"
  }
]

export function ProductCarouselOccasions() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold flex items-center justify-center gap-2">
            Popular Occasion Gifts <Heart className="w-5 h-5 text-primary fill-transparent" />
          </h2>
          <p className="text-muted-foreground mt-2">Curated gifts that make every celebration extra special</p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -ml-6 w-10 h-10 bg-white rounded-full shadow-md items-center justify-center z-10 hover:bg-[#FDF8FF] transition-colors border border-border">
            <ChevronLeft className="w-5 h-5 text-muted-foreground" />
          </button>
          
          <button className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 -mr-6 w-10 h-10 bg-white rounded-full shadow-md items-center justify-center z-10 hover:bg-[#FDF8FF] transition-colors border border-border">
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>

          <div className="flex overflow-x-auto gap-6 pb-8 pt-4 px-2 snap-x hide-scrollbar">
            {products.map((product) => (
              <Card key={product.id} className="min-w-[260px] max-w-[280px] shrink-0 snap-start overflow-hidden border-border/50 shadow-sm hover:shadow-md transition-all group flex flex-col h-full rounded-2xl">
                <div className="relative aspect-[4/3] bg-[#FAFAFA] p-0 overflow-hidden">
                  <div className="w-full h-full bg-[#FAFAFA] flex items-center justify-center relative">
                    <span className="font-heading italic text-xl text-primary font-medium">{product.imagePlaceholder}</span>
                  </div>
                  
                  {/* Heart Wishlist Icon */}
                  <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur flex items-center justify-center text-primary shadow-sm hover:bg-primary hover:text-white transition-colors border border-primary/10">
                    <Heart className="w-4 h-4" />
                  </button>
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
                  
                  <div className="font-bold text-lg mb-4 text-foreground">₹{product.price}</div>
                  
                  <Button asChild className="w-full mt-auto rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium h-10">
                    <Link href={`/product/${product.id}`}>Personalize Now</Link>
                  </Button>
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
