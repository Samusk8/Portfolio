import { motion, AnimatePresence } from "framer-motion";

const AxelViewer = ({ axel, onClose }) => {
  return (
    <AnimatePresence>
      {axel && (
        <motion.div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.video
            src={axel.video}
            controls
            autoPlay
            className="max-w-3xl rounded-xl"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AxelViewer;