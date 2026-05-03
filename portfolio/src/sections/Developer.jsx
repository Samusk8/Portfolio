import IdentityIntro from "../components/identity/IdentityIntro"
import ProjectCard from "../components/projects/ProjectCard"
import { projects } from "../data/projects"
import SectionHeader from "../components/ui/SectionHeader"
import TechCloud from "../components/developer/TechCloud"
import { useI18n } from "../i18n/I18nProvider"

function Developer() {
  const { t } = useI18n()
  const featured = projects[0]
  const others = projects.slice(1)
  const developerIntro = t("identity.content.developer")

  return (
    <section className="w-full py-24">

      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-20">


        <IdentityIntro {...developerIntro} />
        <TechCloud />

        <div className="flex flex-col gap-10">

          <SectionHeader title={t("developer.featuredProjects")} />

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
