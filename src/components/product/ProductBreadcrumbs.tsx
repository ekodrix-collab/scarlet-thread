import Link from "next/link"
import { ChevronRight } from "lucide-react"

export function ProductBreadcrumbs() {
  return (
    <nav className="flex items-center text-xs text-muted-foreground py-4">
      <Link href="/" className="hover:text-primary transition-colors">Home</Link>
      <ChevronRight className="w-3 h-3 mx-2" />
      <Link href="/gifts-for-him" className="hover:text-primary transition-colors">Gifts For Him</Link>
      <ChevronRight className="w-3 h-3 mx-2" />
      <Link href="/gifts-for-him/hoodies" className="hover:text-primary transition-colors">Hoodies</Link>
      <ChevronRight className="w-3 h-3 mx-2" />
      <span className="text-foreground font-medium">King Dad Hoodie</span>
    </nav>
  )
}
