import type { Metadata } from "next"
import Image from "next/image"
import { Cpu, GraduationCap, Rocket, Target, Users, Wrench } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { SectionHeading } from "@/components/section-heading"
import { site, values } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about VyomikX — a student-led robotics and innovation group building intelligent machines and running STEM outreach.",
}

const valueIcons = [Wrench, Cpu, GraduationCap, Rocket]

const journey = [
  {
    year: "2024",
    title: "The First Spark",
    text: "A group of students at ZHCET, AMU started meeting after class to build their first robots from spare parts and shared curiosity.",
  },
  {
    year: "2024",
    title: "Becoming VyomikX",
    text: "The team adopted the VyomikX name and a simple mission: learn by building, and help other students do the same.",
  },
  {
    year: "Now",
    title: "Building Momentum",
    text: "We're a young team with 11 projects already behind us — from line followers to a Tesla coil — and plenty more on the bench.",
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="We build machines and the engineers who make them"
        description="VyomikX is a student-led robotics and innovation group. We design and build real robotic systems, document what we learn, and share that knowledge through hands-on workshops in our community."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Image
            src="/outreach/student-robot.jpg"
            alt="A student assembling a robot"
            width={720}
            height={480}
            className="aspect-[3/2] w-full rounded-2xl border border-border object-cover"
          />
          <div className="space-y-5 leading-relaxed text-muted-foreground">
            <p>
              What began as a few friends soldering circuits after class has grown into a
              multidisciplinary group of builders spanning mechanical, electrical, and software
              backgrounds. We are united by a simple belief: the best way to learn robotics is to
              build it.
            </p>
            <p>
              Every project we take on is real and hands-on — from autonomous rovers and
              gesture-controlled arms to drones and automation systems. We treat each build like an
              engineering problem: define it, prototype it, test it, and iterate until it works.
            </p>
            <p>
              Beyond our own lab, we are committed to widening access. Our outreach program brings
              affordable, hands-on STEM education to students who might never otherwise touch a
              microcontroller — because talent is everywhere, but opportunity is not.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card/30">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-8">
          <div className="rounded-2xl border border-border bg-card p-8">
            <Target className="h-8 w-8 text-primary" />
            <h2 className="mt-4 font-display text-2xl font-bold text-foreground">Our Mission</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              To make robotics tangible and accessible — empowering students to build real
              intelligent systems and to carry those skills into the world as confident engineers
              and problem-solvers.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <Users className="h-8 w-8 text-accent" />
            <h2 className="mt-4 font-display text-2xl font-bold text-foreground">Our Vision</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              A future where every curious student — regardless of background — has the tools,
              mentorship, and confidence to build technology that improves the world around them.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Stand For"
          title="Our core values"
          align="center"
          className="mx-auto"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => {
            const Icon = valueIcons[i % valueIcons.length]
            return (
              <div key={value.title} className="rounded-2xl border border-border bg-card/60 p-6">
                <Icon className="h-7 w-7 text-primary" />
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="border-t border-border bg-card/30">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our Journey" title="How we got here" align="center" className="mx-auto" />
          <ol className="mt-12 space-y-8">
            {journey.map((item, i) => (
              <li key={item.year} className="relative flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10 font-display text-sm font-bold text-primary">
                    {item.year}
                  </div>
                  {i < journey.length - 1 && <div className="mt-2 w-px flex-1 bg-border" />}
                </div>
                <div className="pb-2">
                  <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {site.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-card/60 p-6 text-center"
            >
              <dt className="font-display text-4xl font-bold text-primary">{stat.value}</dt>
              <dd className="mt-2 text-sm text-muted-foreground">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  )
}
