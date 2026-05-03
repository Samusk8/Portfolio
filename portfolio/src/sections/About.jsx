import { motion } from "framer-motion";
import { useI18n } from "../i18n/I18nProvider";

function Highlight({ children }) {
  return <span className="font-medium text-electric">{children}</span>;
}

function About() {
  const { t } = useI18n();
  const paragraphs = t("about.paragraphs");

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-charcoal px-6 py-32 text-coldwhite"
    >
      <div className="absolute inset-0 bg-electric/10 opacity-20 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
        <div>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">{t("about.title")}</h2>

          <div className="mb-8 h-[2px] w-16 bg-electric" />

          <p className="text-lg leading-relaxed text-silver">
            {t("about.summaryStart")} <Highlight>{t("about.highlightDiscipline")}</Highlight>
            {t("about.summaryMiddle")} <Highlight>{t("about.highlightCompetition")}</Highlight>
            {t("about.summaryEnd")}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >
          {Array.isArray(paragraphs) &&
            paragraphs.map((text, index) => (
              <p key={index} className="leading-relaxed text-silver">
                {text}
              </p>
            ))}
        </motion.div>
      </div>
    </section>
  );
}

export default About;
