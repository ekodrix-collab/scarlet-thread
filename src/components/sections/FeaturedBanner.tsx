import { Button } from "@/components/ui/button"

export function FeaturedBanner() {
  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="rounded-3xl bg-[#FDF8EB] overflow-hidden flex flex-col md:flex-row">
          <div className="p-8 md:p-16 flex-1 flex flex-col justify-center">
            <div className="inline-block px-3 py-1 bg-white rounded-full text-xs font-semibold tracking-widest text-primary uppercase mb-6 w-max">
              Best Seller
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
              New Born Gift Sets
            </h2>
            <p className="text-muted-foreground mb-8 text-lg max-w-md">
              Thoughtful & adorable gifts for your little ones.
            </p>
            <Button size="lg" className="w-max px-8 text-base shadow-md h-12 rounded-full">
              Shop Now
            </Button>
          </div>
          <div className="flex-1 min-h-[300px] md:min-h-[400px] relative bg-[#f5efe6] flex items-center justify-center p-8">
            {/* Fallback image placeholder */}
            <div className="text-center bg-white/60 backdrop-blur p-6 rounded-2xl border border-white">
              <p className="font-heading text-2xl italic text-primary">Hello World</p>
              <p className="text-sm font-medium mt-2">Personalized Onesie Set</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
