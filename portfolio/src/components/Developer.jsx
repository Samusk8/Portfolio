import IdentityIntro from "../components/IdentityIntro"
import ProjectCard from "../components/ProjectCard"
import { identityContent } from "../data/identity"
import { projects } from "../data/projects"
import SectionHeader from "../components/SectionHeader"

function Developer() {
  const featured = projects[0]
  const others = projects.slice(1)

  return (
    <section className="w-full py-24">

      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-20">


        <IdentityIntro {...identityContent.developer} />

        <div className="flex flex-col gap-10">

          <SectionHeader title="Featured Projects" />

          <ProjectCard project={featured} featured />

          <div className="grid md:grid-cols-2 gap-6">
            {others.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>

        </div>

      </div>

    </section>
  )
}

export default Developer