export function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-white">
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
      <polyline points="20 12 20 22 4 22 4 12" />
      <rect width="20" height="5" x="2" y="7" />
      <line x1="12" x2="12" y1="22" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
  )
}

function PersonalizeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  )
}

function DeliveryIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
      <rect width="16" height="12" x="2" y="8" rx="2" ry="2" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="14.5" cy="18.5" r="2.5" />
      <path d="M18 8h3a1 1 0 0 1 1 1v4h-4" />
      <path d="M18 13h4" />
      <path d="M6 16v-4" />
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}
