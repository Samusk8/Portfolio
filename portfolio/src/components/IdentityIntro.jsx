import { motion } from "framer-motion"

function IdentityIntro({ title, text }) {
  return (
    <section className="w-full py-20 px-6">

      <div className="max-w-4xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-semibold mb-6"
        >
          {title}
        </motion.h2>

        <div className="w-12 h-[2px] bg-electric mb-8"></div>

        <div className="space-y-5 text-silver leading-relaxed text-lg">
          {text.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

      </div>

    </section>
  )
}

export default IdentityIntro