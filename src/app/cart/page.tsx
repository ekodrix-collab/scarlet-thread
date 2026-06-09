"use client"

import { useCartStore } from "@/store/useCartStore"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react"
import Link from "next/link"

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotal } = useCartStore()

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-32 flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mb-6 text-primary">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <h1 className="text-3xl font-heading font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-muted-foreground mb-8">Looks like you haven't added any personalized gifts yet.</p>
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "default", size: "lg" }),
            "rounded-full px-8"
          )}
        >
          Start Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-heading font-bold mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {items.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row gap-6 border rounded-2xl p-4 md:p-6 bg-white shadow-sm">
              <div className="w-full sm:w-32 h-32 bg-secondary rounded-xl overflow-hidden shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="flex-1 flex flex-col">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="font-bold text-primary mt-1">₹{item.price}</p>
                  </div>
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="p-2 text-muted-foreground hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
                
                {/* Personalization Details */}
                {item.personalization && (
                  <div className="bg-secondary/30 rounded-lg p-3 mt-3 text-sm border border-border/50">
                    <span className="font-semibold block mb-1">Personalization Details:</span>
                    {item.personalization.name && <div>Name: <span className="text-muted-foreground">{item.personalization.name}</span></div>}
                    {item.personalization.customText && <div>Text: <span className="text-muted-foreground">{item.personalization.customText}</span></div>}
                    {item.personalization.fontStyle && <div>Font: <span className="text-muted-foreground">{item.personalization.fontStyle}</span></div>}
                  </div>
                )}
                
                <div className="flex justify-between items-end mt-auto pt-4">
                  <div className="flex items-center border rounded-full overflow-hidden">
                    <button 
                      className="px-3 py-1 hover:bg-secondary transition-colors"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-1 font-medium border-x min-w-[3rem] text-center">{item.quantity}</span>
                    <button 
                      className="px-3 py-1 hover:bg-secondary transition-colors"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="font-bold">
                    Subtotal: ₹{item.price * item.quantity}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="lg:col-span-1">
          <div className="border rounded-2xl p-6 bg-white shadow-sm sticky top-24">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>
            
            <div className="space-y-4 text-sm mb-6">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">₹{getTotal()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className="font-medium text-green-600">Free</span>
              </div>
              <div className="border-t pt-4 flex justify-between items-center text-lg">
                <span className="font-bold">Total</span>
                <span className="font-bold text-primary">₹{getTotal()}</span>
              </div>
            </div>
            
            <Link
              href="/checkout"
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "w-full rounded-full h-12 text-base shadow-md"
              )}
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
