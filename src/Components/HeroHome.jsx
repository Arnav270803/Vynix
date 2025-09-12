"use client";
import React from "react";
import { motion } from "framer-motion";

const cn = (...classes) => classes.filter(Boolean).join(' ')

export function VynixLampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-gray-300 to-gray-500 py-4 bg-clip-text text-center text-5xl font-bold tracking-tight text-transparent"
        style={{fontFamily: 'Caveat, cursive'}}
      >
        VYNIX
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-6 bg-gradient-to-br from-gray-400 via-gray-300 to-gray-500 bg-clip-text text-center text-xl font-medium tracking-wide text-transparent"
        style={{fontFamily: 'Caveat, cursive'}}
      >
        Generate explainer videos to learn anything
      </motion.p>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className
}) => {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap" rel="stylesheet" />
      
      <div
        className={cn(
          "relative flex h-screen flex-col items-center justify-start pt-8 overflow-hidden bg-black w-full rounded-md z-0",
          className
        )}>
        <div
          className="relative flex w-full h-120 scale-y-125 items-center justify-center isolate z-0 ">
          <motion.div
            initial={{ opacity: 0.5, width: "15rem" }}
            whileInView={{ opacity: 1, width: "30rem" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            }}
            className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-gray-300 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]">
            <div
              className="absolute  w-[100%] left-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
            <div
              className="absolute  w-40 h-[100%] left-0 bg-black  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0.5, width: "15rem" }}
            whileInView={{ opacity: 1, width: "30rem" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            }}
            className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-gray-300 text-white [--conic-position:from_290deg_at_center_top]">
            <div
              className="absolute  w-40 h-[100%] right-0 bg-black  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
            <div
              className="absolute  w-[100%] right-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          </motion.div>
          <div
            className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-black blur-2xl"></div>
          <div
            className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
          <div
            className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-gray-400 opacity-50 blur-3xl"></div>
          <motion.div
            initial={{ width: "8rem" }}
            whileInView={{ width: "16rem" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="absolute inset-auto z-30 h-25 w-64 -translate-y-[6rem] rounded-full bg-gray-300 blur-2xl"></motion.div>
          <motion.div
            initial={{ width: "15rem" }}
            whileInView={{ width: "30rem" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-gray-300 "></motion.div>

          <div
            className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] dark:bg-black "></div>
        </div>
        <div className="relative z-50 flex -translate-y-65 flex-col items-center px-8">
          {children}
        </div>
      </div>
    </>
  );
};

const HeroHome = () => {
  return (
    <VynixLampDemo />
  )
}

export default HeroHome