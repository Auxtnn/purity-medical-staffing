"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hospital, Heart } from "lucide-react";

export const PageLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Brief loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center">
            {/* Professional Medical Logo */}
            <motion.div
              className="flex items-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Logo Container */}
              <div className="relative mr-4">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-teal-600 rounded-xl transform rotate-3"></div>
                {/* Icon Container */}
                <div className="relative bg-white rounded-xl p-4 shadow-lg">
                  <Hospital size={40} className="text-primary" />
                </div>
                {/* Medical Cross Accent */}
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center">
                  <Heart size={12} className="text-white" />
                </div>
              </div>

              {/* Brand Text */}
              <div className="flex flex-col">
                <motion.h1
                  className="text-4xl font-bold text-gray-800 leading-tight"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <span className="text-primary">Purity</span>
                </motion.h1>
                <motion.div
                  className="text-lg font-semibold text-teal-600 leading-tight"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Medical
                </motion.div>
                <motion.div
                  className="text-base font-medium text-gray-600 leading-tight"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  Staffing
                </motion.div>
              </div>
            </motion.div>

            {/* Professional Tagline */}
            <motion.div
              className="font-medium text-gray-600 mb-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <div className="text-sm tracking-wide">COMPASSIONATE CARE</div>
              <div className="text-xs text-gray-500 mt-1">
                Professional Healthcare Staffing Solutions
              </div>
            </motion.div>

            {/* Elegant Pulse Loader */}
            <div className="relative">
              {/* Background Track */}
              <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </div>

              {/* Animated Pulse Dots */}
              <div className="flex justify-center mt-4 space-x-2">
                {[0, 1, 2].map((index) => (
                  <motion.div
                    key={index}
                    className="w-2 h-2 bg-blue-500 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
