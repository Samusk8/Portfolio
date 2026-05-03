import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { techCloud } from "../../data/techCloud";
import { useI18n } from "../../i18n/I18nProvider";

const cloudReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

function TechCloud() {
  const { t } = useI18n();

  return (
    <div className="flex flex-col gap-10">
      <SectionHeader
        title={t("developer.techCloud.title")}
        subtitle={t("developer.techCloud.subtitle")}
      />

      <motion.div
        variants={cloudReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative h-[26rem] overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl sm:h-[28rem]"
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-[999px] bg-gradient-to-br from-white/10 via-electric/10 to-white/5 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,121,255,0.2),transparent_65%)]" />

        <div className="relative h-full w-full">
          {techCloud.map((tech) => (
            <motion.button
              key={tech.name}
              type="button"
              animate={{ y: [0, -tech.drift, 0] }}
              transition={{
                duration: tech.speed,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.14, rotate: [-2, 2, 0] }}
              className="group absolute -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-charcoal/70 p-3 backdrop-blur-lg transition hover:border-electric/40 hover:bg-charcoal/85 hover:shadow-[0_0_40px_rgba(20,121,255,0.35)]"
              style={{
                left: `${tech.x}%`,
                top: `${tech.y}%`,
              }}
              aria-label={tech.name}
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="pointer-events-none select-none"
                style={{
                  width: `${tech.size}px`,
                  height: `${tech.size}px`,
                }}
              />

              <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 rounded-md border border-white/10 bg-charcoal/90 px-2 py-1 text-xs text-coldwhite opacity-0 transition group-hover:opacity-100">
                {tech.name}
              </span>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default TechCloud;
