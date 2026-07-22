import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, CheckCircle2, Target, Trophy } from "lucide-react"
import { projects } from "@/lib/site-data"
import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return { title: "Project Not Found" }
  return {
    title: project.title,
    description: project.summary,
  }
}

const statusStyles = {
  Completed: "border-primary/40 bg-primary/10 text-primary",
  "In Progress": "border-accent/40 bg-accent/10 text-accent",
  Prototype: "border-border bg-secondary text-muted-foreground",
} as const

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3)

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            All Projects
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className={cn(
                    "rounded-full border px-3 py-1 text-xs font-medium",
                    statusStyles[project.status],
                  )}
                >
                  {project.status}
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {project.category} &middot; {project.year}
                </span>
              </div>
              <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl">
                {project.title}
              </h1>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                {project.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="glow-ring relative aspect-[16/10] overflow-hidden rounded-2xl border border-border">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="space-y-12 lg:col-span-2">
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">Overview</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{project.overview}</p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">Highlights</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm leading-relaxed text-foreground">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card/60 p-6">
                <Target className="h-6 w-6 text-accent" />
                <h3 className="mt-3 font-display text-lg font-semibold text-foreground">
                  The Challenge
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.challenge}
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card/60 p-6">
                <Trophy className="h-6 w-6 text-primary" />
                <h3 className="mt-3 font-display text-lg font-semibold text-foreground">
                  The Outcome
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.outcome}
                </p>
              </div>
            </div>

            {project.gallery.length > 0 && (
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">Gallery</h2>
                <div className="mt-4 grid gap-4">
                  {project.gallery.map((g) => (
                    <figure
                      key={g.src}
                      className="overflow-hidden rounded-2xl border border-border bg-card"
                    >
                      <div className="relative aspect-[16/9]">
                        <Image
                          src={g.src || "/placeholder.svg"}
                          alt={g.caption}
                          fill
                          sizes="(max-width: 1024px) 100vw, 66vw"
                          className="object-cover"
                        />
                      </div>
                      <figcaption className="px-4 py-3 text-sm text-muted-foreground">
                        {g.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-border bg-card p-6">
              <h2 className="font-display text-lg font-semibold text-foreground">Specifications</h2>
              <dl className="mt-4 divide-y divide-border">
                {project.specs.map((spec) => (
                  <div key={spec.label} className="flex items-center justify-between gap-4 py-2.5">
                    <dt className="text-sm text-muted-foreground">{spec.label}</dt>
                    <dd className="text-right text-sm font-medium text-foreground">{spec.value}</dd>
                  </div>
                ))}
              </dl>
              <Button asChild className="mt-6 w-full rounded-full">
                <Link href="/contact">
                  Build one with us
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-foreground">More Projects</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
