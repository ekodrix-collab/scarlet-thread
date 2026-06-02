import { Card, CardContent } from "@/components/ui/card"
import { Star, Heart } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Verified Buyer",
    content: "The quality is amazing and the embroidery is perfect. My baby loves the towel!",
    rating: 5,
    avatar: "PS"
  },
  {
    id: 2,
    name: "Neha Kapoor",
    role: "Verified Buyer",
    content: "Such a cute and unique gift! Everyone at the baby shower loved it.",
    rating: 5,
    avatar: "NK"
  },
  {
    id: 3,
    name: "Rohit Verma",
    role: "Verified Buyer",
    content: "Super soft fabric and beautiful embroidery. Highly recommended!",
    rating: 5,
    avatar: "RV"
  }
]

export function TestimonialsKids() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-heading font-bold flex items-center justify-center gap-2">
            What Parents Say <Heart className="w-5 h-5 text-primary fill-transparent" />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white border-border/50 shadow-sm hover:shadow-md transition-shadow rounded-2xl relative overflow-hidden group">
              <CardContent className="p-8">
                <div className="flex text-yellow-400 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-foreground/80 text-sm mb-8 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FFF0F5] flex items-center justify-center text-[#FF69B4] font-bold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-foreground">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
              {/* Decorative top border on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-[#FF69B4] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </Card>
          ))}
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-10">
           <div className="w-2 h-2 rounded-full bg-primary"></div>
           <div className="w-2 h-2 rounded-full bg-secondary"></div>
           <div className="w-2 h-2 rounded-full bg-secondary"></div>
        </div>
      </div>
    </section>
  )
}
