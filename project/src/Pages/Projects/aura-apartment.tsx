// src/Pages/Projects/aura-apartment.tsx
import React from 'react';
import ProjectTemplate from '../../Components/ProjectTemplate';

export default function Project7() {
  return (
    <ProjectTemplate
      projectSlug="/projects/aura-apartment"
      nextSlug="ceo-office"
    >
      {/* Project Images Grid */}
      <div className="mt-16 space-y-8">
        {/* First Row - Two Vertical Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="aspect-[3/5]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtkA0Y3UT5wUsRrfG1tAi0XCE8dzWkBF93bZcK"
              alt="Aura Apartment detail 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[3/5]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtTIWLbKFg0SOit9Ckny3R7jfb2vIrc8xQPopW"
              alt="Aura Apartment detail 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Second Row - Two Vertical Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="aspect-[3/5]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtz0uxWA4VOYoqlE8KBP1etFvkZn6fRJNjQwIW"
              alt="Aura Apartment detail 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[3/5]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtUvIxnho7UDdSu4zjNVOnmb39pqwgZyrRBY56"
              alt="Aura Apartment detail 4"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Third Row - Two Vertical Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="aspect-[3/5]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtVd9U6gWPxwvAJIkTRY1Sqacln507fXbum4sg"
              alt="Aura Apartment detail 5"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[3/5]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtcAWj1yDRfwX5N9Zuihrgpl2TJDnCkdoSyt1q"
              alt="Aura Apartment detail 6"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </ProjectTemplate>
  );
}
