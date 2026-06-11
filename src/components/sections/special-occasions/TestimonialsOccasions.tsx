import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Farhan Ali",
    role: "Verified Buyer",
    content:
      "The Eid gift box I ordered was stunning! Amazing quality and beautiful embroidery. Everyone loved it!",
    rating: 5,
    avatar: "/images/testimonials/farhan.png",
  },
  {
    id: 2,
    name: "Anushka Nair",
    role: "Verified Buyer",
    content:
      "Onam towel was perfect for my parents. Personalization was spot on and delivery was super fast.",
    rating: 5,
    avatar: "/images/testimonials/anushka.png",
  },
  {
    id: 3,
    name: "Ritesh Verma",
    role: "Verified Buyer",
    content:
      "Rakhi gift for my brother was awesome. He was so happy with the personalized message.",
    rating: 5,
    avatar: "/images/testimonials/ritesh.png",
  },
]

export function TestimonialsOccasions() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold flex items-center justify-center gap-2">
            What Our Customers Say

            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="rounded-3xl border border-primary/10 shadow-none bg-white"
            >
              <CardContent className="p-5">

                {/* Stars */}
                <div className="flex gap-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="text-[15px] leading-7 text-gray-700  min-h-[110px]">
                  "{testimonial.content}"
                </p>

                {/* User */}
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-3 mt-8">
          <div className="w-3 h-3 rounded-full bg-primary"></div>
          <div className="w-3 h-3 rounded-full bg-pink-300"></div>
          <div className="w-3 h-3 rounded-full bg-purple-200"></div>
        </div>

      </div>
    </section>
  )
}