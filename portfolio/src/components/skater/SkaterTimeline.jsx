import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { timelineData } from "../../data/timeline";
import { useI18n } from "../../i18n/I18nProvider";

const getCardStyle = (position) => {
  if (position === 1) {
    return "bg-gradient-to-br from-yellow-300 to-yellow-500 text-black ring-2 ring-yellow-300/40 shadow-lg shadow-yellow-500/20";
  }
  if (position === 2) {
    return "bg-gradient-to-br from-gray-200 to-gray-400 text-black";
  }
  if (position === 3) {
    return "bg-gradient-to-br from-amber-500 to-amber-700 text-black";
  }

  return "border border-white/10 bg-white/5 text-white backdrop-blur-md";
};

const titleDictionary = {
  "Campeonato Mallorca": "Mallorca Championship",
  "Campeonato Baleares": "Balearic Championship",
  "Campeonato de España": "Spanish Championship",
  "Campeonato de EspaÃ±a": "Spanish Championship",
  "Trofeo Federación Memorial": "Federation Memorial Trophy",
  "Trofeo FederaciÃ³n Memorial": "Federation Memorial Trophy",
  "XXVII Trofeo Ciudad de Palma": "XXVII Ciudad de Palma Trophy",
  "Trofeu CPA Sabadell": "CPA Sabadell Trophy",
  "Trofeo Alpha": "Alpha Trophy",
  "XXVI Trofeo Ciudad de Palma": "XXVI Ciudad de Palma Trophy",
  "Trofeo Nacional Arenys de Munt": "Arenys de Munt National Trophy",
  "Campeonato Baleares FFOO": "Balearic Championship FFOO",
  "V Trofeo Ciudad de Alcoy": "V Ciudad de Alcoy Trophy",
  "Copa de España Ciudad de Alcoy": "Spanish Cup Ciudad de Alcoy",
  "Copa de EspaÃ±a Ciudad de Alcoy": "Spanish Cup Ciudad de Alcoy",
  "X Campeonato de España": "X Spanish Championship",
  "X Campeonato de EspaÃ±a": "X Spanish Championship",
  "XXVTrofeo Ciudad de Palma": "XXV Ciudad de Palma Trophy",
  "Trofeo El Foix": "El Foix Trophy",
  "Trofeo La Salle": "La Salle Trophy",
  "XXI Trofeo Ciudad de Palma": "XXI Ciudad de Palma Trophy",
};

const descriptionDictionary = {
  "Senior · Élite Libre": "Senior · Elite Free Skating",
  "Senior Â· Ã‰lite Libre": "Senior · Elite Free Skating",
  "Senior · Libre": "Senior · Free Skating",
  "Junior · Libre": "Junior · Free Skating",
  "Junior Â· Libre": "Junior · Free Skating",
  "Junior · Élite Libre": "Junior · Elite Free Skating",
  "Junior Â· Ã‰lite Libre": "Junior · Elite Free Skating",
  "Junior · Solo Dance": "Junior · Solo Dance",
  "Junior Â· Solo Dance": "Junior · Solo Dance",
  "Junior · Parejas Danza": "Junior · Dance Pairs",
  "Junior Â· Parejas Danza": "Junior · Dance Pairs",
  "Juvenil · Élite Libre": "Youth · Elite Free Skating",
  "Juvenil Â· Ã‰lite Libre": "Youth · Elite Free Skating",
  "Juvenil · Libre": "Youth · Free Skating",
  "Juvenil Â· Libre": "Youth · Free Skating",
  Cuartetos: "Quartets",
  "Grupos Show": "Show Groups",
  "Grupos Show · Pequeño": "Show Groups · Small",
  "Grupos Show Â· PequeÃ±o": "Show Groups · Small",
  "Grupos Show · Junior": "Show Groups · Junior",
  "Grupos Show Â· Junior": "Show Groups · Junior",
  "Cadete · Élite Libre": "Cadet · Elite Free Skating",
  "Cadete Â· Ã‰lite Libre": "Cadet · Elite Free Skating",
  "Cadete · Libre": "Cadet · Free Skating",
  "Cadete Â· Libre": "Cadet · Free Skating",
  "Cadete · Élite B": "Cadet · Elite B",
  "Cadete Â· Ã‰lite B": "Cadet · Elite B",
  "Cadete · Élite B · Figuras Obligatorias":
    "Cadet · Elite B · Compulsory Figures",
  "Cadete Â· Ã‰lite B Â· Figuras Obligatorias":
    "Cadet · Elite B · Compulsory Figures",
  "Cadete · Absoluto": "Cadet · Absolute",
  "Cadete Â· Absoluto": "Cadet · Absolute",
  "Iniciación B": "Initiation B",
  "IniciaciÃ³n B": "Initiation B",
};

const replaceDictionary = (value, dictionary) =>
  Object.entries(dictionary).find(([key]) => key === value)?.[1] || value;

const englishOrdinal = (num) => {
  const mod10 = num % 10;
  const mod100 = num % 100;
  if (mod10 === 1 && mod100 !== 11) return `${num}st`;
  if (mod10 === 2 && mod100 !== 12) return `${num}nd`;
  if (mod10 === 3 && mod100 !== 13) return `${num}rd`;
  return `${num}th`;
};

const SkaterTimeline = () => {
  const { language, t, localize } = useI18n();
  const [activeYear, setActiveYear] = useState(timelineData[0].year);

  const currentYearData = timelineData.find((yearEntry) => yearEntry.year === activeYear);

  const formatPosition = (position) => {
    if (!position) return "";
    if (language === "en") return englishOrdinal(position);
    return `${position}${t("skater.timeline.rankSuffix")}`;
  };

  const translateTimelineText = (value, dictionary) => {
    const localized = localize(value);
    if (typeof localized !== "string") return localized;
    if (language === "es") return localized;
    return replaceDictionary(localized, dictionary);
  };

  return (
    <div className="mx-auto w-full max-w-6xl px-4">
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {timelineData.map((yearEntry) => (
          <button
            key={yearEntry.year}
            onClick={() => setActiveYear(yearEntry.year)}
            className={`rounded-full px-4 py-2 text-sm transition ${
              activeYear === yearEntry.year
                ? "bg-white text-black"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            {yearEntry.year}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeYear}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {currentYearData?.events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className={`${getCardStyle(event.position)} cursor-pointer rounded-xl p-4 transition-all duration-300`}
            >
              <h4 className="font-semibold">
                <span className="mr-2 opacity-80">{formatPosition(event.position)}</span>
                {translateTimelineText(event.title, titleDictionary)}
              </h4>

              <p className="mt-1 text-sm opacity-80">
                {translateTimelineText(event.description, descriptionDictionary)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SkaterTimeline;
