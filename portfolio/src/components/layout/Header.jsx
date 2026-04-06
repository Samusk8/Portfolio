import { motion } from "framer-motion"
import Button from "../ui/Button"

function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-20">

      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-6">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-semibold text-lg tracking-wide"
        >
          Samuel Jiménez
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex gap-6 items-center"
        >

          <button className="text-sm text-silver hover:text-coldwhite transition">
            Contact
          </button>

          <Button variant="small">
            Download CV
          </Button>

        </motion.div>

      </div>

    </header>
  )
}

export default Header