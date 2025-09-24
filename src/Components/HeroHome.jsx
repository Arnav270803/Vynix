"use client";
import React from "react";
import { motion } from "framer-motion";

const SimpleVynixHero = () => {
  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap" rel="stylesheet" />



{/*----------------------------------------------The sparkles code , don't touch it unless you wanted to change the animation {Ai generated code }---------------------------------------------- */}
      <motion.div 
        className="w-full absolute inset-0 h-screen"
        animate={{ rotate: 720 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        {/* Background glow effects */}
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-blue-400/5 to-transparent"></div>
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-gradient-radial from-white/5 to-transparent"></div>
        
        {/* Animated  particles */}
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Floating larger particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`large-${i}`}
            className="absolute bg-white/40 rounded-full blur-sm"
            style={{
              width: Math.random() * 6 + 4 + 'px',
              height: Math.random() * 6 + 4 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
      





      
      {/* Main content */}
      <div className="relative z-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:text-7xl text-5xl lg:text-6xl font-bold bg-gradient-to-br from-gray-300 to-gray-500 bg-clip-text text-transparent"
          style={{ fontFamily: 'Caveat, cursive' }}
        >
          VYNIX
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 mt-4 mb-12"
          style={{ fontFamily: 'Caveat, cursive' }}
        >
          Generate explainer videos to learn anything
        </motion.p>
        
        <div className='flex items-center justify-center'>
          <div className='border border-gray-400 w-80 h-80 rounded-lg backdrop-blur-sm bg-black/20'>
            {/* Your prompt content here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleVynixHero;