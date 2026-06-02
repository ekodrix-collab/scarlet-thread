"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Package, User, Heart, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AccountPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-heading font-bold mb-8">My Account</h1>
      
      <Tabs defaultValue="orders" className="flex flex-col md:flex-row gap-8">
        <TabsList className="flex flex-col h-auto w-full md:w-64 bg-transparent gap-2 items-start justify-start p-0">
          <TabsTrigger value="orders" className="w-full justify-start py-3 px-4 data-[state=active]:bg-secondary data-[state=active]:text-primary border border-transparent data-[state=active]:border-border rounded-xl">
            <Package className="w-4 h-4 mr-3" /> Orders
          </TabsTrigger>
          <TabsTrigger value="profile" className="w-full justify-start py-3 px-4 data-[state=active]:bg-secondary data-[state=active]:text-primary border border-transparent data-[state=active]:border-border rounded-xl">
            <User className="w-4 h-4 mr-3" /> Profile
          </TabsTrigger>
          <TabsTrigger value="wishlist" className="w-full justify-start py-3 px-4 data-[state=active]:bg-secondary data-[state=active]:text-primary border border-transparent data-[state=active]:border-border rounded-xl">
            <Heart className="w-4 h-4 mr-3" /> Wishlist
          </TabsTrigger>
          <TabsTrigger value="addresses" className="w-full justify-start py-3 px-4 data-[state=active]:bg-secondary data-[state=active]:text-primary border border-transparent data-[state=active]:border-border rounded-xl">
            <MapPin className="w-4 h-4 mr-3" /> Addresses
          </TabsTrigger>
          
          <div className="mt-8 pt-4 border-t w-full">
            <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50">
              Logout
            </Button>
          </div>
        </TabsList>
        
        <div className="flex-1">
          <TabsContent value="orders" className="m-0">
            <Card className="shadow-sm border-border">
              <CardHeader>
                <CardTitle>Order History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Package className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                  <h3 className="text-lg font-medium mb-2">No orders yet</h3>
                  <p className="text-muted-foreground">When you buy a gift, your order will appear here.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="profile" className="m-0">
            <Card className="shadow-sm border-border">
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-muted-foreground block mb-1">Full Name</label>
                    <div className="font-medium">John Doe</div>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground block mb-1">Email</label>
                    <div className="font-medium">john.doe@example.com</div>
                  </div>
                  <Button className="mt-4">Edit Profile</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="wishlist" className="m-0">
            <Card className="shadow-sm border-border">
              <CardHeader>
                <CardTitle>My Wishlist</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Heart className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                  <h3 className="text-lg font-medium mb-2">Your wishlist is empty</h3>
                  <p className="text-muted-foreground">Save items you love to view them later.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="addresses" className="m-0">
            <Card className="shadow-sm border-border">
              <CardHeader>
                <CardTitle>Saved Addresses</CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full py-8 border-dashed border-2 mb-4">
                  + Add New Address
                </Button>
                <div className="border rounded-xl p-4 bg-secondary/20">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-bold bg-white px-2 py-1 rounded text-xs">Home</span>
                    <div className="flex gap-2 text-sm">
                      <button className="text-primary hover:underline">Edit</button>
                      <button className="text-red-500 hover:underline">Delete</button>
                    </div>
                  </div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    123 Main St, Apt 4B<br/>
                    Mumbai, Maharashtra 400001<br/>
                    India
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}
