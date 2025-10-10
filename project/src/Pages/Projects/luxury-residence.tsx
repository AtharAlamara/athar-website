// src/Pages/Projects/luxury-residence.tsx
import React from 'react';
import ProjectTemplate from '../../Components/ProjectTemplate';

export default function Project12() {
  return (
    <ProjectTemplate
      projectSlug="/projects/luxury-residence"
      nextSlug="minimalist-villa"
    >
      {/* Project Images Grid */}
      <div className="mt-16 space-y-8">
        {/* First Row - Single Full-Width Image */}
        <div className="aspect-[16/9]">
          <img
            src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTt8mK8ZBpUAM4SiC6u9rV1JzBWFlwTsXngjypI"
            alt="Luxury Residence detail 1"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Second Row - Single Full-Width Image */}
        <div className="aspect-[16/9]">
          <img
            src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtQv9SiCKseYRaG4HqyPtcznBgDI6LvCrZ2wTx"
            alt="Luxury Residence detail 2"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </ProjectTemplate>
  );
}
