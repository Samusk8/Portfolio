import { motion } from "framer-motion";

const AxelMarker = ({ axel, onClick }) => {
  return (
    <motion.div
      className="absolute cursor-pointer"
      style={{
        left: `${axel.coords.x}%`,
        top: `${axel.coords.y}%`,
      }}
      whileHover={{ scale: 1.3 }}
      onClick={onClick}
    >
      <div className="w-4 h-4 bg-yellow-400 rounded-full shadow-lg" />
    </motion.div>
  );
};

export default AxelMarker;