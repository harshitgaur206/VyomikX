import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { ProjectsGrid } from "@/components/projects/projects-grid"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse the robotics projects built by VyomikX — autonomous systems, robotic arms, drones, and automation builds.",
}

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Work"
        title="Projects we've engineered"
        description="Every project here is a real, hands-on build by our members. Filter by category and dive into any project for the full story, specs, and gallery."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <ProjectsGrid />
      </section>
    </>
  )
}
