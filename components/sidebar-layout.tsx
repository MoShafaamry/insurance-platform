'use client'

import Link from 'next/link'
import { LayoutDashboard, LineChart, Globe, Wallet, Box, LifeBuoy, Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PropsWithChildren } from 'react'

export default function SidebarLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex h-screen bg-black text-white">
      <div className="w-64 border-r border-gray-800 p-4">
        <div className="flex items-center gap-2 mb-8">
          <Box className="h-6 w-6" />
          <h1 className="text-xl font-semibold">Vaultify</h1>
        </div>
        <div className="space-y-1">
          <Button asChild variant="ghost" className="w-full justify-start">
            <Link href="/">
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Dashboard
            </Link>
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
          <Button asChild variant="ghost" className="w-full justify-start">
            <Link href="/policies">
              <Box className="mr-2 h-4 w-4" />
              Policies
            </Link>
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
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  )
}
