// src/Pages/Projects/space-cafe.tsx
import React from 'react';
import ProjectTemplate from '../../Components/ProjectTemplate';

export default function Project15() {
  return (
    <ProjectTemplate
      projectSlug="/projects/space-cafe"
      nextSlug="thana-hitten"
    >
      {/* Project Images Grid */}
      <div className="mt-16 space-y-8">
        {/* First Row - Two Horizontal Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="aspect-[4/3]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtcoeN08DRfwX5N9Zuihrgpl2TJDnCkdoSyt1q"
              alt="Space Café detail 1"
              className="w-full h-full object-cover object-bottom"
            />
          </div>
          <div className="aspect-[4/3]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtHLKmIYeqHIu1lV0TjkBPZNU29g4GcRWdof6a"
              alt="Space Café detail 2"
              className="w-full h-full object-cover object-bottom"
            />
          </div>
        </div>

        {/* Second Row - Single Large Horizontal Image */}
        <div className="aspect-[16/9]">
          <img
            src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTt6U2sstcmrEOlNZeoxYv81jVUAFyn9b2kJ7uh"
            alt="Space Café detail 3"
            className="w-full h-full object-cover object-bottom"
          />
        </div>

        {/* Pre-Second Row - Two Horizontal Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="aspect-[4/3]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtHb07F6qHIu1lV0TjkBPZNU29g4GcRWdof6ar"
              alt="Space Café detail 4"
              className="w-full h-full object-cover object-bottom"
            />
          </div>
          <div className="aspect-[4/3]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTt1zQ1xurEmMoiqkdxyP8n3stpQGlWzIguDj1Z"
              alt="Space Café detail 5"
              className="w-full h-full object-cover object-bottom"
            />
          </div>
        </div>

        {/* Third Row - Single Large Horizontal Image */}
        <div className="aspect-[16/9]">
          <img
            src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtsc6glbXNni0DyxpJo17bECqTl2uej8k6mY49"
            alt="Space Café detail 6"
            className="w-full h-full object-cover object-bottom"
          />
        </div>
      </div>
    </ProjectTemplate>
  );
}
