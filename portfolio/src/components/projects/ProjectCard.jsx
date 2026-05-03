import { motion } from "framer-motion"
import { useI18n } from "../../i18n/I18nProvider";

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-0 backdrop-blur-xl"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={localize(project.title)}
          className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-charcoal/60 transition group-hover:bg-charcoal/40" />
      </div>

      <div className="relative z-10 flex flex-col gap-4 p-6">
        <h3 className="text-xl font-semibold">{localize(project.title)}</h3>

        <p className="text-sm leading-relaxed text-silver">{localize(project.description)}</p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((technology, index) => (
            <span
              key={index}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-silver"
            >
              {localize(techTranslations[technology] || technology)}
            </span>
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="mt-2 text-sm text-electric hover:underline"
        >
          {t("developer.viewProject")} →
        </a>
      </div>

      <div className="absolute inset-0 bg-electric/10 opacity-0 blur-2xl transition duration-300 group-hover:opacity-100" />
    </motion.div>
  );
}

export default ProjectCard;
