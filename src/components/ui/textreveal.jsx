'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Main App Component
export default function TextReveal({ textToAnimate }) {
  const words = textToAnimate.split(" ");

  // Variants for the container to orchestrate the animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
    }),
  };

  // Variants for each word to create a smoother smoke effect
  const childVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    },
  };

  return (
    <div className="flex items-center justify-center font-sans p-4">
      <motion.div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: 'center', fontFamily: "var(--font-customfont)" }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="text-lg font-semibold text-center mask-r-from-0.5  "
        >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={childVariants}
            transition={{
              duration: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            // Adjust spacing for paragraph
            style={{ marginRight: "12px", marginTop: "10px" }}>
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
