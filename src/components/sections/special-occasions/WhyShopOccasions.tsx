import { CalendarDays, HeartHandshake, Scissors, PackageSearch, Clock, RefreshCcw } from "lucide-react"

export function WhyShopOccasions() {
  const reasons = [
    { icon: <CalendarDays strokeWidth={1.5} className="w-6 h-6 text-primary" />, title: "Wide Range of Festivals", desc: "All major festivals covered" },
    { icon: <HeartHandshake strokeWidth={1.5} className="w-6 h-6 text-primary" />, title: "Custom Personalization", desc: "Make it unique with your personal touch" },
    { icon: <Scissors strokeWidth={1.5} className="w-6 h-6 text-primary" />, title: "Handmade With Love", desc: "Crafted by skilled artisans" },
    { icon: <PackageSearch strokeWidth={1.5} className="w-6 h-6 text-primary" />, title: "Premium Packaging", desc: "Elegant & gift ready packaging" },
    { icon: <Clock strokeWidth={1.5} className="w-6 h-6 text-primary" />, title: "On-Time Delivery", desc: "Delivering happiness on every occasion" },
    { icon: <RefreshCcw strokeWidth={1.5} className="w-6 h-6 text-primary" />, title: "Hassle Free Returns", desc: "Easy returns & exchange policy" },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-heading font-bold flex items-center justify-center gap-2">
            Why Shop Occasions With Us? 
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-1">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
            </svg>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-4">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-center gap-3 bg-[#FDF8FF] p-4 rounded-2xl border border-primary/20 flex-1 min-w-[250px] max-w-[300px] hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm border border-primary/10">
                {reason.icon}
              </div>
              <div>
                <h4 className="font-bold text-xs text-primary mb-1">{reason.title}</h4>
                <p className="text-[10px] text-muted-foreground leading-tight">{reason.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
