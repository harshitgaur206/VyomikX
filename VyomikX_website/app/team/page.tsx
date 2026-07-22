import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { team } from "@/lib/site-data"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the students behind VyomikX — the robotics and innovation team at ZHCET, AMU.",
}

const coordinators = team.filter((m) => m.role === "Team Coordinator")
const members = team.filter((m) => m.role !== "Team Coordinator")

function MemberCard({ member }: { member: (typeof team)[number] }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card/60 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={member.image || "/placeholder-user.jpg"}
          alt={member.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
        <span className="absolute left-3 top-3 rounded-full border border-primary/40 bg-background/80 px-2.5 py-1 font-mono text-[11px] text-primary backdrop-blur">
          {member.enrolment}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h2 className="font-display text-lg font-semibold text-foreground">{member.name}</h2>
        <p className="text-sm text-primary">{member.role}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {member.focus.map((f) => (
            <span
              key={f}
              className="rounded-md border border-border bg-secondary/60 px-2 py-0.5 text-[11px] text-muted-foreground"
            >
              {f}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Team"
        title="The people behind the machines"
        description="VyomikX is a student-run robotics and innovation team at ZHCET, AMU — a group of builders learning by doing and helping each other along the way."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <h2 className="font-display text-2xl font-bold text-foreground">Team Coordinators</h2>
          <span className="h-px flex-1 bg-border" />
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coordinators.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>

        <div className="mt-16 flex items-center gap-4">
          <h2 className="font-display text-2xl font-bold text-foreground">Team Members</h2>
          <span className="h-px flex-1 bg-border" />
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card/30">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold tracking-tight text-balance">
            Want to join the crew?
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">
            We are always looking for curious builders, whatever your background. Reach out and tell
            us what you would love to build.
          </p>
          <Button asChild size="lg" className="mt-8 rounded-full">
            <Link href="/contact">
              Get in Touch
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
