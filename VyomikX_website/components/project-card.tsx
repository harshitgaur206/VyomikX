import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import type { Project } from "@/lib/site-data"
import { cn } from "@/lib/utils"

const statusStyles: Record<Project["status"], string> = {
  Completed: "border-primary/40 bg-primary/10 text-primary",
  "In Progress": "border-accent/40 bg-accent/10 text-accent",
  Prototype: "border-border bg-secondary text-muted-foreground",
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/50"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
        <span
          className={cn(
            "absolute right-3 top-3 rounded-full border px-2.5 py-1 text-[11px] font-medium backdrop-blur",
            statusStyles[project.status],
          )}
        >
          {project.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <span className="text-primary">{project.category}</span>
          <span aria-hidden>&middot;</span>
          <span>{project.year}</span>
        </div>
        <h3 className="mt-2 flex items-start justify-between gap-2 font-display text-lg font-semibold leading-snug text-foreground">
          {project.title}
          <ArrowUpRight className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
        </h3>
        <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
          {project.summary}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 3).map((t) => (
            <span
              key={t}
              className="rounded-md border border-border bg-secondary/60 px-2 py-0.5 text-[11px] text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
