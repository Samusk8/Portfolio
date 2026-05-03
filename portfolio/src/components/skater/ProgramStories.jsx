import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import SectionHeader from "../ui/SectionHeader";
import { skaterPrograms } from "../../data/skaterPrograms";
import { useI18n } from "../../i18n/I18nProvider";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const tabs = [
  { id: "idea", labelKey: "skater.programs.tabs.idea" },
  { id: "moments", labelKey: "skater.programs.tabs.moments" },
];

function ProgramStories() {
  const { t, localize } = useI18n();
  const [activeProgram, setActiveProgram] = useState(null);
  const [activeTab, setActiveTab] = useState("idea");

  useEffect(() => {
    if (!activeProgram) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveProgram(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeProgram]);

  const openProgram = (program) => {
    setActiveProgram(program);
    setActiveTab("idea");
  };

  const activeData = useMemo(() => {
    if (!activeProgram) return null;

    const idea = typeof activeProgram.idea === "object" ? activeProgram.idea : {};
    const concept = localize(idea.concept) || localize(activeProgram.idea) || "";
    const maillotDescription =
      localize(idea.maillotDescription) || localize(activeProgram.outfitDesign) || "";
    const maillotPhotos =
      Array.isArray(idea.maillotPhotos) && idea.maillotPhotos.length > 0
        ? idea.maillotPhotos.slice(0, 2)
        : [activeProgram.image, activeProgram.image];
    const normalizedMaillotPhotos =
      maillotPhotos.length === 1 ? [maillotPhotos[0], maillotPhotos[0]] : maillotPhotos;
    const musicAudioUrl =
      idea.musicAudioUrl || activeProgram.musicAudioUrl || activeProgram.musicSnippet || "";
    const musicNote = localize(idea.musicNote) || localize(activeProgram.musicNote) || "";
    const recapVideoUrl =
      activeProgram.bestMoments?.recapVideoUrl ||
      activeProgram.recapVideoUrl ||
      activeProgram.bestMomentsVideo ||
      "";

    return {
      concept,
      maillotDescription,
      maillotPhotos: normalizedMaillotPhotos,
      musicAudioUrl,
      musicNote,
      recapVideoUrl,
    };
  }, [activeProgram, localize]);

  return (
    <>
      <div className="flex flex-col gap-10">
        <SectionHeader
          title={t("skater.programs.title")}
          subtitle={t("skater.programs.subtitle")}
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {skaterPrograms.map((program) => (
            <motion.article
              key={program.id}
              variants={fade}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group relative h-[24rem] cursor-pointer overflow-hidden rounded-2xl border border-white/10"
              onClick={() => openProgram(program)}
            >
              <img
                src={program.image}
                alt={localize(program.title)}
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/45 to-charcoal/20" />
              <div className="pointer-events-none absolute inset-0 bg-electric/10 opacity-0 transition group-hover:opacity-100" />

              <div className="relative flex h-full flex-col justify-end p-6">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                    {localize(program.season)}
                  </p>
                  <span className="rounded-full border border-white/10 bg-charcoal/70 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-neutral-300">
                    {localize(program.discipline)}
                  </span>
                </div>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-coldwhite">
                  {localize(program.title)}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-silver">
                  {localize(program.cardDescription)}
                </p>

                <p className="mt-4 text-xs uppercase tracking-[0.18em] text-neutral-300">
                  {t("skater.programs.openHint")}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {activeProgram && activeData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-sm"
            onClick={() => setActiveProgram(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/10 bg-charcoal"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveProgram(null)}
                className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-charcoal/80 px-3 py-1.5 text-xs uppercase tracking-[0.16em] text-neutral-300 transition hover:border-electric/40 hover:text-coldwhite"
              >
                {t("skater.programs.close")}
              </button>

              <div className="relative h-72">
                <img
                  src={activeProgram.image}
                  alt={localize(activeProgram.title)}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-neutral-300">
                    {localize(activeProgram.season)}
                  </p>
                  <h3 className="mt-2 text-3xl font-semibold tracking-tight text-coldwhite">
                    {localize(activeProgram.title)}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-silver">
                    {localize(activeProgram.cardDescription)}
                  </p>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="mb-6 flex flex-wrap gap-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`rounded-full border px-3 py-2 text-xs uppercase tracking-[0.14em] transition ${
                        activeTab === tab.id
                          ? "border-electric/50 bg-electric/20 text-coldwhite"
                          : "border-white/10 bg-white/5 text-neutral-300 hover:bg-white/10"
                      }`}
                    >
                      {t(tab.labelKey)}
                    </button>
                  ))}
                </div>

                {activeTab === "idea" && (
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <p className="text-xs uppercase tracking-[0.16em] text-neutral-400">
                        {t("skater.programs.labels.concept")}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-silver">
                        {activeData.concept || t("skater.programs.fallback.concept")}
                      </p>

                      <p className="mt-5 text-xs uppercase tracking-[0.16em] text-neutral-400">
                        {t("skater.programs.labels.maillotDescription")}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-silver">
                        {activeData.maillotDescription ||
                          t("skater.programs.fallback.maillotDescription")}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <p className="text-xs uppercase tracking-[0.16em] text-neutral-400">
                        {t("skater.programs.labels.music")}
                      </p>
                      {activeData.musicNote && (
                        <p className="mt-3 text-sm leading-relaxed text-silver">
                          {activeData.musicNote}
                        </p>
                      )}

                      {activeData.musicAudioUrl ? (
                        <audio
                          controls
                          preload="metadata"
                          className="mt-4 w-full"
                          src={activeData.musicAudioUrl}
                        />
                      ) : (
                        <p className="mt-4 text-sm text-neutral-400">
                          {t("skater.programs.fallback.musicAudio")}
                        </p>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      <p className="mb-3 text-xs uppercase tracking-[0.16em] text-neutral-400">
                        {t("skater.programs.labels.maillotPhotos")}
                      </p>

                      <div className="grid gap-4 sm:grid-cols-2">
                        {activeData.maillotPhotos.map((photo, index) => (
                          <div
                            key={`${activeProgram.id}-photo-${index}`}
                            className="aspect-square overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                          >
                            <img
                              src={photo}
                              alt={`${localize(activeProgram.title)} maillot ${index + 1}`}
                              className="h-full w-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "moments" && (
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-xs uppercase tracking-[0.16em] text-neutral-400">
                      {t("skater.programs.labels.bestMomentsRecap")}
                    </p>

                    {activeData.recapVideoUrl ? (
                      <video
                        controls
                        className="mt-4 w-full rounded-xl border border-white/10 bg-black"
                        src={activeData.recapVideoUrl}
                      />
                    ) : (
                      <p className="mt-4 text-sm text-neutral-400">
                        {t("skater.programs.fallback.recapVideo")}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ProgramStories;
