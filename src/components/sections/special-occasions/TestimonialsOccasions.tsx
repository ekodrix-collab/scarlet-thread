import { Card, CardContent } from "@/components/ui/card"
import { Star, Heart } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Farhan Ali",
    role: "Verified Buyer",
    content: "The Eid gift box I ordered was stunning! Amazing quality and beautiful embroidery. Everyone loved it!",
    rating: 5,
    avatar: "FA"
  },
  {
    id: 2,
    name: "Anushka Nair",
    role: "Verified Buyer",
    content: "Onam towel was perfect for my parents. Personalization was spot on and delivery was super fast.",
    rating: 5,
    avatar: "AN"
  },
  {
    id: 3,
    name: "Ritesh Verma",
    role: "Verified Buyer",
    content: "Rakhi gift for my brother was awesome. He was so happy with the personalized message.",
    rating: 5,
    avatar: "RV"
  }
]

export function TestimonialsOccasions() {
  return (
    <section className="py-16 bg-white border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-heading font-bold flex items-center justify-center gap-2">
            What Our Customers Say 
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-1">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
            </svg>
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
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FDF8FF] flex items-center justify-center text-primary font-bold text-sm border border-primary/20">
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
           <div className="w-2 h-2 rounded-full bg-[#E5E5E5]"></div>
           <div className="w-2 h-2 rounded-full bg-[#E5E5E5]"></div>
        </div>
      </div>
    </section>
  )
}
