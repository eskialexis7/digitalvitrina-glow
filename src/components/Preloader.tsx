import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

export function Preloader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 2500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          <div className="relative flex items-center justify-center">
            <motion.img
              src={logo}
              alt="DigitalVitrina"
              className="w-32 h-32 md:w-40 md:h-40 relative z-10"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              style={{ filter: "drop-shadow(0 0 30px oklch(0.72 0.22 235 / 0.7))" }}
            />
          </div>
          <div className="mt-10 relative h-10 w-10">
            <div className="absolute inset-0 rounded-full border border-electric/20" />
            <div
              className="absolute inset-0 rounded-full border-2 border-transparent border-t-electric"
              style={{ animation: "spin-slow 1.2s linear infinite" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
