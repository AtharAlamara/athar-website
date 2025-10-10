// src/Pages/Projects/thana-hitten.tsx
import React from 'react';
import ProjectTemplate from '../../Components/ProjectTemplate';

export default function Project16() {
  return (
    <ProjectTemplate
      projectSlug="/projects/thana-hitten"
      nextSlug="the-blue-mansion"
    >
      {/* Project Images Grid */}
      <div className="mt-16 space-y-8">
        {/* Hero already rendered by template */}

        {/* First Row - Two Horizontal Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="aspect-[4/3]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtj2QynIUmUsC0XhLakHdiRypTbO5nS7lNoKA9"
              alt="Thana Hitten Villa detail 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtXvepNfiuQ9S7C4WKjGuVoZwsviq3Yk2dtryP"
              alt="Thana Hitten Villa detail 4"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Second Row - Single Large Horizontal Image */}
        <div className="aspect-[16/9]">
          <img
            src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtBGbsoretPlFrqGoQeY156fncgpARx8z4ahNj"
            alt="Thana Hitten Villa detail 5"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Third Row - Two Horizontal Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="aspect-[4/3]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTt8UCoVxpUAM4SiC6u9rV1JzBWFlwTsXngjypI"
              alt="Thana Hitten Villa detail 5"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtgV4oBCsRthOv6CVePaTZwJGrEAFR9KdNmq3n"
              alt="Thana Hitten Villa detail 6"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Fourth Row - Two Horizontal Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="aspect-[4/3]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtvIPirxAU60S9lVNzj2mPfTxsYKrMtInucLAW"
              alt="Thana Hitten Villa detail 9"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtLTDGt53xM6NRqTzJp54P2I7s1WcCaGQjeFAv"
              alt="Thana Hitten Villa detail 10"
              className="w-full h-full object-cover object-bottom"
            />
          </div>
        </div>

        {/* Fifth Row - Two Vertical Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="aspect-[3/5]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtkxx8smmT5wUsRrfG1tAi0XCE8dzWkBF93bZc"
              alt="Thana Hitten Villa detail 11"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[3/5]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtHw4C9dqHIu1lV0TjkBPZNU29g4GcRWdof6ar"
              alt="Thana Hitten Villa detail 12"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Sixth Row - Two Horizontal Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="aspect-[4/3]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTt462tZJIsiU3RSJQ01dGMAOK2BxNaWz4feoXp"
              alt="Thana Hitten Villa detail 1"
              className="w-full h-full object-cover object-bottom"
            />
          </div>
          <div className="aspect-[4/3]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtUxzplo7UDdSu4zjNVOnmb39pqwgZyrRBY56I"
              alt="Thana Hitten Villa detail 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </ProjectTemplate>
  );
}
