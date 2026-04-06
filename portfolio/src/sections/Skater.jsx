import IdentityIntro from "../components/identity/IdentityIntro"
import { identityContent } from "../data/identity"

function Skater() {
    return (
        <section className="w-full py-24">
            <div className="max-w-6xl mx-auto px-6 flex flex-col gap-20">


                <IdentityIntro {...identityContent.skater} />

            </div>
        </section>
    )
}

export default Skater