"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Camera,
  ChevronUp,
  Link2,
  Mail,
  MapPin,
  Sparkles,
  User,
} from "lucide-react";
import { useI18n } from "../../i18n/I18nProvider";

const quickLinks = [
  { key: "top", href: "#top" },
  { key: "about", href: "#about" },
  { key: "perspective", href: "#identity" },
  { key: "axels", href: "#axels" },
];

const socialLinks = [
  {
    key: "github",
    label: "GitHub",
    href: "https://github.com/Samusk8",
    icon: Link2,
    handle: "@Samusk8",
  },
  {
    key: "instagram",
    label: "Instagram",
    href: "https://instagram.com/samusk806",
    icon: Camera,
    handle: "@samusk806",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/samuel-jiménez-b1b54b35a",
    icon: User,
    handle: "@samuel-jimenez-lopez",
  }
];

const fadeContainer = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.08,
    },
  },
};

const fadeItem = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const Footer = () => {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-32 overflow-hidden border-t border-white/10">
      <div className="pointer-events-none absolute -top-20 right-0 h-72 w-72 rounded-full bg-electric/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-20 left-0 h-72 w-72 rounded-full bg-white/10 blur-[140px]" />

      <motion.div
        variants={fadeContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 md:py-20"
      >
        <motion.div
          variants={fadeItem}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-10"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/[0.06] via-white/[0.03] to-electric/10" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-neutral-300">
                <Sparkles className="h-3.5 w-3.5 text-electric" />
                {t("footer.badgeOpen")}
              </span>

              <h3 className="text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
                {t("footer.heading")}
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-silver md:text-base">
                {t("footer.description")}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="mailto:samueljimenezlopez06@gmail.com"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-electric/20 px-5 py-3 text-sm font-medium transition hover:bg-electric/30"
              >
                {t("footer.ctaStartProject")}
                <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <a
                href="https://github.com/Samusk8"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium transition hover:bg-white/10"
              >
                {t("footer.ctaSeeGithub")}
              </a>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <motion.div variants={fadeItem} className="flex flex-col gap-5">
            <h4 className="bg-gradient-to-r from-coldwhite to-silver bg-clip-text text-2xl font-semibold tracking-tight text-transparent">
              Samuel Jimenez
            </h4>

            <p className="max-w-md text-sm leading-relaxed text-silver">{t("footer.bio")}</p>

            <div className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-neutral-300">
              <MapPin className="h-3.5 w-3.5 text-electric" />
              {t("footer.location")}
            </div>

            <div className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-neutral-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]" />
              {t("footer.available")}
            </div>
          </motion.div>

          <motion.nav variants={fadeItem} className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-400">
              {t("footer.navigation")}
            </span>

            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group flex items-center justify-between rounded-lg border border-transparent px-2 py-2 text-sm text-silver transition hover:border-white/10 hover:bg-white/5 hover:text-coldwhite"
              >
                {t(`footer.quickLinks.${link.key}`)}
                <ArrowUpRight className="h-4 w-4 -translate-x-0.5 translate-y-0.5 opacity-0 transition group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
              </a>
            ))}
          </motion.nav>

          <motion.div variants={fadeItem} className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-400">
              {t("footer.contact")}
            </span>

            <a
              href="mailto:samueljimenezlopez06@gmail.com"
              className="group flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-silver transition hover:bg-white/10 hover:text-coldwhite"
            >
              <Mail className="h-4 w-4 text-electric" />
              samueljimenezlopez06@gmail.com
            </a>

            <div className="flex flex-col gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.key}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-silver transition hover:bg-white/10 hover:text-coldwhite"
                  >
                    <span className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-electric" />
                      {social.label}
                    </span>
                    <span className="text-xs text-neutral-400 transition group-hover:text-neutral-300">
                      {social.handle}
                    </span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        <motion.div variants={fadeItem} className="h-px w-full bg-white/10" />

        <motion.div
          variants={fadeItem}
          className="flex flex-col items-start justify-between gap-4 text-sm text-neutral-400 md:flex-row md:items-center"
        >
          <p>
            {t("footer.copyright", { year })} {t("footer.builtWith")}
          </p>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.2em] text-neutral-300 transition hover:bg-white/10 hover:text-coldwhite"
          >
            {t("footer.backToTop")}
            <ChevronUp className="h-4 w-4 text-electric" />
          </button>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
