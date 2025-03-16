import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface RelatedArticle {
  title: string
  description: string
  slug: string
}

interface RelatedArticlesProps {
  articles: RelatedArticle[]
  type: "blog" | "kennisbank"
}

export function RelatedArticles({ articles, type }: RelatedArticlesProps) {
  return (
    <section className="mt-12 border-t pt-12">
      <h2 className="mb-6 text-2xl font-bold">Gerelateerde Artikelen</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Link key={article.slug} href={`/${type}/${article.slug}`}>
            <Card className="h-full transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {article.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}