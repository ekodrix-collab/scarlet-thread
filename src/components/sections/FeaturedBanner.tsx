import { Button } from "@/components/ui/button"
import Image from "next/image"

export function FeaturedBanner() {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="rounded-3xl bg-[#FDF8EB] overflow-hidden flex flex-col md:flex-row relative min-h-[400px] md:min-h-[450px] lg:min-h-[480px]">
          {/* Background Image */}
          <Image
            src="/images/scarlet-bestseller-banner.png"
            alt="New Born Gift Sets Bestseller Banner"
            fill
            className="object-cover z-0"
            priority
          />
          
          <div className="p-8 md:p-12 lg:p-16 md:w-1/2 flex flex-col justify-center relative z-10">
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
        </div>
      </div>
    </section>
  )
}

