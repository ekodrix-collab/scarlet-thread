"use client"

import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Verified Buyer",
    content:
      "The personalized hamper I ordered for Diwali was absolutely stunning. The attention to detail is unmatched!",
    rating: 5,
    avatar: "/images/testimonials/priya.png",
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Verified Buyer",
    content:
      "Ordered a custom gift set for my sister's wedding. She loved it. The quality of the products is top notch.",
    rating: 5,
    avatar: "/images/testimonials/rahul.png",
  },
  {
    id: 3,
    name: "Anushka Nair",
    role: "Verified Buyer",
    content:
      "Onam towel was perfect for my parents. Personalization was spot on and delivery was super fast.",
    rating: 5,
    avatar: "/images/testimonials/anushka.png",
  },
  {
    id: 4,
    name: "Neha Gupta",
    role: "Verified Buyer",
    content:
      "The festive combo box made an excellent corporate gift for our team. The elegant packaging really stood out.",
    rating: 5,
    avatar: "/images/testimonials/anushka.png",
  },
  {
    id: 5,
    name: "Ritesh Verma",
    role: "Verified Buyer",
    content:
      "Rakhi gift for my brother was awesome. He was so happy with the personalized message.",
    rating: 5,
    avatar: "/images/testimonials/ritesh.png",
  },
]

export function TestimonialsOccasions() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  // Auto sliding effect
  React.useEffect(() => {
    if (!api) return

    const autoplay = setInterval(() => {
      api.scrollNext()
    }, 4000) // Slide every 4 seconds

    return () => clearInterval(autoplay)
  }, [api])

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold flex items-center justify-center gap-2">
            What Our Customers Say

            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#C86DD7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </h2>
        </div>

        {/* Slider */}
        <div className="relative px-4 md:px-12">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-6">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-6 md:basis-1/2 lg:basis-1/3">
                  <Card className="rounded-[2rem] border border-[#f0e6f7] shadow-sm bg-[#faf6fd]/30 h-full hover:shadow-[0_8px_30px_-5px_rgba(200,109,215,0.15)] transition-shadow duration-300">
                    <CardContent className="p-8 h-full flex flex-col">

                      {/* Stars */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>

                      {/* Review */}
                      <p className="text-[15px] leading-relaxed text-[#5a4b63] flex-grow">
                        "{testimonial.content}"
                      </p>

                      {/* User */}
                      <div className="flex items-center gap-4 mt-6">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div>
                          <h4 className="font-bold text-[15px] text-[#2f1f3a]">
                            {testimonial.name}
                          </h4>
                          <p className="text-[13px] text-[#7f7388]">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>

                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="border-[#ecdaf4] hover:bg-[#faf6fd] hover:text-[#c86dd7] -left-12" />
              <CarouselNext className="border-[#ecdaf4] hover:bg-[#faf6fd] hover:text-[#c86dd7] -right-12" />
            </div>
          </Carousel>
        </div>

        {/* Dynamic Dots */}
        {count > 0 && (
          <div className="flex justify-center items-center gap-2 mt-10">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`transition-all duration-300 rounded-full ${
                  current === index + 1 
                    ? "w-8 h-2.5 bg-[#c86dd7]" 
                    : "w-2.5 h-2.5 bg-[#f0e6f7] hover:bg-[#e6c9f2]"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  )
}