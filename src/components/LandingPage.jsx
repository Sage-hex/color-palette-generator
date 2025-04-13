import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white"
    >
      <div className="container mx-auto p-4 flex flex-col items-center justify-center h-full text-center">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-md"
        >
          🎨 Color Palette Generator
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Generate beautiful color schemes instantly. Perfect for designers, developers, and creatives.
        </motion.p>
        <motion.button
          onClick={() => navigate("/app")}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
          className="px-4 md:px-8 py-2 md:py-4 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-opacity-90 transition"
        >
          Get Started
        </motion.button>
      </div>
    </motion.div>
  );
};

export default LandingPage;