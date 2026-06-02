import { Gift, Type, Truck, ArrowRight } from "lucide-react"

export function LivePreviewFeatureHer() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-[#FFF5F5] rounded-[32px] p-6 md:p-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 border border-white shadow-xl relative overflow-hidden">
          
          {/* Left: Product Showcase */}
          <div className="flex-1 relative w-full aspect-[4/3] max-w-md mx-auto">
             <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white shadow-inner">
                 <span className="text-3xl font-heading font-medium text-primary/60 italic">Ananya</span>
                 <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="red" stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                 </div>
             </div>
          </div>

          {/* Right: 3 Steps */}
          <div className="flex-[1.5] w-full text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground inline-flex items-center gap-2 mb-10 justify-center lg:justify-start w-full">
              Personalize in 3 Simple Steps
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-1">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
              </svg>
            </h2>

            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 relative">
              
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center flex-1 relative z-10">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-primary shadow-sm border border-primary/20 mb-4">
                  <Gift strokeWidth={1.5} className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-sm text-primary mb-2">1. Choose Your Gift</h4>
                <p className="text-xs text-muted-foreground">Pick your favorite product from our collection</p>
              </div>

              {/* Arrow 1 */}
              <div className="hidden md:flex absolute top-8 left-1/4 w-1/4 items-center justify-center -mt-3 pointer-events-none">
                 <ArrowRight className="text-primary/30 w-6 h-6" />
                 <div className="w-full border-t border-dashed border-primary/30"></div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center flex-1 relative z-10">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-primary shadow-sm border border-primary/20 mb-4">
                  <Type strokeWidth={1.5} className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-sm text-primary mb-2">2. Personalize It</h4>
                <p className="text-xs text-muted-foreground">Add name, text or initials & choose a design</p>
              </div>

              {/* Arrow 2 */}
              <div className="hidden md:flex absolute top-8 right-1/4 w-1/4 items-center justify-center -mt-3 pointer-events-none">
                 <div className="w-full border-t border-dashed border-primary/30"></div>
                 <ArrowRight className="text-primary/30 w-6 h-6" />
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center flex-1 relative z-10">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-primary shadow-sm border border-primary/20 mb-4">
                  <Truck strokeWidth={1.5} className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-sm text-primary mb-2">3. We Craft & Deliver</h4>
                <p className="text-xs text-muted-foreground">Handmade with love & delivered to her doorstep</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
