import { motion } from "framer-motion"
import Button from "../ui/Button"
import { useI18n } from "../../i18n/I18nProvider";

function Header() {
  const { language, setLanguage, t } = useI18n();

  return (
    <header className="absolute left-0 top-0 z-20 w-full">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg font-semibold tracking-wide"
        >
          Samuel Jimenez
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center gap-4 md:gap-6"
        >
          <div className="relative">
            <select
              aria-label={t("header.languageSelector")}
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
              className="appearance-none rounded-lg border border-white/10 bg-white/5 px-3 py-2 pr-8 text-sm text-coldwhite backdrop-blur-md transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-electric/40"
            >
              <option value="es">🇪🇸 ES</option>
              <option value="en">🇬🇧 EN</option>
            </select>
            <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-silver">
              ▼
            </span>
          </div>

          <button className="text-sm text-silver transition hover:text-coldwhite">
            {t("header.contact")}
          </button>

          <Button variant="small">{t("header.downloadCv")}</Button>
        </motion.div>
      </div>
    </header>
  );
}

export default Header;
