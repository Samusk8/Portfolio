import { timelineData } from "../../data/timeline";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const getCardStyle = (position) => {
  if (position === 1)
    return "bg-gradient-to-br from-yellow-300 to-yellow-500 text-black ring-2 ring-yellow-300/40 shadow-lg shadow-yellow-500/20";
  if (position === 2)
    return "bg-gradient-to-br from-gray-200 to-gray-400 text-black";
  if (position === 3)
    return "bg-gradient-to-br from-amber-500 to-amber-700 text-black";

  return "bg-white/5 backdrop-blur-md border border-white/10 text-white";
};

const formatPosition = (position) => {
  if (!position) return "";
  return `${position}º`;
};

const SkaterTimeline = () => {
  const [activeYear, setActiveYear] = useState(timelineData[0].year);

  const currentYearData = timelineData.find(
    (y) => y.year === activeYear
  );

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {timelineData.map((year) => (
          <button
            key={year.year}
            onClick={() => setActiveYear(year.year)}
            className={`
              px-4 py-2 rounded-full text-sm transition
              ${
                activeYear === year.year
                  ? "bg-white text-black"
                  : "bg-white/10 text-white hover:bg-white/20"
              }
            `}
          >
            {year.year}
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
          {currentYearData.events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className={`
                ${getCardStyle(event.position)}
                p-4 rounded-xl cursor-pointer
                transition-all duration-300
              `}
            >
              <h4 className="font-semibold">
                <span className="mr-2 opacity-80">
                  {formatPosition(event.position)}
                </span>
                {event.title}
              </h4>

              <p className="text-sm opacity-80 mt-1">
                {event.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

    </div>
  );
};

export default SkaterTimeline;