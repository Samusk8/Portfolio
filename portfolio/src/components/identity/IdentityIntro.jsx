import SectionHeader from "../ui/SectionHeader"

function IdentityIntro({ title, text }) {
  return (
    <div className="flex flex-col gap-6">

      <SectionHeader title={title} />

      <div className="space-y-5 text-silver leading-relaxed text-lg max-w-3xl">
        {text.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

    </div>
  )
}

export default IdentityIntro