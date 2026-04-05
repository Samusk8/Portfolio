import IdentityIntro from "../components/IdentityIntro"
import { identityContent } from "../data/identity"

function Developer() {
  return (
    <>
      <IdentityIntro {...identityContent.developer} />
    </>
  )
}

export default Developer