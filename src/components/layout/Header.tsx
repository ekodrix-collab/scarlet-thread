"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search, Heart, User, ShoppingBag, Menu } from 'lucide-react'

export function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname?.startsWith(path)
  }

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Gifts For Him', path: '/gifts-for-him' },
    { name: 'Gifts For Her', path: '/gifts-for-her' },
    { name: 'Kids & Babies', path: '/kids-babies' },
    { name: 'Special Occasions', path: '/special-occasions' },
    { name: 'Gallery', path: '/gallery' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm font-medium">
        Free Shipping Above ₹1499 • Made With Love In India • Track Your Order
      </div>
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Mobile Menu */}
        <div className="flex items-center md:hidden">
          <button className="p-2 text-foreground">
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading text-xl italic font-bold">
              S
            </div>
            <span className="hidden md:inline-block font-heading text-xl font-bold tracking-tight text-primary uppercase">
              The Scarlet Thread
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              href={link.path} 
              className={`transition-colors hover:text-primary ${isActive(link.path) ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-muted-foreground'}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="p-2 text-foreground hover:text-primary transition-colors">
            <Search className="h-5 w-5" />
          </button>
          <Link href="/account" className="p-2 text-foreground hover:text-primary transition-colors hidden md:block">
            <User className="h-5 w-5" />
          </Link>
          <Link href="/wishlist" className="p-2 text-foreground hover:text-primary transition-colors relative">
            <Heart className="h-5 w-5" />
          </Link>
          <Link href="/cart" className="p-2 text-foreground hover:text-primary transition-colors relative">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-bold text-primary-foreground flex items-center justify-center">
              0
            </span>
          </Link>
        </div>
      </div>
    </header>
  )
}
