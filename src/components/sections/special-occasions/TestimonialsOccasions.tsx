"use client"

import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { motion } from "framer-motion"
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
    <section className="py-16 bg-white overflow-hidden perspective-1000">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold flex items-center justify-center gap-2">
            What Our Customers Say

            <motion.div
              animate={{ rotate: [0, -10, 10, -5, 5, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C86DD7"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 drop-shadow-sm"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </motion.div>
          </h2>
        </motion.div>

        {/* Slider */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 40, rotateX: 10 }}
          whileInView={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.1, type: "spring", stiffness: 60, damping: 15 }}
          className="relative px-4 md:px-12"
          style={{ transformStyle: "preserve-3d" }}
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-6 py-6">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-6 md:basis-1/2 lg:basis-1/3">
                  <motion.div 
                    whileHover={{ y: -12, scale: 1.02 }} 
                    transition={{ type: "spring", stiffness: 400, damping: 17 }} 
                    className="h-full"
                  >
                    <Card className="rounded-[2rem] border border-[#f0e6f7] shadow-sm bg-[#faf6fd]/40 h-full hover:shadow-[0_20px_40px_-15px_rgba(200,109,215,0.2)] transition-shadow duration-500 backdrop-blur-sm">
                      <CardContent className="p-8 h-full flex flex-col relative overflow-hidden group">
                        
                        {/* Decorative Background Element */}
                        <div className="absolute -right-8 -top-8 w-24 h-24 bg-[#c86dd7]/5 rounded-full blur-2xl group-hover:bg-[#c86dd7]/10 transition-colors duration-500" />

                        {/* Stars */}
                        <div className="flex gap-1.5 mb-6 relative z-10">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.3 + (i * 0.1), type: "spring", stiffness: 300 }}
                            >
                              <Star
                                className="w-4 h-4 fill-yellow-400 text-yellow-400 drop-shadow-sm"
                              />
                            </motion.div>
                          ))}
                        </div>

                        {/* Review */}
                        <p className="text-[15px] leading-relaxed text-[#5a4b63] flex-grow relative z-10 font-medium">
                          "{testimonial.content}"
                        </p>

                        {/* User */}
                        <div className="flex items-center gap-4 mt-8 relative z-10">
                          <div className="relative w-14 h-14 rounded-full overflow-hidden border-[3px] border-white shadow-md group-hover:border-[#f0e6f7] transition-colors duration-300">
                            <Image
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                          </div>

                          <div>
                            <h4 className="font-bold text-[15px] text-[#2f1f3a] group-hover:text-[#c86dd7] transition-colors duration-300">
                              {testimonial.name}
                            </h4>
                            <p className="text-[13px] text-[#7f7388] font-medium mt-0.5">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>

                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="border-[#ecdaf4] hover:bg-[#faf6fd] hover:text-[#c86dd7] hover:scale-110 transition-transform duration-300 -left-12 w-10 h-10 shadow-sm" />
              <CarouselNext className="border-[#ecdaf4] hover:bg-[#faf6fd] hover:text-[#c86dd7] hover:scale-110 transition-transform duration-300 -right-12 w-10 h-10 shadow-sm" />
            </div>
          </Carousel>
        </motion.div>

        {/* Dynamic Dots */}
        {count > 0 && (
          <div className="flex justify-center items-center gap-3 mt-10">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`transition-all duration-500 rounded-full ${
                  current === index + 1 
                    ? "w-10 h-2.5 bg-gradient-to-r from-[#c86dd7] to-[#b05dc0] shadow-md" 
                    : "w-2.5 h-2.5 bg-[#f0e6f7] hover:bg-[#d7b8e6]"
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