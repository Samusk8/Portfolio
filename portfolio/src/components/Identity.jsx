import SectionHeader from "./SectionHeader"
function Identity({ active, setActive }) {
  return (
    <section className="w-full py-24 px-6">

      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">

        <SectionHeader
          title="Choose your perspective"
          centered
        />

        <div className="relative flex p-2 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">

          <div
            className={`absolute top-2 left-2 h-[calc(100%-1rem)] w-[calc(50%-0.5rem)] 
            rounded-xl bg-electric/20 transition-all duration-300
            ${active === "developer" ? "translate-x-0" : "translate-x-full"}`}
          />

          <button
            onClick={() => setActive("developer")}
            className={`relative z-10 px-8 py-3 rounded-xl transition text-sm md:text-base
              focus:outline-none focus:ring-electric/40
              ${active === "developer"
                ? "text-white"
                : "text-silver hover:text-coldwhite"
              }`}
          >
            Developer
          </button>

          <button
            onClick={() => setActive("skater")}
            className={`relative z-10 px-8 py-3 rounded-xl transition text-sm md:text-base
              focus:outline-none focus:ring-electric/40
              ${active === "skater"
                ? "text-white"
                : "text-silver hover:text-coldwhite"
              }`}
          >
            Skater
          </button>

        </div>

        <p className="text-sm text-silver text-center">
          Explore both sides — development and performance
        </p>

      </div>

    </section>
  )
}

export default Identity