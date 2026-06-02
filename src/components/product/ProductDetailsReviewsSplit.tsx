import { Star, ArrowRight } from "lucide-react"

export function ProductDetailsReviewsSplit() {
  const specs = [
    { label: "Fabric", value: "80% Cotton, 20% Polyester Fleece" },
    { label: "Fit", value: "Unisex Regular Fit" },
    { label: "Neck", value: "Hooded Neck" },
    { label: "Sleeves", value: "Full Sleeves" },
    { label: "Care Instructions", value: "Machine wash cold, inside out. Do not bleach. Tumble dry low." },
    { label: "What's in the box?", value: "1 x Personalized Hoodie" },
  ]

  const reviews = [
    {
      id: 1,
      name: "Ahmed R.",
      date: "2 days ago",
      rating: 5,
      content: "Amazing quality and the embroidery is just perfect. My dad loved it! ❤️",
      images: ["Hoodie Pic 1", "Hoodie Pic 2", "Dad Wearing It"]
    },
    {
      id: 2,
      name: "Priya S.",
      date: "1 week ago",
      rating: 5,
      content: "The fabric is so soft and the fit is perfect. Great packaging too!",
      images: ["Box Open", "Embroidery Close Up", "Tag"]
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left: Product Details Specs */}
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-6">Product Details</h3>
            <div className="bg-[#FAFAFA] rounded-2xl border border-border p-6 shadow-sm">
              <div className="flex flex-col gap-4">
                {specs.map((spec, index) => (
                  <div key={index} className="flex gap-4 items-start pb-4 border-b border-border/50 last:border-0 last:pb-0">
                    <div className="w-1/3 text-xs font-bold text-primary shrink-0">{spec.label}</div>
                    <div className="text-xs text-foreground/80 leading-relaxed">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Customer Reviews */}
          <div className="flex-[1.5]">
            <h3 className="font-bold text-lg mb-6">Customer Reviews</h3>
            
            <div className="bg-white rounded-2xl border border-border p-6 shadow-sm mb-6">
              <div className="flex flex-col md:flex-row gap-8">
                
                {/* Rating Overview */}
                <div className="w-full md:w-1/3">
                  <div className="text-5xl font-heading font-bold text-foreground mb-2 flex items-baseline gap-2">
                    4.9
                    <div className="flex text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-4">Based on 256 reviews</p>
                  
                  {/* Bars */}
                  <div className="space-y-2">
                    {[
                      { stars: 5, pct: "92%" },
                      { stars: 4, pct: "6%" },
                      { stars: 3, pct: "1%" },
                      { stars: 2, pct: "0.5%" },
                      { stars: 1, pct: "0.5%" },
                    ].map((bar) => (
                      <div key={bar.stars} className="flex items-center gap-2 text-[10px] text-muted-foreground">
                        <span className="w-2">{bar.stars}</span>
                        <Star className="w-2.5 h-2.5 text-yellow-400 fill-current" />
                        <div className="flex-1 h-1.5 bg-secondary rounded-full overflow-hidden">
                          <div className="h-full bg-primary" style={{ width: bar.pct }}></div>
                        </div>
                        <span className="w-8 text-right">{bar.pct}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Review List */}
                <div className="flex-1 space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-border/50 pb-6 last:border-0 last:pb-0">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-[#FDF8FF] text-primary flex items-center justify-center font-bold text-xs border border-primary/20">
                            {review.name.charAt(0)}
                          </div>
                          <div>
                            <div className="font-bold text-sm text-foreground flex items-center gap-2">
                              {review.name}
                              <div className="flex text-yellow-400">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star key={i} className="w-2.5 h-2.5 fill-current" />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        <span className="text-[10px] text-muted-foreground">{review.date}</span>
                      </div>
                      
                      <p className="text-xs text-foreground/80 mb-3">{review.content}</p>
                      
                      {/* Review Images */}
                      <div className="flex gap-2">
                        {review.images.map((img, idx) => (
                          <div key={idx} className="w-16 h-16 rounded-lg bg-[#FAFAFA] border border-border flex items-center justify-center overflow-hidden cursor-pointer hover:border-primary transition-colors">
                            <span className="text-[8px] text-muted-foreground text-center px-1">{img}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
              </div>
            </div>

            <div className="text-center md:text-left">
              <button className="text-sm font-bold text-primary flex items-center justify-center md:justify-start gap-2 hover:underline">
                View All 256 Reviews <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
