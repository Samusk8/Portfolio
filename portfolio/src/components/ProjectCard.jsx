import { motion } from "framer-motion"

function ProjectCard({ project, featured }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden group cursor-pointer ${
        featured ? "p-0" : "p-0"
      }`}
    >

      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition duration-500"
        />

        <div className="absolute inset-0 bg-charcoal/60 group-hover:bg-charcoal/40 transition"></div>
      </div>

      <div className="relative z-10 p-6 flex flex-col gap-4">

        <h3 className="text-xl font-semibold">
          {project.title}
        </h3>

        <p className="text-silver text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-silver"
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          className="text-electric text-sm hover:underline mt-2"
        >
          View Project →
        </a>

      </div>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-electric/10 blur-2xl"></div>

    </motion.div>
  )
}

export default ProjectCard