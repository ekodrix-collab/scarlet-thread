import Image from "next/image"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LivePreviewFeature() {
  const steps = [
    "Choose your favorite product",
    "Add name, text or initials",
    "Select font style & thread color",
    "Upload photo (optional)",
    "Preview your design in real-time",
    "We craft it with love & deliver to your door",
  ]

  return (
    <section className="py-10 bg-[#FAFAFA]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 bg-[#FFF8FF] rounded-3xl p-3 md:p-4 shadow-sm">
          {/* Left: Mockup UI */}
          <div className="flex-1 w-full relative">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
              <Image
                src="/images/forhimpage/scarlet-customizebanner.png"
                alt="Live preview hoodie customization"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: Checklist */}
          <div className="flex-1 px-6 md:px-10 py-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground inline-flex items-center gap-2 mb-6">
              See Your Gift Come To Life
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary mt-1"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </h2>

            <ul className="space-y-3">
              {steps.map((step, index) => (
                <li key={index} className="flex items-center gap-3 group">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-foreground/80">
                    {step}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              size="lg"
              className="mt-6 rounded-md px-8 h-10 text-sm shadow-lg shadow-primary/20 bg-primary hover:bg-primary/90 text-white w-full sm:w-auto"
            >
              Start Personalizing <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}