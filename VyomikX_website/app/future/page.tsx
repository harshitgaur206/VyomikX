import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Rocket } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { futureVision } from "@/lib/site-data"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Future Vision",
  description:
    "Explore the VyomikX roadmap — from AI-driven autonomy labs to open-source robotics kits and a competitive robotics team.",
}

const groups = ["Near Term", "Mid Term", "Long Term"] as const

const goals = [
  "Establish a permanent, well-equipped robotics lab open to all members",
  "Publish open documentation and code for every completed project",
  "Mentor 100 new student builders every year",
  "Partner with schools and student communities to widen access to tech",
]

export default function FuturePage() {
  return (
    <>
      <PageHeader
        eyebrow="Future Vision"
        title="What we're building toward next"
        description="Our roadmap stretches from immediate, achievable goals to ambitious long-term research. Here is where VyomikX is headed."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-14">
          {groups.map((group) => {
            const items = futureVision.filter((f) => f.timeframe === group)
            if (items.length === 0) return null
            return (
              <div key={group}>
                <div className="flex items-center gap-4">
                  <h2 className="font-display text-2xl font-bold text-foreground">{group}</h2>
                  <span className="h-px flex-1 bg-border" />
                </div>
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  {items.map((item) => (
                    <div
                      key={item.title}
                      className="group rounded-2xl border border-border bg-card/60 p-6 transition-colors hover:border-primary/50"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-display text-xl font-semibold text-foreground">
                          {item.title}
                        </h3>
                        <Rocket className="h-5 w-5 shrink-0 text-primary" />
                      </div>
                      <p className="mt-3 leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="border-y border-border bg-card/30">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold tracking-tight text-balance">
            Commitments that guide the roadmap
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {goals.map((goal) => (
              <li
                key={goal}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-5"
              >
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span className="text-sm leading-relaxed text-foreground">{goal}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="glow-ring rounded-3xl border border-border bg-card p-8 text-center sm:p-12">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-balance">
            Want to help shape what comes next?
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">
            Whether you are a student, mentor, sponsor, or school — there is a place for you in the
            VyomikX journey.
          </p>
          <Button asChild size="lg" className="mt-8 rounded-full">
            <Link href="/contact">
              Get Involved
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
