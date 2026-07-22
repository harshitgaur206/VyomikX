import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Cpu, GraduationCap, Rocket, Wrench } from "lucide-react"
import { projects, values, futureVision, team } from "@/lib/site-data"
import { SectionHeading } from "@/components/section-heading"
import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"

const valueIcons = [Wrench, Cpu, GraduationCap, Rocket]

export function AboutPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-primary/10 blur-3xl" />
          <div className="grid grid-cols-2 gap-4">
            <figure className="group relative mt-8 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border transition-transform duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/20">
              <Image
                src="/outreach/students-laptop.webp"
                alt="Students learning robotics on a laptop"
                fill
                sizes="(max-width: 1024px) 45vw, 240px"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </figure>
            <figure className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border transition-transform duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-accent/20">
              <Image
                src="/outreach/students-outdoor.webp"
                alt="Students collaborating outdoors with a laptop"
                fill
                sizes="(max-width: 1024px) 45vw, 240px"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-accent/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </figure>
            <figure className="group relative col-span-2 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border transition-transform duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/20">
              <Image
                src="/projects/robotic-arm.png"
                alt="A robotic arm built by the team"
                fill
                sizes="(max-width: 1024px) 90vw, 480px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <figcaption className="absolute bottom-3 left-4 font-mono text-xs text-foreground/90">
                Robotic Arm &middot; built in-house
              </figcaption>
            </figure>
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="Who We Are"
            title="A collective of student builders, tinkerers, and dreamers"
            description="VyomikX brings together curious minds from every discipline to design, build, and deploy real robotic systems. We turn ideas into working machines and share the journey with the community around us."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {values.map((value, i) => {
              const Icon = valueIcons[i % valueIcons.length]
              return (
                <div key={value.title} className="rounded-xl border border-border bg-card/60 p-5">
                  <Icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-3 font-display text-base font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
          <Button asChild variant="outline" className="mt-8 rounded-full">
            <Link href="/about">
              More About Us
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export function FeaturedProjects() {
  const featured = projects.slice(0, 3)
  return (
    <section className="border-y border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Our Work"
            title="Featured Projects"
            description="From autonomous rovers to gesture-controlled arms — a look at what our members have engineered."
          />
          <Button asChild variant="outline" className="shrink-0 rounded-full">
            <Link href="/projects">
              View All
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function FuturePreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Where We're Headed"
        title="Building toward an ambitious future"
        description="Our roadmap pushes from today's builds toward research-grade platforms and wider community impact."
        align="center"
        className="mx-auto"
      />
      <div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-3">
        {futureVision.slice(0, 3).map((item) => (
          <div key={item.title} className="rounded-2xl border border-border bg-card/60 p-6">
            <span className="font-mono text-xs uppercase tracking-wider text-accent">
              {item.timeframe}
            </span>
            <h3 className="mt-3 font-display text-lg font-semibold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Button asChild variant="outline" className="rounded-full">
          <Link href="/future">
            See the Full Vision
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}

export function TeamPreview() {
  return (
    <section className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="The People"
            title="Meet the Team"
            description="The builders and mentors driving every VyomikX project forward."
          />
          <Button asChild variant="outline" className="shrink-0 rounded-full">
            <Link href="/team">
              Full Team
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {team.slice(0, 3).map((member) => (
            <div
              key={member.name}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card/60 p-5 transition-colors hover:border-primary/50"
            >
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-primary/40">
                <Image
                  src={member.image || "/placeholder-user.jpg"}
                  alt={member.name}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm text-primary">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function HomeCta() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="glow-ring relative overflow-hidden rounded-3xl border border-border bg-card p-8 text-center sm:p-14">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Curious about tech? Let&apos;s build something together
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Whatever your level, we&apos;ll help you learn the tools and turn your idea into a real
            machine. Reach out to build, collaborate, or just learn alongside us.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="w-full rounded-full sm:w-auto">
              <Link href="/contact">
                Build With Us
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full rounded-full sm:w-auto">
              <Link href="/projects">See What We Build</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
