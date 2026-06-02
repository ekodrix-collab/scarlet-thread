import { Heart } from "lucide-react"

export function ProductOccasionsGrid() {
  const occasions = [
    { title: "Birthday", image: "Birthday Cake" },
    { title: "Father's Day", image: "Father's Card" },
    { title: "Anniversary", image: "Red Gift Box" },
    { title: "Thank You Gift", image: "Thank You Note" },
    { title: "New Man", image: "Lanterns/Lights" },
    { title: "Just Because", image: "Heart in Hands" },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-heading font-bold flex items-center justify-center gap-2">
            Perfect For Every Occasion <Heart className="w-5 h-5 text-primary fill-transparent" />
          </h2>
        </div>

        <div className="bg-[#FAFAFA] border border-border/50 rounded-3xl p-6 md:p-10 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {occasions.map((occ, index) => (
              <div key={index} className="flex flex-col items-center group cursor-pointer">
                <div className="w-full aspect-[4/3] rounded-2xl bg-white border border-border overflow-hidden mb-3 shadow-sm relative group-hover:border-primary/50 transition-colors">
                  {/* Mock Image Content */}
                  <div className="absolute inset-0 bg-[#FDF8FF] flex items-center justify-center p-2 text-center">
                    <span className="text-[10px] text-muted-foreground font-medium italic">{occ.image}</span>
                  </div>
                </div>
                <h4 className="text-xs font-bold text-foreground group-hover:text-primary transition-colors text-center">
                  {occ.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
