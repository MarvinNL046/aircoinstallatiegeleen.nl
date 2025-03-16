import { Loader2 } from "lucide-react"
import { Card } from "../components/ui/card"

export default function Loading() {
  return (
    <div className="space-y-12">
      {/* Hero Section Skeleton */}
      <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="h-12 w-3/4 animate-pulse rounded-lg bg-white/20" />
              <div className="h-8 w-1/2 animate-pulse rounded-lg bg-white/20" />
              <div className="h-12 w-48 animate-pulse rounded-lg bg-white/20" />
            </div>
            <div className="relative">
              <Card className="h-[400px] animate-pulse bg-white/20" />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section Skeleton */}
      <div className="container py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="h-64 animate-pulse bg-gray-100" />
          ))}
        </div>
      </div>

      {/* Loading Indicator */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/50 backdrop-blur-sm">
        <div className="rounded-lg bg-white p-6 shadow-xl">
          <div className="flex items-center space-x-4">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
            <p className="text-lg font-medium">Laden...</p>
          </div>
        </div>
      </div>
    </div>
  )
}
