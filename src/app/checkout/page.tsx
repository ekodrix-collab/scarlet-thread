"use client"

import { useState } from "react"
import { useCartStore } from "@/store/useCartStore"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle2 } from "lucide-react"

export default function CheckoutPage() {
  const { getTotal, items } = useCartStore()
  const [step, setStep] = useState(1) // 1: Shipping, 2: Payment, 3: Success

  const handleNext = () => setStep(step + 1)

  if (step === 3) {
    return (
      <div className="container mx-auto px-4 py-32 text-center max-w-lg">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
          <CheckCircle2 className="w-12 h-12" />
        </div>
        <h1 className="text-3xl font-heading font-bold mb-4">Order Placed Successfully!</h1>
        <p className="text-muted-foreground mb-8">
          Thank you for choosing The Scarlet Thread. We've received your order and will start crafting your personalized gifts soon.
        </p>
        <a
          href="/"
          className={cn(
            buttonVariants({ variant: "default", size: "lg" }),
            "rounded-full px-8"
          )}
        >
          Continue Shopping
        </a>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-heading font-bold mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          {/* Progress Steps */}
          <div className="flex items-center mb-8 text-sm font-medium">
            <div className={`flex items-center ${step >= 1 ? 'text-primary' : 'text-muted-foreground'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 mr-2 ${step >= 1 ? 'border-primary bg-primary/10' : 'border-muted'}`}>1</div>
              Shipping
            </div>
            <div className={`flex-1 h-px mx-4 ${step >= 2 ? 'bg-primary' : 'bg-border'}`}></div>
            <div className={`flex items-center ${step >= 2 ? 'text-primary' : 'text-muted-foreground'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 mr-2 ${step >= 2 ? 'border-primary bg-primary/10' : 'border-muted'}`}>2</div>
              Payment
            </div>
          </div>

          {step === 1 && (
            <div className="bg-white border rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-xl font-bold mb-6">Shipping Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>First Name</Label>
                  <Input placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label>Last Name</Label>
                  <Input placeholder="Doe" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label>Address</Label>
                  <Input placeholder="123 Main St, Apt 4B" />
                </div>
                <div className="space-y-2">
                  <Label>City</Label>
                  <Input placeholder="Mumbai" />
                </div>
                <div className="space-y-2">
                  <Label>Postal Code</Label>
                  <Input placeholder="400001" />
                </div>
              </div>
              <Button onClick={handleNext} size="lg" className="mt-8 rounded-full w-full md:w-auto px-8">
                Continue to Payment
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="bg-white border rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-xl font-bold mb-6">Payment Method</h2>
              <p className="text-sm text-muted-foreground mb-6">
                Integration with Razorpay will be initialized here to process the payment securely.
              </p>
              <div className="border rounded-xl p-4 flex items-center gap-4 bg-secondary/30 mb-8 cursor-pointer border-primary">
                <div className="w-4 h-4 rounded-full border-[5px] border-primary"></div>
                <span className="font-medium">Pay via Razorpay (UPI, Cards, NetBanking)</span>
              </div>
              
              <div className="flex gap-4">
                <Button variant="outline" onClick={() => setStep(1)} size="lg" className="rounded-full px-8">
                  Back
                </Button>
                <Button onClick={handleNext} size="lg" className="rounded-full px-8">
                  Pay ₹{getTotal()} Securely
                </Button>
              </div>
            </div>
          )}
        </div>

        <div className="lg:col-span-1">
          <div className="border rounded-2xl p-6 bg-white shadow-sm sticky top-24">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto pr-2">
              {items.map(item => (
                <div key={item.id} className="flex gap-4 text-sm">
                  <div className="w-16 h-16 bg-secondary rounded-md overflow-hidden shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium line-clamp-2">{item.name}</h4>
                    <p className="text-muted-foreground">Qty: {item.quantity}</p>
                    <p className="font-bold">₹{item.price * item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="space-y-4 text-sm pt-4 border-t">
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
          </div>
        </div>
      </div>
    </div>
  )
}
