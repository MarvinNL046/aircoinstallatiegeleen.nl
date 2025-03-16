import { Metadata } from "next"
import { ArticleContent } from "@/components/kennisbank/article-content"
import { Breadcrumb } from "@/components/navigation/breadcrumb"

export const metadata: Metadata = {
  title: "SCOP en SEER Waarden Uitgelegd | Airco Offerte Limburg",
  description: "Alles wat u moet weten over de energie-efficiëntie van airconditioners",
}

export default function ScopSeerPage() {
  const breadcrumbItems = [
    { label: "Kennisbank", href: "/kennisbank" },
    { label: "SCOP en SEER Waarden", href: "/kennisbank/scop-seer-waarden" }
  ]

  return (
    <div className="container py-12">
      <Breadcrumb items={breadcrumbItems} />

      <div className="flex gap-2 mb-4">
        <span className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-sm">
          energie
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-sm">
          efficiëntie
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-sm">
          technologie
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-sm">
          duurzaamheid
        </span>
      </div>

      <h1 className="text-4xl font-bold mb-6">SCOP en SEER Waarden Uitgelegd</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Alles wat u moet weten over de energie-efficiëntie van airconditioners
      </p>

      <ArticleContent />
    </div>
  )
}