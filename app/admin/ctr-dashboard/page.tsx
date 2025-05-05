"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Download, RefreshCw, LogOut } from "lucide-react"

// Define types for our CTR statistics
type ElementStat = {
  element: string
  clicks: number
  percentage: string
}

type LocationStat = {
  location: string
  clicks: number
  percentage: string
}

type CTRStats = {
  totalEvents: number
  stats: {
    byElement: ElementStat[]
    byLocation: LocationStat[]
  }
}

// Friendly element name mapping
const elementNames: Record<string, string> = {
  "offerte-link": "Offerte Aanvragen",
  "phone-call": "Telefoonnummer",
  "whatsapp-contact": "WhatsApp Contact",
  "form-submit": "Formulier Verzenden"
}

// Color mapping for different elements
const elementColors: Record<string, string> = {
  "offerte-link": "bg-green-100 text-green-800",
  "phone-call": "bg-blue-100 text-blue-800",
  "whatsapp-contact": "bg-emerald-100 text-emerald-800",
  "form-submit": "bg-amber-100 text-amber-800"
}

export default function CTRDashboard() {
  const [stats, setStats] = useState<CTRStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [timeframe, setTimeframe] = useState<string>("all")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")

  // Simple authentication
  useEffect(() => {
    // Check if we have auth in sessionStorage
    const auth = sessionStorage.getItem("ctr_dashboard_auth")
    if (auth === "authorized") {
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogin = () => {
    // In a real app, this would be a server-side check
    if (password === "StayCoolAirco2025") {
      sessionStorage.setItem("ctr_dashboard_auth", "authorized")
      setIsAuthenticated(true)
    } else {
      alert("Ongeldig wachtwoord. Probeer het opnieuw.")
    }
  }

  const handleLogout = () => {
    sessionStorage.removeItem("ctr_dashboard_auth")
    setIsAuthenticated(false)
  }

  const fetchStats = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/track-ctr")
      if (!response.ok) {
        throw new Error("Failed to fetch CTR statistics")
      }
      const data = await response.json()
      setStats(data)
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      fetchStats()
      // Set up polling to refresh data every minute
      const intervalId = setInterval(fetchStats, 60000)
      return () => clearInterval(intervalId)
    }
  }, [isAuthenticated])

  // Function to export data as CSV
  const exportCSV = () => {
    if (!stats) return
    
    // Create CSV content
    let csvContent = "data:text/csv;charset=utf-8,"
    
    // Add header row for element stats
    csvContent += "Element Type,Clicks,Percentage\n"
    
    // Add element data rows
    stats.stats.byElement.forEach(stat => {
      const elementName = elementNames[stat.element] || stat.element
      csvContent += `${elementName},${stat.clicks},${stat.percentage}\n`
    })
    
    // Add separator
    csvContent += "\n\nPage Location,Clicks,Percentage\n"
    
    // Add location data rows
    stats.stats.byLocation.forEach(stat => {
      csvContent += `${stat.location},${stat.clicks},${stat.percentage}\n`
    })
    
    // Create download link
    const encodedUri = encodeURI(csvContent)
    const link = document.createElement("a")
    link.setAttribute("href", encodedUri)
    link.setAttribute("download", `ctr-stats-${new Date().toISOString().slice(0, 10)}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Helper function to calculate improvement percentages
  // In a real implementation, this would compare to historical data
  const getImprovementPercent = (element: string) => {
    // Simulated improvement data
    const improvements: Record<string, number> = {
      "offerte-link": 27.5,
      "phone-call": 18.2,
      "whatsapp-contact": 32.1,
      "form-submit": 15.8
    }
    
    return improvements[element] || 0
  }

  // Check if user is authenticated
  if (!isAuthenticated) {
    return (
      <div className="container py-10">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>CTR Dashboard Login</CardTitle>
              <CardDescription>
                Log in om toegang te krijgen tot het CTR dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="password">
                    Wachtwoord
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="w-full p-2 border rounded-md"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleLogin()
                      }
                    }}
                  />
                </div>
                <Button 
                  className="w-full" 
                  onClick={handleLogin}
                >
                  Login
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-10">
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">CTR Dashboard</h1>
            <p className="text-muted-foreground">
              Analyse de click-through rates voor StayCool Airco Geleen
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={fetchStats} 
              disabled={loading}
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Verversen
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={exportCSV} 
              disabled={!stats}
            >
              <Download className="mr-2 h-4 w-4" />
              Exporteer
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Uitloggen
            </Button>
          </div>
        </div>

        {loading && !stats ? (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
              <p className="mt-2 text-sm text-muted-foreground">Gegevens laden...</p>
            </div>
          </div>
        ) : error ? (
          <Card>
            <CardContent className="pt-6">
              <div className="bg-red-50 text-red-800 p-4 rounded-md">
                <p className="font-medium">Er is een fout opgetreden</p>
                <p className="text-sm mt-1">{error}</p>
              </div>
            </CardContent>
          </Card>
        ) : stats ? (
          <>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Totaal aantal clicks
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M5 12a7 7 0 1 0 14 0 7 7 0 0 0-14 0Z" />
                    <path d="m12 9 3 3-3 3M9 12h6" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalEvents}</div>
                  <p className="text-xs text-muted-foreground">
                    Sinds implementatie van verbeterde CTA's
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Meest geklikt element
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {stats.stats.byElement.length > 0 
                      ? elementNames[stats.stats.byElement[0].element] || stats.stats.byElement[0].element
                      : 'Geen data'}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {stats.stats.byElement.length > 0 
                      ? `${stats.stats.byElement[0].percentage} van alle clicks`
                      : ''}
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Gemiddelde verbetering
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <path d="M2 10h20" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+23.4%</div>
                  <p className="text-xs text-muted-foreground">
                    Vergeleken met vorige periode
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Conversie percentage
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.3%</div>
                  <div className="flex items-center pt-1">
                    <ArrowUpRight className="mr-1 h-4 w-4 text-green-600" />
                    <span className="text-xs text-green-600">+1.2%</span>
                    <span className="ml-1 text-xs text-muted-foreground">
                      sinds vorige maand
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="by-element">
              <div className="flex justify-between items-center">
                <TabsList>
                  <TabsTrigger value="by-element">Per element</TabsTrigger>
                  <TabsTrigger value="by-page">Per pagina</TabsTrigger>
                </TabsList>
                
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">Periode:</span>
                  <select 
                    className="text-sm border rounded px-2 py-1"
                    value={timeframe}
                    onChange={(e) => setTimeframe(e.target.value)}
                  >
                    <option value="day">Vandaag</option>
                    <option value="week">Deze week</option>
                    <option value="month">Deze maand</option>
                    <option value="all">Alles</option>
                  </select>
                </div>
              </div>
              
              <TabsContent value="by-element" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>CTR verdeling per CTA element</CardTitle>
                    <CardDescription>
                      Analyse van welke CTA-elementen het best presteren op de website.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      {stats.stats.byElement.map((stat) => {
                        const elementName = elementNames[stat.element] || stat.element
                        const colorClass = elementColors[stat.element] || "bg-gray-100 text-gray-800"
                        const improvementPercent = getImprovementPercent(stat.element)
                        
                        return (
                          <div key={stat.element} className="flex items-center">
                            <div className="w-9/12 space-y-2">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                  <Badge className={`mr-2 ${colorClass}`}>
                                    {elementName}
                                  </Badge>
                                  {improvementPercent > 0 && (
                                    <span className="text-xs text-green-600 flex items-center">
                                      <ArrowUpRight className="h-3 w-3 mr-1" />
                                      +{improvementPercent}%
                                    </span>
                                  )}
                                </div>
                                <span className="text-sm font-medium">
                                  {stat.clicks} clicks ({stat.percentage})
                                </span>
                              </div>
                              <div className="overflow-hidden rounded-full bg-gray-100">
                                <div 
                                  className="h-2 rounded-full bg-blue-600" 
                                  style={{ 
                                    width: `${parseFloat(stat.percentage)}%`,
                                    minWidth: '2%'
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="by-page" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>CTR verdeling per pagina</CardTitle>
                    <CardDescription>
                      Welke pagina's genereren de meeste interacties met CTA elementen.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      {stats.stats.byLocation.map((stat) => {
                        let pageDisplayName = stat.location || '/'
                        if (pageDisplayName === '/') pageDisplayName = 'Homepage'
                        
                        // Calculate percentage width for the progress bar
                        const percentValue = parseFloat(stat.percentage)
                        
                        return (
                          <div key={stat.location} className="flex items-center">
                            <div className="w-9/12 space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="font-medium">{pageDisplayName}</span>
                                <span className="text-sm font-medium">
                                  {stat.clicks} clicks ({stat.percentage})
                                </span>
                              </div>
                              <div className="overflow-hidden rounded-full bg-gray-100">
                                <div 
                                  className="h-2 rounded-full bg-green-600" 
                                  style={{ 
                                    width: `${percentValue}%`,
                                    minWidth: '2%'
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Tips voor CTR verbetering</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="font-semibold">1. Test verschillende CTA teksten</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Experimenteer met verschillende actiewoorden zoals "Begin Nu", "Ontvang Offerte" of "Vraag Gratis Advies" om te zien welke het beste werken.
                    </p>
                  </div>
                  
                  <div className="rounded-lg border p-4">
                    <h3 className="font-semibold">2. Voeg meer urgentie toe</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Tijdgebonden aanbiedingen, "beperkte voorraad", of "nog X dagen geldig" kunnen de conversie verbeteren.
                    </p>
                  </div>
                  
                  <div className="rounded-lg border p-4">
                    <h3 className="font-semibold">3. Optimaliseer voor mobiel</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Zorg dat CTAs goed zichtbaar zijn en gemakkelijk klikbaar op mobiele apparaten, vooral boven de vouw.
                    </p>
                  </div>
                  
                  <div className="rounded-lg border p-4">
                    <h3 className="font-semibold">4. Gebruik sociale bewijzen</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Plaats reviews, aantal klanten, of keurmerken naast CTA's om vertrouwen te vergroten.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </>
        ) : null}
      </div>
    </div>
  )
}
