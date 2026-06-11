"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Heart } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Rahul Mehta",
    role: "Verified Buyer",
    content:
      "The hoodie I ordered for my wife is beyond perfect. The embroidery, quality and packaging everything was amazing!",
    avatar: "R",
  },
  {
    id: 2,
    name: "Neha Kapoor",
    role: "Verified Buyer",
    content:
      "She loved the personalized jewelry box. Thank you for making our anniversary so special!",
    avatar: "N",
  },
 
  {
    id: 4,
    name: "Ananya Sharma",
    role: "Verified Buyer",
    content:
      "Amazing product quality and very cute packaging. I will definitely order again.",
    avatar: "A",
  },
  {
    id: 5,
    name: "Priya Nair",
    role: "Verified Buyer",
    content:
      "The custom gift looked premium and exactly like I wanted. Loved the finishing.",
    avatar: "P",
  },
  {
    id: 6,
    name: "Meera Das",
    role: "Verified Buyer",
    content:
      "Fast delivery, beautiful personalization and perfect gift packaging.",
    avatar: "M",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const visibleCards = 3
  const maxIndex = testimonials.length - visibleCards

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, 4000)

    return () => clearInterval(interval)
  }, [maxIndex])

  return (
    <section className="py-16 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold flex items-center justify-center gap-2">
            What Our Customers Say
            <Heart className="w-5 h-5 text-primary fill-transparent" />
          </h2>

          <p className="text-muted-foreground mt-2">
            Real stories from real customers
          </p>
        </div>

        <div className="max-w-7xl mx-auto overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 33.3333}%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-1/3 shrink-0 px-3">
                <Card className="h-[260px] border-none shadow-sm hover:shadow-md transition-shadow rounded-xl flex flex-col">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex gap-1 mb-4 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>

                    <p className="text-foreground/80 italic text-sm leading-relaxed flex-1">
                      "{testimonial.content}"
                    </p>

                    <div className="flex items-center gap-3 mt-5">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                        {testimonial.avatar}
                      </div>

                      <div>
                        <h4 className="font-bold text-sm">
                          {testimonial.name}
                        </h4>

                        <p className="text-xs text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: testimonials.length - 2 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index
                  ? "w-6 h-2 bg-primary"
                  : "w-2 h-2 bg-primary/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}