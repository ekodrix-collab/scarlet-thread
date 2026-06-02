import { Card, CardContent } from "@/components/ui/card"
import { Star, Heart } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Ananya Sharma",
    role: "Verified Buyer",
    content: "The personalized hoodie was perfect! The embroidery quality is amazing and delivery was super quick.",
    avatar: "A"
  },
  {
    id: 2,
    name: "Rohit Verma",
    role: "Verified Buyer",
    content: "Ordered a gift for my sister's baby shower. Everyone loved it! Beautiful packaging and lovely product.",
    avatar: "R"
  }
]

export function Testimonials() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold flex items-center justify-center gap-2">
            What Our Customers Say <Heart className="w-5 h-5 text-primary fill-transparent" />
          </h2>
          <p className="text-muted-foreground mt-2">Real stories from real customers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4 text-yellow-400">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <p className="text-foreground/80 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Simple dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-2 h-2 rounded-full bg-primary"></div>
          <div className="w-2 h-2 rounded-full bg-primary/30"></div>
          <div className="w-2 h-2 rounded-full bg-primary/30"></div>
        </div>
      </div>
    </section>
  )
}
