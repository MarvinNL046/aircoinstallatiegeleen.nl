import { Metadata } from "next"
import { notFound } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Breadcrumb } from "@/components/navigation/breadcrumb"
import { RelatedArticles } from "@/components/sections/related-articles"
import { ArticleContent } from "@/components/kennisbank/article-content"
import articles from "@/data/kennisbank.json"

interface Props {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = articles.articles.find((a) => a.slug === params.slug)
  
  if (!article) {
    return {
      title: "Artikel niet gevonden | Airco Offerte Limburg",
      description: "Het opgevraagde artikel bestaat niet.",
    }
  }

  return {
    title: `${article.title} | Kennisbank | Airco Offerte Limburg`,
    description: article.description,
    openGraph: {
      title: `${article.title} | Kennisbank | Airco Offerte Limburg`,
      description: article.description,
      url: `https://aircooffertelimburg.nl/kennisbank/${params.slug}`,
      siteName: "Airco Offerte Limburg",
      locale: "nl_NL",
      type: "article",
    },
  }
}

export function generateStaticParams() {
  return articles.articles.map((article) => ({
    slug: article.slug,
  }))
}

export default function ArticlePage({ params }: Props) {
  const article = articles.articles.find((a) => a.slug === params.slug)

  if (!article) {
    notFound()
  }

  // Filter related articles by category, excluding current article
  const relatedArticles = articles.articles
    .filter(a => a.category === article.category && a.slug !== article.slug)
    .slice(0, 3)
    .map(({ title, description, slug }) => ({
      title,
      description,
      slug
    }))

  const breadcrumbItems = [
    { label: "Kennisbank", href: "/kennisbank" },
    { label: article.title, href: `/kennisbank/${article.slug}` }
  ]

  return (
    <div className="container py-12">
      <Breadcrumb items={breadcrumbItems} />

      <Card className="p-6 md:p-8">
        <h1 className="mb-4 text-3xl font-bold">{article.title}</h1>
        <div className="mb-6 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-blue-100 px-2.5 py-0.5 text-sm text-blue-600"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="prose max-w-none">
          <p className="text-lg text-muted-foreground">{article.description}</p>
          {article.slug === 'scop-seer-waarden' ? (
            <ArticleContent />
          ) : (
            <div className="mt-6">{article.content}</div>
          )}
        </div>
      </Card>

      {relatedArticles.length > 0 && (
        <RelatedArticles articles={relatedArticles} type="kennisbank" />
      )}
    </div>
  )
}