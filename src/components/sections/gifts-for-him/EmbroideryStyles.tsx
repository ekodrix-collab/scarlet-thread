"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import {
  Great_Vibes,
  Playfair_Display,
  Parisienne,
  Dancing_Script,
} from "next/font/google"

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
})

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: "400",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "600",
})

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: "600",
})

export function EmbroideryStyles() {
const styles = [
  { name: "Alexander", style: "Script Style", fontClass: greatVibes.className },
  { name: "Michael", style: "Luxury Serif", fontClass: parisienne.className },
  { name: "Daniel", style: "Modern Sans", fontClass: playfair.className },
  { name: "John", style: "Handwritten", fontClass: dancingScript.className },
]

  return (
    <section className="py-16 bg-[#FAFAFA]">
      <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, ease: "easeOut" }} className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">
              Choose Your Embroidery Style
            </h2>
            <p className="text-muted-foreground text-sm">Pick a font that suits his personality</p>
          </div>
          <Button size="sm" className="rounded-full bg-primary text-white hover:bg-primary/90 hidden md:flex">
            View All Fonts <ArrowRight className="w-3 h-3 ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {styles.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm border border-border/50 hover:border-primary/30 transition-colors group cursor-pointer">
              <span className={`text-2xl md:text-3xl mb-4 text-foreground group-hover:text-primary transition-colors ${item.fontClass}`}>
                {item.name}
              </span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                {item.style}
              </span>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center md:hidden">
          <Button size="sm" className="rounded-full bg-primary text-white hover:bg-primary/90">
            View All Fonts <ArrowRight className="w-3 h-3 ml-2" />
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
