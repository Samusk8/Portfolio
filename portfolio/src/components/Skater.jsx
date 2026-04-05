import IdentityIntro from "../components/IdentityIntro"
import { identityContent } from "../data/identity"

function Skater() {
  return (
    <>
      <IdentityIntro {...identityContent.skater} />
    </>
  )
}

export default Skater