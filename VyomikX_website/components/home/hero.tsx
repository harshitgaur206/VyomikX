import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { site } from "@/lib/site-data"
import { Button } from "@/components/ui/button"
import { TechScene } from "@/components/home/tech-scene"

const taglineWords = ["Learn.", "Build.", "Innovate."]

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient color glow */}
      <div className="aurora pointer-events-none absolute inset-0 -z-10 opacity-70 dark:opacity-90" />
      {/* Grid + dot texture */}
      <div className="grid-bg pointer-events-none absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />
      <div className="dot-bg pointer-events-none absolute inset-0 -z-10 opacity-50 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:py-28 lg:px-8">
        {/* Left: identity */}
        <div className="animate-fade-up text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Robotics &amp; Innovation Team &middot; ZHCET, AMU
          </div>

          <h1 className="mt-6 font-display text-6xl font-extrabold leading-[0.95] tracking-tight text-balance sm:text-7xl lg:text-[6.5rem]">
            <span className="brand-gradient-text brand-shimmer text-glow">{site.name}</span>
          </h1>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 lg:justify-start">
            {taglineWords.map((word) => (
              <span
                key={word}
                className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
              >
                {word}
              </span>
            ))}
          </div>

          <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground lg:mx-0">
            {site.subtitle}
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start lg:justify-start">
            <Button asChild size="lg" className="w-full rounded-full sm:w-auto">
              <Link href="/projects">
                Explore Our Projects
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full rounded-full sm:w-auto">
              <Link href="/contact">Build With Us</Link>
            </Button>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:max-w-lg">
            {site.stats.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <dt className="font-display text-3xl font-bold text-foreground">{stat.value}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right: animated tech scene */}
        <div className="relative animate-float-slow">
          <TechScene />
        </div>
      </div>
    </section>
  )
}
