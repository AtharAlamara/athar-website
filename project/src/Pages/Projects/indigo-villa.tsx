// src/Pages/Projects/indigo-villa.tsx
import React from 'react';
import ProjectTemplate from '../../Components/ProjectTemplate';

export default function Project11() {
  return (
    <ProjectTemplate
      projectSlug="/projects/indigo-villa"
      nextSlug="luxury-residence"
    >
      {/* Project Images Grid */}
      <div className="mt-16 space-y-8">
        {/* First Row - Two Vertical Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="aspect-[3/5]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtge2ngHRthOv6CVePaTZwJGrEAFR9KdNmq3nX"
              alt="Indigo Villa detail 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[3/5]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTthshjWuzJgCG8foS15FYXj3QBWPNi9MqpAbzl"
              alt="Indigo Villa detail 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Second Row - Two Horizontal Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="aspect-[4/3]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtkQiOLYT5wUsRrfG1tAi0XCE8dzWkBF93bZcK"
              alt="Indigo Villa detail 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtp6x5FpCReztJulX5crgjTYAv2iO30PNGMqLQ"
              alt="Indigo Villa detail 4"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Third Row - Two Horizontal Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="aspect-[4/3]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtBlpy1metPlFrqGoQeY156fncgpARx8z4ahNj"
              alt="Indigo Villa detail 5"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtvHa1dHAU60S9lVNzj2mPfTxsYKrMtInucLAW"
              alt="Indigo Villa detail 6"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Fourth Row - Single Horizontal Image */}
        <div className="aspect-[16/9]">
          <img
            src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtcSAAS8gDRfwX5N9Zuihrgpl2TJDnCkdoSyt1"
            alt="Indigo Villa detail 7"
            className="w-full h-full object-cover object-bottom"
          />
        </div>

        {/* Fifth Row - Two Horizontal Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="aspect-[4/3]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtkSWDmkT5wUsRrfG1tAi0XCE8dzWkBF93bZcK"
              alt="Indigo Villa detail 9"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtB1VM83etPlFrqGoQeY156fncgpARx8z4ahNj"
              alt="Indigo Villa detail 10"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Sixth Row - Single Horizontal Image */}
        <div className="aspect-[16/9]">
          <img
            src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtkxon8QfT5wUsRrfG1tAi0XCE8dzWkBF93bZc"
            alt="Indigo Villa detail 11"
            className="w-full h-full object-cover object-bottom"
          />
        </div>

        {/* Seventh Row - Two Vertical Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="aspect-[3/5]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtV0DpfnWPxwvAJIkTRY1Sqacln507fXbum4sg"
              alt="Indigo Villa detail 12"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[3/5]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtFEUGm3xORdr4iUQqXJuntjb6e1yHS7xlGVwT"
              alt="Indigo Villa detail 13"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Eighth Row - Two Horizontal Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="aspect-[4/3]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtpjK2IqCReztJulX5crgjTYAv2iO30PNGMqLQ"
              alt="Indigo Villa detail 14"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtfQO9TsycZjuFxPyldm6w08WS34zoshaYeRQC"
              alt="Indigo Villa detail 15"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </ProjectTemplate>
  );
}
