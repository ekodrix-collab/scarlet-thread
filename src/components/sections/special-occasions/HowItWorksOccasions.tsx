import { CalendarHeart, Gift, Type, Scissors, Truck, ArrowRight } from "lucide-react"

export function HowItWorksOccasions() {
  const steps = [
    { icon: <CalendarHeart strokeWidth={1.5} className="w-8 h-8" />, title: "Choose Occasion", desc: "Select the festival or special moment" },
    { icon: <Gift strokeWidth={1.5} className="w-8 h-8" />, title: "Pick Your Gift", desc: "Browse our curated collection" },
    { icon: <Type strokeWidth={1.5} className="w-8 h-8" />, title: "Personalize It", desc: "Add name, message or design" },
    { icon: <Scissors strokeWidth={1.5} className="w-8 h-8" />, title: "We Craft It", desc: "Our artisans handcraft with love" },
    { icon: <Truck strokeWidth={1.5} className="w-8 h-8" />, title: "Delivered With Love", desc: "Delivered to your doorstep on time" },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="bg-[#FDF8FF] rounded-[32px] p-8 md:p-12 border border-primary/10 shadow-sm relative overflow-hidden">
          
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold flex items-center justify-center gap-2">
              How It Works 
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-1">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
              </svg>
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center flex-1 relative w-full md:w-auto">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-primary shadow-sm border border-primary/20 mb-4 z-10 relative group hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h4 className="font-bold text-sm text-primary mb-2">{step.title}</h4>
                <p className="text-[11px] text-muted-foreground leading-tight max-w-[120px]">{step.desc}</p>
                
                {/* Horizontal Dashed Line / Arrow for Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-8 left-1/2 w-full pl-8 items-center justify-center -mt-3 pointer-events-none z-0">
                     <div className="w-full border-t border-dashed border-primary/30"></div>
                     <ArrowRight className="text-primary/30 w-5 h-5 -ml-2" />
                  </div>
                )}
                
                {/* Vertical Dashed Line for Mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden h-8 border-l border-dashed border-primary/30 my-2"></div>
                )}
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  )
}
