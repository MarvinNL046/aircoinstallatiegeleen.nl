import { Metadata } from "next"
import { notFound } from "next/navigation"
import { Breadcrumb } from "@/components/navigation/breadcrumb"
import { RelatedArticles } from "@/components/sections/related-articles"
import { blogPosts } from "@/data/blog-posts"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return {
      title: "Artikel niet gevonden | Airco Offerte Limburg",
      description: "Het opgevraagde artikel kon niet worden gevonden.",
    }
  }

  return {
    title: `${post.title} | Airco Offerte Limburg`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["Airco Offerte Limburg"],
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  // Get related posts (excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.slug !== post.slug)
    .slice(0, 3)
    .map(({ title, excerpt, slug }) => ({
      title,
      description: excerpt,
      slug
    }))

  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: post.title, href: `/blog/${post.slug}` }
  ]

  return (
    <div className="container py-12">
      <Breadcrumb items={breadcrumbItems} />

      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="text-muted-foreground mb-8">
          {new Date(post.date).toLocaleDateString("nl-NL", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>

      {relatedPosts.length > 0 && (
        <RelatedArticles articles={relatedPosts} type="blog" />
      )}
    </div>
  )
}