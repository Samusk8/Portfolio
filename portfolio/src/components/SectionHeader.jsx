import { motion } from "framer-motion"

function SectionHeader({ title, subtitle, centered = false }) {
  return (
    <div className={`flex flex-col gap-4 ${centered ? "items-center text-center" : ""}`}>

      <motion.h2
        key={title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-3xl md:text-4xl font-semibold tracking-tight"
      >
        {title}
      </motion.h2>

      <motion.div
        key={title + "-line"}
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: centered ? 48 : 40, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="h-[2px] bg-electric"
      />

      {subtitle && (
        <motion.p
          key={title + "-sub"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-silver text-sm max-w-md"
        >
          {subtitle}
        </motion.p>
      )}

    </div>
  )
}

export default SectionHeader