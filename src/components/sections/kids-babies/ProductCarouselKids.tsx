import { Card, CardContent } from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"
import { Heart, Star, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

const products = [
  {
    id: 21,
    name: "Hooded Towel",
    price: 899,
    rating: 4.9,
    reviews: 128,
    imagePlaceholder: "Myra Towel",
    image: "/images/scarlet-babie1.png"
  },
  {
    id: 22,
    name: "Embroidered Onesie",
    price: 699,
    rating: 4.8,
    reviews: 95,
    imagePlaceholder: "Little Prince",
    image: "/images/scarlet-babie2.png"
  },
  {
    id: 23,
    name: "Personalized Teddy",
    price: 999,
    rating: 4.9,
    reviews: 112,
    imagePlaceholder: "Teddy Bear",
    image: "/images/scarlet-babie3.png"
  },
  {
    id: 24,
    name: "Kids Backpack",
    price: 1299,
    rating: 4.8,
    reviews: 74,
    imagePlaceholder: "Ananya Backpack",
    image: "/images/scarlet-babie4.png"
  },
  {
    id: 25,
    name: "Baby Blanket",
    price: 1099,
    rating: 4.9,
    reviews: 86,
    imagePlaceholder: "Vihaan Blanket",
    image: "/images/scarlet-babie5.png"
  }
]

export function ProductCarouselKids() {
  return (
    <section className="py-4 md:py-8 bg-white">
      <div className="container px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold flex items-center justify-center gap-2">
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

          <div className="flex gap-4 sm:gap-6 pb-8 pt-4 px-1 sm:px-2 snap-x hide-scrollbar overflow-x-auto justify-start md:justify-center">
            {products.map((product) => (
              <Card key={product.id} className="min-w-[200px] sm:min-w-[220px] md:min-w-[200px] lg:min-w-[220px] max-w-[280px] w-[calc((100%-96px)/5)] shrink-0 snap-start overflow-hidden border-border/50 shadow-sm hover:shadow-md transition-all group flex flex-col h-full rounded-2xl">
                <div className="relative aspect-square overflow-hidden bg-[#FAFAFA]">
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 280px"
                  />
                  {/* Personalized text badge */}
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
                  
                  <div className="font-bold text-lg mb-4 text-[#FF69B4]">₹{product.price}</div>
                  
                  <Link 
                    href={`/product/${product.id}`} 
                    className={cn(
                      buttonVariants({ variant: "default" }),
                      "w-full mt-auto rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium h-10 flex items-center justify-center text-sm"
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
