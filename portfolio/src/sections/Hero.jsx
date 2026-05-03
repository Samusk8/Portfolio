import { motion } from "framer-motion";
import Button from "../components/ui/Button";
import { useI18n } from "../i18n/I18nProvider";

function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative left-0 top-0 h-screen w-full overflow-hidden bg-charcoal object-cover">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      >
        <source src="videos/skate-loop.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold tracking-tight md:text-7xl"
        >
          Samuel Jimenez
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-lg text-silver md:text-xl"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex gap-6"
        >
          <Button
            onClick={() => {
              document.getElementById("about").scrollIntoView();
            }}
          >
            {t("hero.learnMore")}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
