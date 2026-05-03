import IdentityIntro from "../components/identity/IdentityIntro"
import SkaterTimeline from "../components/skater/SkaterTimeline"
import ProgramStories from "../components/skater/ProgramStories"
import { useI18n } from "../i18n/I18nProvider"

function Skater() {
    const { t } = useI18n()
    const skaterIntro = t("identity.content.skater")

    return (
        <section className="w-full py-24">
            <div className="max-w-6xl mx-auto px-6 flex flex-col gap-20">


                <IdentityIntro {...skaterIntro} />
                <SkaterTimeline/>
                <ProgramStories />
            </div>
        </section>
    )
}

export default Skater
