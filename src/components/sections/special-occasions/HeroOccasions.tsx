import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";

export function HeroOccasions() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">

        {/* Background Image */}
        <Image
          src="/images/special_occasions2.png"
          alt="Special Occasions"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-xl px-6 md:px-12 lg:px-20">

            <div className="flex items-center gap-2 text-primary mb-1">
              <span className="italic text-lg md:text-xl ">
                Celebrate Every Moment
              </span>
              <Heart className="w-5 h-5" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-black text-nowrap">
                Special Occasions,
              </span>
              <br />
              <span className="text-black text-nowrap">
                Special{" "}
              </span>
              <span className="text-primary text-nowrap">
                Memories
              </span>
            </h1>

            <p className="mt-2 text-gray-700 text-base md:text-lg max-w-md">
              Thoughtful, personalized gifts for every festival,
              celebration and special moment. Because every occasion
              deserves something truly unique.
            </p>

            <div className="flex flex-col sm:flex-row gap-4  mt-8">
              <Button className="rounded-full px-8 h-12 bg-primary hover:bg-primary/90">
                Shop All Occasions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                className="rounded-full px-8 h-12 border-primary/20"
              >
                Explore Collection
              </Button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}