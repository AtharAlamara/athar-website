import React from 'react';
import ProjectTemplate from '../../Components/ProjectTemplate';

export default function Project1() {
  return (
    <ProjectTemplate
      projectSlug="/projects/001-villa"
      nextSlug="aljoud-compound"
    >
      {/* Project Images Grid */}
      <div className="mt-16 space-y-8">
        {/* First Row - Two Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="aspect-[4/3]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtdIOWZ1gcEMJrDy94NdRQH6XU1hjgSlPtbLqv"
              alt="Project detail 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3] bg-gray-100">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtvQtpm8AU60S9lVNzj2mPfTxsYKrMtInucLAW"
              alt="Project detail 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Second Row - Single Large Image */}
        <div className="aspect-[16/9]">
          <img
            src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtel961XkrjqCYKLwiTs78lEIx2P5W0ef4Xpmh"
            alt="Project detail 3"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Third Row - Two Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="aspect-[3/5] bg-gray-100">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtrUaCmpMye0fMipAwBazW7nTb3VuFLlOCNx4J"
              alt="Project detail 4"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[3/5] bg-gray-100">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTt6xPa1GcmrEOlNZeoxYv81jVUAFyn9b2kJ7uh"
              alt="Project detail 5"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Fourth Row - Single Large Image */}
        <div className="aspect-[16/9]">
          <img
            src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtpX95IUCReztJulX5crgjTYAv2iO30PNGMqLQ"
            alt="Project detail 6"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Fifth Row - Two Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="aspect-[4/3] bg-gray-100">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtUBC76do7UDdSu4zjNVOnmb39pqwgZyrRBY56"
              alt="Project detail 7"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3] bg-gray-100">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtHOEQ11qHIu1lV0TjkBPZNU29g4GcRWdof6ar"
              alt="Project detail 8"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </ProjectTemplate>
  );
}
