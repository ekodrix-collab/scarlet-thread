import { Truck, ShieldCheck, RefreshCcw, HeadphonesIcon } from "lucide-react"

export function BottomValuePropsKids() {
  const props = [
    {
      icon: <Truck className="w-8 h-8 text-primary" strokeWidth={1.5} />,
      title: "Fast Delivery",
      desc: "Quick & safe delivery across India"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" strokeWidth={1.5} />,
      title: "Secure Payment",
      desc: "100% secure payment with trusted gateways"
    },
    {
      icon: <RefreshCcw className="w-8 h-8 text-primary" strokeWidth={1.5} />,
      title: "Easy Returns",
      desc: "Hassle-free returns and exchanges"
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8 text-primary" strokeWidth={1.5} />,
      title: "Customer Support",
      desc: "We're here to help you at every step"
    }
  ]

  return (
    <section className="py-12 bg-white border-y border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center md:justify-between gap-6 max-w-7xl mx-auto">
          {props.map((prop, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4 flex-1 min-w-[200px] group">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm border border-primary/10">
                {prop.icon}
              </div>
              <div>
                <h4 className="font-bold text-sm text-foreground mb-1">{prop.title}</h4>
                <p className="text-[11px] leading-tight text-muted-foreground">{prop.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
