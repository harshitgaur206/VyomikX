"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Cpu } from "lucide-react"
import { projects } from "@/lib/site-data"

const showcase = projects.slice(0, 4)

export function TechScene() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % showcase.length)
    }, 3200)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative mx-auto aspect-square w-full max-w-lg">
      {/* Soft glow behind the disc */}
      <div className="pointer-events-none absolute inset-[8%] rounded-full bg-primary/15 blur-3xl" />

      {/* Orbit rings */}
      <div className="absolute inset-0 animate-spin-slow rounded-full border border-primary/25" />
      <div className="absolute inset-[8%] animate-spin-slower rounded-full border border-accent/25" />
      <div className="absolute inset-[15%] animate-spin-slow rounded-full border border-primary/15" />

      {/* Orbiting nodes */}
      <div className="absolute inset-0 animate-spin-slow">
        <span className="absolute left-1/2 top-0 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_18px_var(--color-primary)]" />
      </div>
      <div className="absolute inset-[8%] animate-spin-slower">
        <span className="absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_18px_var(--color-accent)]" />
      </div>

      {/* Center showcase panel — enlarged */}
      <div className="absolute inset-[19%] overflow-hidden rounded-full border-2 border-primary/30 bg-card glow-ring">
        {showcase.map((p, i) => (
          <Image
            key={p.slug}
            src={p.image || "/placeholder.svg"}
            alt={p.title}
            fill
            sizes="360px"
            className={`object-cover transition-opacity duration-1000 ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
            priority={i === 0}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-transparent to-transparent" />
      </div>

      {/* Floating badge */}
      <div className="absolute -bottom-1 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-border bg-background/85 px-4 py-2 backdrop-blur-md">
        <Cpu className="h-4 w-4 text-primary" />
        <span className="font-mono text-xs text-foreground">{showcase[active].title}</span>
      </div>

      {/* Corner accents */}
      <div className="animate-pulse-orbit absolute right-[6%] top-[14%] h-2 w-2 rounded-full bg-accent" />
      <div className="animate-pulse-orbit absolute bottom-[18%] left-[8%] h-1.5 w-1.5 rounded-full bg-primary" />
    </div>
  )
}
