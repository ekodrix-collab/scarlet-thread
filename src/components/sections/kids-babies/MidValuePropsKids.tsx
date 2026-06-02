import { Droplet, ShieldCheck, Smile, Gift } from "lucide-react"

export function MidValuePropsKids() {
  const props = [
    {
      icon: <Droplet className="w-8 h-8 text-primary" strokeWidth={1.5} />,
      title: "Gentle on Skin",
      desc: "Made with baby safe, hypoallergenic materials"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" strokeWidth={1.5} />,
      title: "Highly Durable",
      desc: "Stitched to last through every hug & wash"
    },
    {
      icon: <Smile className="w-8 h-8 text-primary" strokeWidth={1.5} />,
      title: "Unique & Personal",
      desc: "Add name, initials or cute designs"
    },
    {
      icon: <Gift className="w-8 h-8 text-primary" strokeWidth={1.5} />,
      title: "Perfect for Gifting",
      desc: "Premium packaging, ready to surprise"
    }
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 max-w-6xl mx-auto bg-[#FAFAFA] rounded-3xl p-8 border border-border/50 shadow-sm">
          {props.map((prop, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4 flex-1 group">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm border border-primary/10 text-primary">
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
