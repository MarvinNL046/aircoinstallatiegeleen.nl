import { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Kennisbank | StayCool Airco Maastricht",
  description: "Ontdek alles wat u moet weten over airconditioning en klimaatbeheersing in onze uitgebreide kennisbank. Professioneel advies van StayCool Airco.",
}

const articles = [
  {
    title: "Alles over Klimaatbeheersing",
    description: "Een complete gids over moderne klimaatbeheersing voor uw woning of bedrijf",
    slug: "klimaatbeheersing",
    tags: ["klimaat", "comfort", "technologie"]
  },
  {
    title: "SCOP en SEER Waarden Uitgelegd",
    description: "Alles wat u moet weten over de energie-efficiëntie van airconditioners",
    slug: "scop-seer-waarden",
    tags: ["energie", "efficiëntie", "technologie", "duurzaamheid"]
  },
  {
    title: "Energiebesparende Tips voor uw Airconditioning",
    description: "Praktische tips om uw airconditioning energiezuinig te gebruiken",
    slug: "energiebesparing",
    tags: ["energie", "besparing", "kosten"]
  },
  {
    title: "Onderhoudstips voor Optimale Prestaties",
    description: "Essentiële tips voor het onderhoud van uw airconditioning",
    slug: "onderhoud-tips",
    tags: ["onderhoud", "prestaties", "levensduur"]
  },
  {
    title: "Hoe Werkt een Airconditioning?",
    description: "Een duidelijke uitleg over de werking van moderne airconditioningsystemen",
    slug: "hoe-werkt-airco",
    tags: ["technologie", "basis", "werking"]
  },
  {
    title: "Verwarmen met Airco: Voordelen en Ervaringen",
    description: "Waarom verwarmen met een airco vaak efficiënter is dan traditionele verwarmingssystemen",
    slug: "verwarmen-met-airco",
    tags: ["verwarming", "efficiëntie", "kosten", "duurzaamheid"]
  },
  {
    title: "Airco Luchtfilter Onderhoud",
    description: "Het belang van regelmatig onderhoud van uw airco luchtfilters voor gezonde lucht",
    slug: "airco-luchtfilter-onderhoud",
    tags: ["onderhoud", "gezondheid", "luchtkwaliteit"]
  },
  {
    title: "Airco Installatie in Maastricht",
    description: "Alles wat u moet weten over het installeren van een airco in Maastricht",
    slug: "airco-installatie-maastricht",
    tags: ["maastricht", "installatie", "lokaal"]
  },
  {
    title: "Soorten Airconditioning Systemen",
    description: "Een overzicht van verschillende airco-systemen en welke het beste bij uw situatie past",
    slug: "soorten-airco",
    tags: ["systemen", "vergelijking", "keuze"]
  },
  {
    title: "Koudemiddelen en Milieu-impact",
    description: "Informatie over verschillende koudemiddelen en hun impact op het milieu",
    slug: "koudemiddelen",
    tags: ["milieu", "duurzaamheid", "techniek"]
  },
  {
    title: "Veelvoorkomende Airco Problemen en Oplossingen",
    description: "Praktische gids voor het oplossen van veelvoorkomende problemen met uw airconditioning",
    slug: "veelvoorkomende-problemen",
    tags: ["problemen", "oplossingen", "zelf doen"]
  },
  {
    title: "Airco Storingscodes Uitgelegd",
    description: "Een overzicht van veelvoorkomende storingscodes en wat ze betekenen",
    slug: "storingscode-gids",
    tags: ["storing", "codes", "diagnose"]
  }
]

export default function KennisbankPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-6">StayCool Airco Kennisbank</h1>
      <p className="text-xl text-muted-foreground mb-6">
        Ontdek alles wat u moet weten over airconditioning en klimaatbeheersing
      </p>
      <p className="text-muted-foreground mb-12">
        Bij StayCool Airco delen we graag onze kennis en expertise. In onze uitgebreide kennisbank vindt u artikelen over verschillende aspecten van airconditioning, van technische informatie tot praktische tips. Voor nog meer informatie kunt u ook onze <a href="https://staycoolairco.nl/kennisbank" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">hoofdkennisbank</a> bezoeken.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Link key={article.slug} href={`/kennisbank/${article.slug}`}>
            <Card className="h-full p-6 transition-colors hover:bg-muted/50">
              <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
              <p className="text-muted-foreground mb-4">{article.description}</p>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs text-blue-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
