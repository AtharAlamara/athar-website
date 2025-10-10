// src/Pages/Projects/ceo-office.tsx
import React from 'react';
import ProjectTemplate from '../../Components/ProjectTemplate';

export default function Project8() {
  return (
    <ProjectTemplate
      projectSlug="/projects/ceo-office"
      nextSlug="sakinah-villa"
    >
      {/* Project Images Grid */}
      <div className="mt-16 space-y-8">
        {/* First Row - Two Vertical Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="aspect-[3/5]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtKZTid2GwrOcfIhNKdVBbY47UyxEsjRgz8nT6"
              alt="CEO Office detail 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[3/5]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtTblnYTFg0SOit9Ckny3R7jfb2vIrc8xQPopW"
              alt="CEO Office detail 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Second Row - Two Vertical Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="aspect-[3/5]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtAfaE5JBqyzTtgxecSQfIm72pFYkLWlJ63Rd9"
              alt="CEO Office detail 4"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[3/5]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtirJv8ofcbVits87eYDgj5G4zflHLph1QRuxw"
              alt="CEO Office detail 5"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </ProjectTemplate>
  );
}
