import { Heart } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import Link from "next/link"

export default function WishlistPage() {
  return (
    <div className="container mx-auto px-4 py-32 flex flex-col items-center justify-center text-center min-h-[60vh]">
      <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mb-6 text-primary">
        <Heart className="w-10 h-10" />
      </div>
      <h1 className="text-3xl font-heading font-bold mb-4">Your Wishlist is Empty</h1>
      <p className="text-muted-foreground mb-8">You haven't saved any gifts yet. Browse our collections to find something special!</p>
      <Link href="/" className={buttonVariants({ size: "lg", className: "rounded-full px-8" })}>
        Start Browsing
      </Link>
    </div>
  )
}
