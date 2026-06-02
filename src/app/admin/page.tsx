import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { IndianRupee, ShoppingBag, Users, TrendingUp } from "lucide-react"

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard Analytics</h1>
        <div className="text-sm text-muted-foreground bg-white px-3 py-1 rounded-full border">Last 30 Days</div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-border/50 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
            <IndianRupee className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹1,24,500</div>
            <p className="text-xs text-green-500 flex items-center mt-1">
              <TrendingUp className="w-3 h-3 mr-1" /> +14.5% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-border/50 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Orders</CardTitle>
            <ShoppingBag className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">342</div>
            <p className="text-xs text-green-500 flex items-center mt-1">
              <TrendingUp className="w-3 h-3 mr-1" /> +8.2% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="border-border/50 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Customers</CardTitle>
            <Users className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,204</div>
            <p className="text-xs text-green-500 flex items-center mt-1">
              <TrendingUp className="w-3 h-3 mr-1" /> +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="border-border/50 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Conversion Rate</CardTitle>
            <TrendingUp className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.24%</div>
            <p className="text-xs text-green-500 flex items-center mt-1">
              <TrendingUp className="w-3 h-3 mr-1" /> +1.1% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <Card className="lg:col-span-2 border-border/50 shadow-sm">
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                  <div>
                    <p className="font-medium">Order #ORD-{1000 + i}</p>
                    <p className="text-sm text-muted-foreground">Ayaan Sharma</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">₹1,499</p>
                    <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full mt-1 inline-block">Processing</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Products */}
        <Card className="border-border/50 shadow-sm">
          <CardHeader>
            <CardTitle>Top Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary rounded flex-shrink-0"></div>
                <div className="flex-1">
                  <p className="font-medium text-sm">Personalized Towel</p>
                  <p className="text-xs text-muted-foreground">124 sales</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary rounded flex-shrink-0"></div>
                <div className="flex-1">
                  <p className="font-medium text-sm">Mama Hoodie</p>
                  <p className="text-xs text-muted-foreground">98 sales</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary rounded flex-shrink-0"></div>
                <div className="flex-1">
                  <p className="font-medium text-sm">Baby Gift Set</p>
                  <p className="text-xs text-muted-foreground">76 sales</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
