import SectionHeader from "../ui/SectionHeader"
function Identity({ active, setActive }) {
  return (
    <section className="w-full py-24 px-6">
import { useI18n } from "../../i18n/I18nProvider";

function Identity({ active, setActive }) {
  const { t } = useI18n();

  return (
    <section id="identity" className="w-full px-6 py-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8">
        <SectionHeader title={t("identity.choosePerspective")} centered />

        <div className="relative flex rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-xl">
          <div
            className={`absolute left-2 top-2 h-[calc(100%-1rem)] w-[calc(50%-0.5rem)] rounded-xl bg-electric/20 transition-all duration-300 ${
              active === "developer" ? "translate-x-0" : "translate-x-full"
            }`}
          />

          <button
            onClick={() => setActive("developer")}
            className={`relative z-10 rounded-xl px-8 py-3 text-sm transition focus:outline-none focus:ring-electric/40 md:text-base ${
              active === "developer" ? "text-white" : "text-silver hover:text-coldwhite"
            }`}
          >
            {t("identity.developer")}
          </button>

          <button
            onClick={() => setActive("skater")}
            className={`relative z-10 rounded-xl px-8 py-3 text-sm transition focus:outline-none focus:ring-electric/40 md:text-base ${
              active === "skater" ? "text-white" : "text-silver hover:text-coldwhite"
            }`}
          >
            {t("identity.skater")}
          </button>
        </div>

        <p className="text-center text-sm text-silver">{t("identity.exploreBothSides")}</p>
      </div>
    </section>
  );
}

export default Identity;
