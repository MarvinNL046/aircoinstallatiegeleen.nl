import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Play } from "lucide-react"
import { blurDataUrl } from "@/lib/image-blur"

const videos = [
  {
    title: "Zo Werkt een Airco",
    description: "Een duidelijke uitleg over de werking van een airconditioner",
    thumbnail: "https://images.unsplash.com/photo-1631545804015-0ba82cc4eec3?auto=format&fit=crop&q=80&w=800",
    duration: "3:45"
  },
  {
    title: "Onderhoudstips",
    description: "Praktische tips voor het onderhoud van uw airconditioning",
    thumbnail: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800",
    duration: "4:20"
  },
  {
    title: "Installatieproces",
    description: "Bekijk hoe wij een airco professioneel installeren",
    thumbnail: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800",
    duration: "5:15"
  }
]

export function VideoContentSection() {
  return (
    <section className="bg-muted/50 py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Video&apos;s &amp; Tutorials</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Bekijk onze informatieve video&apos;s over airconditioning
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <Card key={video.title} className="overflow-hidden">
              <div className="group relative">
                <div className="relative aspect-video">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL={blurDataUrl}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity group-hover:bg-black/40">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                  <div className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-1 text-xs text-white">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="mb-2 text-lg font-semibold">{video.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {video.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}