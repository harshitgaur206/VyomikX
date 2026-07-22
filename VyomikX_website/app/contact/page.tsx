import type { Metadata } from "next"
import { Clock, Mail, MapPin, Phone, Sparkles } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { ContactForm } from "@/components/contact/contact-form"
import { site } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the VyomikX team at ZHCET, AMU to build, learn, or collaborate on robotics and innovation projects.",
}

const highlights = [
  "Beginner-friendly — no experience needed",
  "Learn electronics, coding, and fabrication",
  "Build a real project alongside the team",
  "Open to students, collaborators, and makers",
]

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Build, learn, or collaborate with us"
        description="Want to build a project, pick up a new skill, or team up with VyomikX? Fill out the form and we'll get back to you."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-2xl border border-border bg-card/60 p-6">
              <h2 className="font-display text-lg font-semibold text-foreground">Contact details</h2>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-muted-foreground">Email</p>
                    <a href={`mailto:${site.email}`} className="text-foreground hover:text-primary">
                      {site.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-muted-foreground">Phone</p>
                    <p className="text-foreground">{site.phone}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-muted-foreground">Location</p>
                    <p className="text-foreground">{site.location}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-muted-foreground">Response time</p>
                    <p className="text-foreground">Usually within 2-3 days</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-accent" />
                <h2 className="font-display text-lg font-semibold text-foreground">
                  What a workshop includes
                </h2>
              </div>
              <ul className="mt-4 space-y-3">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="leading-relaxed text-foreground">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
