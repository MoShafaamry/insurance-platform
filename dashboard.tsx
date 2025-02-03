import { LayoutDashboard, LineChart, Globe, Wallet, Box, LifeBuoy, Settings } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-black text-white">
      {/* Sidebar */}
      <div className="w-64 border-r border-gray-800 p-4">
        <div className="flex items-center gap-2 mb-8">
          <Box className="h-6 w-6" />
          <h1 className="text-xl font-semibold">Vaultify</h1>
        </div>

        <div className="space-y-1">
          <Button variant="ghost" className="w-full justify-start">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <LineChart className="mr-2 h-4 w-4" />
            Statistics & Income
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Globe className="mr-2 h-4 w-4" />
            Market
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Wallet className="mr-2 h-4 w-4" />
            Funding
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Box className="mr-2 h-4 w-4" />
            Yield Vaults
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <LifeBuoy className="mr-2 h-4 w-4" />
            Support
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-1 text-white">Overview</h2>
              <p className="text-gray-400">Aug 13, 2023 - Aug 18, 2023</p>
            </div>
            <Select defaultValue="ethereum">
              <SelectTrigger className="w-[180px] bg-transparent border-gray-800">
                <SelectValue placeholder="Select network" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ethereum">Ethereum Network</SelectItem>
                <SelectItem value="polygon">Polygon Network</SelectItem>
                <SelectItem value="optimism">Optimism Network</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Metrics */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
            <Card className="bg-black-900 border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-white mb-2">Your Balance</h3>
                <div className="text-2xl font-bold mb-2 text-white">$74,892</div>
                <div className="flex items-center gap-2 text-white">
                  <span>+$1,340</span>
                  <span className="text-red-500">-2.1%</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-black-900 border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-white mb-2">Your Deposits</h3>
                <div className="text-2xl font-bold mb-2 text-white">$54,892</div>
                <div className="flex items-center gap-2 text-white">
                  <span>+$1,340</span>
                  <span className="text-green-500">+13.2%</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-black-900 border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-white mb-2">Accrued Yield</h3>
                <div className="text-2xl font-bold mb-2 text-white">$20,892</div>
                <div className="flex items-center gap-2 text-white">
                  <span>+$1,340</span>
                  <span className="text-green-500">+1.2%</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Coverage Section */}
          <div className="mb-8">
            <Select>
              <SelectTrigger className="w-[200px] bg-grey-900 border-gray-800">
                <SelectValue placeholder="Select coverage" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Auto">Auto</SelectItem>
                <SelectItem value="Homeowners">Homeowners</SelectItem>
                <SelectItem value="Bond">Bond</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Coverage Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[...Array(8)].map((_, i) => (
              <Card key={i} className="bg-black-950 border-gray-800 h-40">
                <CardContent className="p-6">{/* Placeholder content */}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

