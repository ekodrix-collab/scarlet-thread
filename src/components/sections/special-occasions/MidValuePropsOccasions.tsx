import { Heart, Award, Sparkles, Truck } from "lucide-react"

export function MidValuePropsOccasions() {
  const props = [
    {
      icon: <Sparkles className="w-8 h-8 text-primary" strokeWidth={1.5} />,
      title: "Personalized for You",
      desc: "Add names, dates & special messages"
    },
    {
      icon: <Award className="w-8 h-8 text-primary" strokeWidth={1.5} />,
      title: "Premium Quality",
      desc: "Finest materials & embroidery"
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" strokeWidth={1.5} />,
      title: "Made With Love",
      desc: "Handcrafted with care by our artisans"
    },
    {
      icon: <Truck className="w-8 h-8 text-primary" strokeWidth={1.5} />,
      title: "Fast Delivery",
      desc: "Safe & quick delivery across India"
    }
  ]

  return (
    <section className="py-8 bg-white border-y border-border/40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 max-w-6xl mx-auto bg-[#FDF8FF] rounded-3xl p-8 border border-primary/10 shadow-sm">
          {props.map((prop, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center text-center md:text-left gap-4 flex-1 group">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm border border-primary/20 text-primary">
                {prop.icon}
              </div>
              <div>
                <h4 className="font-bold text-sm text-foreground mb-1">{prop.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{prop.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
