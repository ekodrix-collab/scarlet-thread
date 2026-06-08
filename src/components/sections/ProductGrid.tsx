import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "Mama Heart Hoodie",
    category: "Hoodies",
    price: 1499,
    rating: 4.9,
    reviews: 120,
    imagePlaceholder: "Mama",
    image: "/images/scarlet-lovedgift1.png"
  },
  {
    id: 2,
    name: "Personalized Hooded Towel",
    category: "Towels",
    price: 899,
    rating: 4.8,
    reviews: 86,
    imagePlaceholder: "Aryan",
    image: "/images/scarlet-lovedgift2.png"
  },
  {
    id: 3,
    name: "Bride Cosmetic Pouch",
    category: "Pouches",
    price: 699,
    rating: 4.9,
    reviews: 44,
    imagePlaceholder: "Bride",
    image: "/images/scarlet-lovedgift3.png"
  },
  {
    id: 4,
    name: "Teacher's Day Notebook",
    category: "Notebooks",
    price: 449,
    rating: 4.7,
    reviews: 32,
    imagePlaceholder: "Best Teacher",
    image: "/images/scarlet-lovedgift4.png"
  }
]

export function ProductGrid() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold flex items-center justify-center gap-2">
            Our Most Loved Gifts <Heart className="w-5 h-5 text-primary fill-transparent" />
          </h2>
          <p className="text-muted-foreground mt-2">Handpicked gifts that are making hearts smile</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden border-border/50 shadow-sm hover:shadow-md transition-all group">
              <div className="relative aspect-square bg-secondary/30 overflow-hidden">
                <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur rounded-full text-muted-foreground hover:text-red-500 transition-colors z-20 opacity-0 group-hover:opacity-100">
                  <Heart className="w-4 h-4" />
                </button>
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center p-6">
                    <div className="w-full h-full bg-white rounded-2xl shadow-sm flex items-center justify-center border border-border/30">
                      <span className="font-heading italic text-xl text-primary font-medium">{product.imagePlaceholder}</span>
                    </div>
                  </div>
                )}
              </div>
              <CardContent className="p-4 pt-5">
                <div className="text-xs text-muted-foreground mb-1 font-medium tracking-wide uppercase">{product.category}</div>
                <h3 className="font-bold text-base mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                  <Link href={`/product/${product.id}`}>{product.name}</Link>
                </h3>
                <div className="flex items-center justify-between">
                  <div className="font-bold text-lg">₹{product.price}</div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{product.rating}</span>
                    <span className="text-xs">({product.reviews})</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="rounded-full px-8 shadow-sm">View All Gifts</Button>
        </div>
      </div>
    </section>
  )
}
