import { Hero } from "@/components/home/hero"
import {
  AboutPreview,
  FeaturedProjects,
  FuturePreview,
  TeamPreview,
  HomeCta,
} from "@/components/home/home-sections"

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <FeaturedProjects />
      <FuturePreview />
      <TeamPreview />
      <HomeCta />
    </>
  )
}
