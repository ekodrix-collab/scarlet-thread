"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from "framer-motion"
import { Search, Heart, User, ShoppingBag, Home, Gift, Baby, Star, Image, Menu, X, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const marqueeItems = [
  "• Free Shipping Above ₹1499",
  "• Made With Love In India",
  "• Track Your Order",
]

export function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/'
    return pathname?.startsWith(path)
  }

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Gifts For Him', path: '/gifts-for-him', icon: Gift },
    { name: 'Gifts For Her', path: '/gifts-for-her', icon: Heart },
    { name: 'Kids & Babies', path: '/kids-babies', icon: Baby },
    { name: 'Special Occasions', path: '/special-occasions', icon: Star },
    { name: 'Gallery', path: '/gallery', icon: Image },
  ]

  const bottomNavLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'For Him', path: '/gifts-for-him', icon: Gift },
    { name: 'For Her', path: '/gifts-for-her', icon: Heart },
    { name: 'Kids', path: '/kids-babies', icon: Baby },
    { name: 'Account', path: '/account', icon: User },
  ]

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-white/60 backdrop-blur-sm">

        {/* Announcement Bar */}
        <div className="bg-primary text-primary-foreground py-1 text-center text-[12px] font-medium tracking-wider overflow-hidden">
          {/* Desktop: static centered — only above lg */}
          <div className="hidden lg:block px-4">
            • Free Shipping Above ₹1499 &nbsp;&nbsp;• Made With Love In India &nbsp;&nbsp;• Track Your Order
          </div>

          {/* Mobile + Tablet: marquee — below lg */}
          <div className="lg:hidden overflow-hidden">
            <motion.div
              className="flex gap-12 whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 18, ease: "linear", repeat: Infinity }}
            >
              {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
                <span key={index} className="shrink-0">{item}</span>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="flex h-16 items-center justify-between px-4">

          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
              <img
                src="/images/logo/logo.png"
                alt="The Scarlet Thread Logo"
                className="h-5 w-10 lg:h-8 lg:w-8 object-contain"
              />
              <img
                src="/images/logo/name.png"
                alt="The Scarlet Thread"
                className="h-8 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation — only above lg (1024px) */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`transition-colors font-semibold uppercase text-[12px] hover:text-primary ${
                  isActive(link.path) ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1">
            <button className="p-2 text-foreground hover:text-primary transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <Link href="/account" className="p-2 text-foreground hover:text-primary transition-colors hidden lg:block">
              <User className="h-5 w-5" />
            </Link>
            <Link href="/wishlist" className="p-2 text-foreground hover:text-primary transition-colors hidden lg:block">
              <Heart className="h-5 w-5" />
            </Link>
            <Link href="/cart" className="p-2 text-foreground hover:text-primary transition-colors relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-bold text-primary-foreground flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Hamburger — visible below lg (0px – 1023px) */}
            <button
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors ml-1"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Toggle Dropdown Menu — below lg */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden border-t bg-white shadow-md"
            >
              <nav className="flex flex-col py-2">
                {navLinks.map((link) => {
                  const Icon = link.icon
                  const active = isActive(link.path)
                  return (
                    <Link
                      key={link.path}
                      href={link.path}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center justify-between px-5 py-3.5 text-[13px] font-semibold uppercase tracking-wide transition-colors border-b border-border/40 last:border-0 ${
                        active ? 'text-primary bg-primary/5' : 'text-muted-foreground hover:text-primary hover:bg-muted/40'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="h-4 w-4" />
                        {link.name}
                      </div>
                      <ChevronRight className="h-4 w-4 opacity-40" />
                    </Link>
                  )
                })}

                {/* Account & Wishlist at bottom of dropdown */}
                <div className="flex items-center gap-4 px-5 py-4 border-t border-border/40 mt-1">
                  <Link
                    href="/account"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2 text-[12px] font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    <User className="h-4 w-4" /> Account
                  </Link>
                  <Link
                    href="/wishlist"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2 text-[12px] font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Heart className="h-4 w-4" /> Wishlist
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Bottom Navigation — below lg */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border shadow-[0_-2px_10px_rgba(0,0,0,0.08)]">
        <div className="flex items-center justify-around h-16 px-2">
          {bottomNavLinks.map((link) => {
            const Icon = link.icon
            const active = isActive(link.path)
            return (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setMenuOpen(false)}
                className={`flex flex-col items-center justify-center gap-1 flex-1 py-2 transition-colors relative ${
                  active ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="text-[10px] font-medium leading-none">{link.name}</span>
                {active && (
                  <span className="absolute bottom-0 w-6 h-0.5 rounded-full bg-primary" />
                )}
              </Link>
            )
          })}
        </div>
      </nav>

      {/* Bottom spacer for mobile/tablet */}
      <div className="lg:hidden h-16" />
    </>
  )
}