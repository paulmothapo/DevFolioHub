"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SparklesIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import PortfolioCount from './PortfolioCount';

const HeroSection: React.FC = () => {
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row items-center justify-center px-4 md:px-20 mt-10 md:mt-20 w-full z-[20] min-h-[80vh] relative"
      >
        <div className="h-full w-full flex flex-col gap-5 justify-center items-center text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            DevFolio Hub
          </h1>
          <motion.p className="text-lg text-gray-200 my-5 max-w-[600px]">
            Showcase your personal portfolio website and get discovered by
            potential clients and employers.
          </motion.p>

          <motion.a
            href="/submit"
            className="Welcome-box py-2 px-4 button-primary text-center items-center text-white cursor-pointer rounded-lg max-w-[200px] flex justify-center"
          >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            Submit Portfolio
          </motion.a>
          <PortfolioCount />
        </div>
        <motion.div className="hidden md:flex w-full h-full justify-center items-center">
          <Image
            src="/mainIconsdark.svg"
            alt="work icons"
            height={650}
            width={650}
          />
        </motion.div>
      </motion.div>
      <div className="absolute top-0 left-0 w-full h-full md:hidden">
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
      </div>
      <a href="#featured-portfolios" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-50">
        <ChevronDownIcon className="h-10 w-10 text-white animate-bounce" />
      </a>
    </>
  );
};

export default HeroSection;
