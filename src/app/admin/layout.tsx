import Link from "next/link"
import { LayoutDashboard, ShoppingBag, Users, Settings, Tag, MessageSquare, Image as ImageIcon } from "lucide-react"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-secondary/30">
      {/* Admin Sidebar */}
      <aside className="w-64 bg-white border-r flex-shrink-0 hidden md:block">
        <div className="h-16 flex items-center px-6 border-b">
          <span className="font-heading font-bold text-lg text-primary">Admin Panel</span>
        </div>
        <nav className="p-4 space-y-2">
          <Link href="/admin" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-secondary text-primary font-medium">
            <LayoutDashboard className="w-5 h-5" /> Dashboard
          </Link>
          <Link href="/admin/products" className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-secondary/50 hover:text-primary transition-colors">
            <ShoppingBag className="w-5 h-5" /> Products
          </Link>
          <Link href="/admin/orders" className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-secondary/50 hover:text-primary transition-colors">
            <Tag className="w-5 h-5" /> Orders
          </Link>
          <Link href="/admin/customers" className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-secondary/50 hover:text-primary transition-colors">
            <Users className="w-5 h-5" /> Customers
          </Link>
          <Link href="/admin/reviews" className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-secondary/50 hover:text-primary transition-colors">
            <MessageSquare className="w-5 h-5" /> Reviews
          </Link>
          <Link href="/admin/cms" className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-secondary/50 hover:text-primary transition-colors">
            <ImageIcon className="w-5 h-5" /> CMS
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-secondary/50 hover:text-primary transition-colors">
            <Settings className="w-5 h-5" /> Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto">
        {/* Admin Header */}
        <header className="h-16 bg-white border-b flex items-center justify-between px-6 sticky top-0 z-10">
          <h2 className="font-semibold text-lg">The Scarlet Thread</h2>
          <div className="flex items-center gap-4">
            <div className="text-sm font-medium">Super Admin</div>
            <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">SA</div>
          </div>
        </header>
        
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  )
}
