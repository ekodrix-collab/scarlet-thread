export function HowItWorks() {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Personalize Your Gift in 3 Simple Steps
        </h2>
        <p className="text-muted-foreground mb-16 max-w-2xl mx-auto">
          Create meaningful memories with our easy personalization process
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="flex flex-col items-center flex-1">
            <div className="w-24 h-24 rounded-full border-2 border-primary border-dashed flex items-center justify-center mb-6 bg-secondary/50 text-primary">
              <GiftBoxIcon />
            </div>
            <h3 className="font-bold text-lg mb-2">1. Choose Your Gift</h3>
            <p className="text-sm text-muted-foreground">Pick your favorite product from our collection</p>
          </div>

          {/* Arrow */}
          <div className="hidden md:block text-primary/30">
            <ArrowRightIcon />
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center flex-1">
            <div className="w-24 h-24 rounded-full border-2 border-primary flex items-center justify-center mb-6 bg-primary text-primary-foreground">
              <PersonalizeIcon />
            </div>
            <h3 className="font-bold text-lg mb-2">2. Personalize It</h3>
            <p className="text-sm text-muted-foreground">Add name, message or choose a design</p>
          </div>

          {/* Arrow */}
          <div className="hidden md:block text-primary/30">
            <ArrowRightIcon />
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center flex-1">
            <div className="w-24 h-24 rounded-full border-2 border-primary border-dashed flex items-center justify-center mb-6 bg-secondary/50 text-primary">
              <DeliveryIcon />
            </div>
            <h3 className="font-bold text-lg mb-2">3. We Craft & Deliver</h3>
            <p className="text-sm text-muted-foreground">Handmade with love & delivered to your doorstep</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function GiftBoxIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
      {/* Lid */}
      <rect x="3" y="8" width="18" height="4" rx="1" />
      {/* Box */}
      <path d="M5 12v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8" />
      {/* Ribbon */}
      <path d="M12 8v14" />
      {/* Bow */}
      <path d="M12 8A3 3 0 0 0 9 5c-1.5 0-3 1.5-3 3s1.5 3 3 3h3" />
      <path d="M12 8A3 3 0 0 1 15 5c1.5 0 3 1.5 3 3s-1.5 3-3 3h-3" />
    </svg>
  )
}

function PersonalizeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
      {/* Needle body */}
      <path d="M5 19L17 7" />
      {/* Eye of the needle */}
      <path d="M17 7c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8L17 7z" />
      <circle cx="18" cy="6" r="0.75" fill="currentColor" />
      {/* Scarlet Thread loop */}
      <path d="M18 6c2-2 4-1 4 2s-3 4-6 4-5-3-7-3-4 2-4 4" strokeWidth="1.5" />
    </svg>
  )
}

function DeliveryIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
      {/* Fast Delivery Van */}
      <path d="M2 9h13v8H2z" />
      <path d="M15 9h4.5l3.5 3.5V17h-8z" />
      {/* Wheels */}
      <circle cx="6" cy="17" r="2.5" />
      <circle cx="17" cy="17" r="2.5" />
      {/* Windshield */}
      <path d="M16 12h4" />
      {/* Motion/speed lines */}
      <path d="M2 6h3" />
      <path d="M1 9h2" />
      <path d="M2 12h2" />
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-8 text-primary/40">
      {/* Smooth wavy dotted path */}
      <path d="M2 12 C 12 4, 18 20, 28 12 C 34 8, 40 10, 44 12" strokeDasharray="5 5" />
      {/* Arrowhead */}
      <path d="m40 8 4 4-4 4" />
    </svg>
  )
}
