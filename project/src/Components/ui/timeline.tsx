import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import { ChevronDown } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef(null);
  const mobileHeadlineRef = useRef(null);
  const introImageRef = useRef(null);
  const introTextRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.2,
      rootMargin: '0px'
    });

    if (headlineRef.current) observer.observe(headlineRef.current);
    if (mobileHeadlineRef.current) observer.observe(mobileHeadlineRef.current);
    if (introTextRef.current) observer.observe(introTextRef.current);

    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const handleScrollDown = () => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div
        className="w-full bg-[#FFFFFF] font-sans md:px-10 pt-16"
        style={{ fontFamily: "'Work Sans', sans-serif", color: '#000000' }}
        ref={containerRef}
      >
        {/* Animation styles */}
        <style>
          {`
            .animate-element {
              opacity: 0;
              transition: all 1.2s ease-out;
            }

            .headline-animation {
              transform: translateY(-30px);
            }

            .slide-left {
              transform: translateX(40px);
            }

            .slide-right {
              transform: translateX(-40px);
            }

            .visible {
              opacity: 1;
              transform: translate(0, 0);
            }

            .delay-500 {
              transition-delay: 0.5s;
            }
          `}
        </style>

        {/* Mobile Headline */}
        <div className="md:hidden px-4 py-10">
          <div ref={mobileHeadlineRef} className="animate-element delay-500">
            <h1 
              className="text-4xl text-center mb-[0.5rem]"
              style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 400 }}
            >
              Services
            </h1>
            <div className="h-[1px] w-[60%] bg-[#2D2D2D] mx-auto mt-4 rounded-sm opacity-90"></div>
          </div>
        </div>

        {/* Desktop Headline */}
        <div className="hidden md:block px-4 py-12">
          <div ref={headlineRef} className="animate-element headline-animation">
            <h1 
              className="text-5xl text-center mb-[0.5rem]"
              style={{ fontFamily: "'Work Sans', sans-serif", fontWeight: 400 }}
            >
              Services
            </h1>
            <div className="h-[1px] w-[60%] bg-[#000000] mx-auto mt-4 rounded-sm opacity-90"></div>
          </div>
        </div>

        {/* Intro Section with Image */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Left Column - Image */}
            <div ref={introImageRef} className="hidden md:flex md:items-center md:justify-center md:w-[80%] animate-element slide-right visible">
              <img
                src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtx5oIjmyHjegRM3wv9DYo1fsrmQpyJFN4hBGn"
                alt="Services Introduction"
                className="w-full h-auto rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
              />
            </div>

            {/* Right Column - Text */}
            <div ref={introTextRef} className="flex flex-col justify-center animate-element slide-left">
              <p 
                className="text-[#000000] text-xl md:text-xl leading-relaxed text-justify"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                  fontWeight: 200,
                  wordSpacing: '0.2em'
                }}
              >
                Whether you're moving into a new space or refining your current one, our studio specializes in the implementation of elite design projects, offering a complete cycle of architectural and interior design services.
              </p>
              <p 
                className="text-[#000000] text-xl md:text-xl leading-relaxed text-justify mt-10"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                  fontWeight: 200,
                  wordSpacing: '0.2em'
                }}
              >
                All services apply to both residential & commercial projects.
              </p>

              <button
                onClick={handleScrollDown}
                className="mt-12 flex flex-col items-center text-white transition-opacity duration-300 hover:opacity-80 cursor-pointer"
              >
                <span
                  className="text-[#000000] text-xl leading-relaxed tracking-wider"
                  style={{ 
                    fontFamily: "'Work Sans', sans-serif", 
                    fontWeight: 200, 
                    wordSpacing: '0.2em' 
                  }}
                >
                  Explore our services
                </span>
                <ChevronDown className="w-4 h-4 animate-bounce mt-2 text-[#2D2D2D]" />
              </button>
            </div>

            {/* Mobile Image */}
            <div ref={introImageRef} className="md:hidden animate-element slide-right visible">
              <img
                src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtx5oIjmyHjegRM3wv9DYo1fsrmQpyJFN4hBGn"
                alt="Services Introduction"
                className="w-full h-auto rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FFFFFF]">
        {/* Timeline Section */}
        <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex justify-start pt-10 md:pt-40 md:gap-10"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-[#2D2D2D] flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-[#F9F6F1] dark:bg-[#FFFFFF] border border-neutral-300 dark:border-neutral-700 p-2" />
                </div>
                <h3 
                  className="hidden md:block text-xl md:text-4xl md:pl-20 uppercase font-light tracking-wide text-[#000000]"
                  style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
                >
                  {item.title}
                </h3>
              </div>

              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3 
                  className="md:hidden block text-2xl mb-4 text-left uppercase font-light tracking-wide text-[#000000]"
                  style={{ fontFamily: "'Work Sans', sans-serif" }}
                >
                  {item.title}
                </h3>
                {item.content}
              </div>
            </div>
          ))}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[#000000]"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-[2px] bg-[#000000]"
            />
          </div>
        </div>
      </div>
    </>
  );
};