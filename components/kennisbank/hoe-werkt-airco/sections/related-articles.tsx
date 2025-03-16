import Link from "next/link"
import { Card } from "@/components/ui/card"

export function RelatedArticles() {
  return (
    <div className="mt-12 border-t pt-8">
      <h2 className="text-2xl font-bold mb-4">Gerelateerde artikelen</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        <Link href="/kennisbank/scop-seer-waarden">
          <Card className="h-full p-6 transition-colors hover:bg-muted/50">
            <h3 className="text-xl font-semibold mb-2">SCOP en SEER Waarden Uitgelegd</h3>
            <p className="text-muted-foreground">Alles wat u moet weten over de energie-efficiëntie van airconditioners</p>
          </Card>
        </Link>
        <Link href="/kennisbank/airco-installatie-maastricht">
          <Card className="h-full p-6 transition-colors hover:bg-muted/50">
            <h3 className="text-xl font-semibold mb-2">Airco Installatie in Maastricht</h3>
            <p className="text-muted-foreground">Lokale expertise voor airco installatie in Maastricht en omgeving</p>
          </Card>
        </Link>
      </div>
    </div>
  )
}
