import { motion } from "framer-motion"

const paragraphs = [
  `I'm a cross-platform app developer in training and a high-performance roller skater, used to working under pressure, staying disciplined, and constantly improving.`,
  `I combine the logic of development with a competitive mindset, allowing me to approach problems with creativity, resilience, and persistence.`,
  `I'm especially interested in building projects with real impact, particularly in the sports world, where I can merge both of my passions.`,
  `I learn fast, experiment often, and I’m not afraid to make mistakes — because that’s where meaningful things are built.`,
]

function Highlight({ children }) {
  return (
    <span className="text-electric font-medium">
      {children}
    </span>
  )
}

function About() {
  return (
    <section id="about" className="relative w-full bg-charcoal text-coldwhite py-32 px-6 overflow-hidden">

      <div className="absolute inset-0 opacity-20 blur-3xl bg-electric/10"></div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About Me
          </h2>

          <div className="w-16 h-[2px] bg-electric mb-8"></div>

          <p className="text-silver text-lg leading-relaxed">
            A developer shaped by <Highlight>discipline</Highlight> and 
            <Highlight> competition</Highlight>, combining technical thinking 
            with a high-performance mindset.
          </p>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
        >

          {paragraphs.map((text, index) => (
            <p key={index} className="text-silver leading-relaxed">
              {text}
            </p>
          ))}

        </motion.div>

      </div>

    </section>
  )
}

export default About