"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const SimpleVynixHero = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="min-h-screen w-full bg-black flex flex-col relative overflow-hidden">
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap" rel="stylesheet" />

      {/*----------------------------------------------The sparkles code , don't touch it unless you wanted to change the animation {Ai generated code }---------------------------------------------- */}
      <motion.div 
        className="w-full absolute inset-0 min-h-screen"
        animate={{ rotate: 720 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >

        
        {/* Animated  particles */}
        {[...Array(300)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 2 + 1 + 'px',
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




      

      {/* Main content - centered and takes up available space */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:text-7xl text-5xl lg:text-8xl font-bold bg-gradient-to-br from-gray-300 to-gray-500 bg-clip-text text-transparent"
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
        
        {/* Prompt Box */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-2xl mx-auto"
        >
          <div className="border border-gray-400 rounded-lg backdrop-blur-sm bg-black/20 flex items-center gap-3 px-4 py-3">
            <textarea
              placeholder="What do you want to make?"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 bg-transparent text-white placeholder-gray-400 resize-none outline-none min-h-[24px] max-h-32 scrollbar-hide"
              style={{ 
                fontFamily: 'Caveat, cursive',
                fontSize: '18px'
              }}
              rows={1}
              onInput={(e) => {
                const target = e.target;
                target.style.height = 'auto';
                target.style.height = Math.min(target.scrollHeight, 128) + 'px';
              }}
            />
            
            <button 
              className="flex-shrink-0 text-white rounded-md cursor-pointer hover:bg-white/10 p-2 transition-colors duration-200"
              onClick={() => {
                if (inputValue.trim()) {
                  console.log("Generating video for:", inputValue);
                }
              }}
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <path 
                  d="M2 21L23 12L2 3V10L17 12L2 14V21Z" 
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Custom scrollbar hide styles */}
        <style jsx>{`
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>

      {/* Footer - Now properly positioned at bottom */}
      <footer className="relative z-20 text-white  py-8 px-1 mt-auto">
        <div className=" mx-auto flex justify-between items-start">
          <div>
            <div 
              className="text-4xl text-gray-300" 
              style={{fontFamily: 'Caveat, cursive'}}
            >
              Vynix
            </div> 

            <div 
              className="py-2 text-xl text-gray-400"
              style={{fontFamily: 'Caveat, cursive'}}
            >
              Build in Public
              <a 
                href="https://x.com/Bokinsha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-1 text-blue-400 hover:text-blue-300 cursor-pointer transition-colors duration-200"
              >
                @Arnav
              </a>
            </div>
          </div>

          <div className="text-right">
            <div className="mb-3">
              <a 
                href="#" 
                className="text-xl text-gray-300 hover:text-blue-300 hover:underline cursor-pointer transition-colors duration-200"
                style={{fontFamily: 'Caveat, cursive'}}
              >
                Contact Us
              </a>
            </div>

            <div>
              <a 
                href="#" 
                className="text-xl text-gray-300 hover:text-blue-300 hover:underline cursor-pointer transition-colors duration-200"
                style={{fontFamily: 'Caveat, cursive'}}
              >
                Our Mission
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SimpleVynixHero;