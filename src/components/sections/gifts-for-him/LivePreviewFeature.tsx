import { CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LivePreviewFeature() {
  const steps = [
    "Choose your favorite product",
    "Add name, text or initials",
    "Select font style & thread color",
    "Upload photo (optional)",
    "Preview your design in real-time",
    "We craft it with love & deliver to your door"
  ]

  return (
    <section className="py-16 md:py-24 bg-[#FAFAFA]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground inline-flex items-center gap-2">
            See Your Gift Come To Life
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-1">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
            </svg>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Left: Mockup UI */}
          <div className="flex-1 w-full relative">
            {/* The outer container mimicking the web app interface */}
            <div className="bg-white rounded-3xl p-4 md:p-6 shadow-xl border border-border/50 relative">
              <div className="relative aspect-square md:aspect-[4/3] rounded-2xl bg-secondary/30 overflow-hidden flex items-center justify-center border border-border/30">
                {/* Hoodie Mockup Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  <span className="text-4xl font-bold text-muted-foreground">Hoodie Image</span>
                </div>
                
                {/* Floating Personalization Widget */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-[280px] bg-white/90 backdrop-blur shadow-2xl rounded-2xl p-6 border border-white">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4 flex items-center justify-between">
                    Live Preview <ArrowRight className="w-3 h-3" />
                  </div>
                  <div className="text-4xl font-heading italic text-center mb-2 text-foreground">
                    Aryan
                  </div>
                  <div className="flex justify-center mb-6">
                     <svg width="16" height="16" viewBox="0 0 24 24" fill="red" stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs font-medium mb-2">Font Style</div>
                      <div className="flex gap-2">
                        <div className="flex-1 py-1 border rounded text-center text-xs font-medium bg-secondary">Aa</div>
                        <div className="flex-1 py-1 border rounded text-center text-xs font-heading italic">Aa</div>
                        <div className="flex-1 py-1 border rounded text-center text-xs font-sans font-bold">Aa</div>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-medium mb-2">Thread Color</div>
                      <div className="flex gap-2">
                        <div className="w-4 h-4 rounded-full bg-black"></div>
                        <div className="w-4 h-4 rounded-full bg-red-600"></div>
                        <div className="w-4 h-4 rounded-full bg-green-600 border border-border"></div>
                        <div className="w-4 h-4 rounded-full bg-blue-400"></div>
                        <div className="w-4 h-4 rounded-full bg-purple-400"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements behind */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary rounded-full blur-2xl"></div>
            </div>
          </div>

          {/* Right: Checklist */}
          <div className="flex-1">
            <ul className="space-y-6">
              {steps.map((step, index) => (
                <li key={index} className="flex items-start gap-4 group">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-lg font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                    {step}
                  </span>
                </li>
              ))}
            </ul>
            
            <Button size="lg" className="mt-10 rounded-full px-8 h-12 text-base shadow-lg shadow-primary/20 bg-primary hover:bg-primary/90 text-white w-full sm:w-auto">
              Start Personalizing <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}
