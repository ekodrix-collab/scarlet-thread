import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function EmbroideryStylesHer() {
  const styles = [
    { name: "Ananya", style: "Script Style", fontClass: "font-heading italic" },
    { name: "Priyanka", style: "Elegant Style", fontClass: "font-heading" },
    { name: "Meera", style: "Classic Style", fontClass: "font-serif" },
    { name: "Simran", style: "Modern Style", fontClass: "font-sans font-medium" },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          
          <div className="md:w-1/4 text-center md:text-left bg-[#FFF5F5] rounded-3xl p-8 flex flex-col justify-center h-full min-h-[200px]">
            <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-3">
              Make It Uniquely Hers
            </h2>
            <p className="text-muted-foreground text-sm mb-6">
              Choose from our beautiful embroidery fonts
            </p>
            <Button size="sm" className="rounded-full bg-primary text-white hover:bg-primary/90 w-max mx-auto md:mx-0">
              View All Fonts <ArrowRight className="w-3 h-3 ml-2" />
            </Button>
          </div>

          <div className="md:w-3/4 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            {styles.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm border border-border/50 hover:border-primary/30 transition-colors group cursor-pointer aspect-square">
                <span className={`text-2xl md:text-3xl mb-4 text-foreground group-hover:text-primary transition-colors ${item.fontClass}`}>
                  {item.name}
                </span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                  {item.style}
                </span>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  )
}
