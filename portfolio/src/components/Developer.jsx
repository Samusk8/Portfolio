import IdentityIntro from "../components/IdentityIntro"
import ProjectCard from "../components/ProjectCard"
import { identityContent } from "../data/identity"
import { projects } from "../data/projects"

function Developer() {
  const featured = projects[0]
  const others = projects.slice(1)

  return (
    <section className="w-full py-24 px-6">

      <div className="max-w-6xl mx-auto flex flex-col gap-20">

        {/* intro */}
        <IdentityIntro {...identityContent.developer} />

        {/* projects */}
        <div className="flex flex-col gap-10">

          <h2 className="text-3xl md:text-4xl font-semibold">
            Featured Projects
          </h2>

          {/* proyecto principal */}
          <ProjectCard project={featured} featured />

          {/* secundarios */}
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