"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  if (!Array.isArray(content) || content.length === 0) {
    return null;
  }

  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const mobileRef = useRef<any>(null);
  const cardLength = content.length;

  // Desktop scroll tracking
  const { scrollYProgress: desktopScrollProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Mobile scroll tracking
  const { scrollYProgress: mobileScrollProgress } = useScroll({
    target: mobileRef,
    offset: ["start start", "end end"],
  });

  // Update active card based on scroll position
  const updateActiveCard = (progress: number) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(progress - breakpoint);
        if (distance < Math.abs(progress - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  };

  // Desktop scroll handler
  useMotionValueEvent(desktopScrollProgress, "change", (latest) => {
    if (window.innerWidth >= 1024) {
      updateActiveCard(latest);
    }
  });

  // Mobile scroll handler
  useMotionValueEvent(mobileScrollProgress, "change", (latest) => {
    if (window.innerWidth < 1024) {
      updateActiveCard(latest);
    }
  });

  const backgroundColors = Array(content.length).fill("#FFFFFF");

  return (
    <div className="relative">
      {/* Mobile Layout */}
      <div className="block lg:hidden">
        {/* Sticky Image Container */}
        <div className="sticky top-[5rem] z-10 w-full bg-[#FFFFFF] px-4 pt-4">
          <motion.div
            key={activeCard}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full h-auto"
          >
            {content[activeCard]?.content}
          </motion.div>
        </div>

        {/* Scrollable Content */}
        <div 
          ref={mobileRef}
          className="relative bg-[#FFFFFF]"
        >
          {content.map((item, index) => (
            <div 
              key={item.title + index} 
              className="min-h-[80vh] px-4 py-12"
            >
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-2xl font-bold text-[#000000]"
                style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-lg text-[#000000] mt-6"
                style={{ 
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                  fontWeight: 200 
                }}
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40 bg-[#FFFFFF]" />
        </div>
      </div>

      {/* Desktop Layout */}
      <motion.div
        style={{ backgroundColor: "#FFFFFF" }}
        className="hidden lg:flex h-[30rem] overflow-y-auto justify-center relative space-x-20 rounded-md p-10"
        ref={ref}
      >
        <div className="div relative flex items-start px-4">
          <div className="max-w-4xl">
            {content.map((item, index) => (
              <div key={item.title + index} className="my-20">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-2xl font-bold text-[#000000]"
                  style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-lg text-[#000000] max-w-sm mt-10"
                  style={{ 
                    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                    fontWeight: 200 
                  }}
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
            <div className="h-40 bg-[#FFFFFF]" />
          </div>
        </div>
        <div
          className={cn(
            "hidden lg:block h-[300px] w-[480px] rounded-md sticky top-10 overflow-hidden bg-[#FFFFFF]",
            contentClassName
          )}
        >
          <motion.div
            key={activeCard}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="h-full w-full"
          >
            {content[activeCard]?.content}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};