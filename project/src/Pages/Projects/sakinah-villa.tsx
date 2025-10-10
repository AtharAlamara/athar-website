// src/Pages/Projects/sakinah-villa.tsx
import React from 'react';
import ProjectTemplate from '../../Components/ProjectTemplate';

export default function Project9() {
  return (
    <ProjectTemplate
      projectSlug="/projects/sakinah-villa"
      nextSlug="glow-spa"
    >
      {/* Project Images Grid */}
      <div className="mt-16 space-y-8">
        {/* First Row - Two Horizontal Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="aspect-[4/3]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtHSNDWaqHIu1lV0TjkBPZNU29g4GcRWdof6ar"
              alt="Sakinah Villa detail 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtscX3XsSNni0DyxpJo17bECqTl2uej8k6mY49"
              alt="Sakinah Villa detail 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Second Row - Two Vertical Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="aspect-[3/5]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtxlNrbkHjegRM3wv9DYo1fsrmQpyJFN4hBGnc"
              alt="Sakinah Villa detail 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[3/5]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtfdO8O4jycZjuFxPyldm6w08WS34zoshaYeRQ"
              alt="Sakinah Villa detail 4"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Third Row - Single Horizontal Image */}
        <div className="aspect-[16/9]">
          <img
            src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtRxSAfobasyJRoDmA4vpVjN1HYUn52CWOQPgq"
            alt="Sakinah Villa detail 9"
            className="w-full h-full object-cover object-bottom"
          />
        </div>

        {/* Fourth Row - Two Horizontal Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="aspect-[4/3]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtzNAdUqS4VOYoqlE8KBP1etFvkZn6fRJNjQwI"
              alt="Sakinah Villa detail 6"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtKX4b4jGwrOcfIhNKdVBbY47UyxEsjRgz8nT6"
              alt="Sakinah Villa detail 7"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Fifth Row - Single Horizontal Image */}
        <div className="aspect-[16/9]">
          <img
            src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtK8Me3eGwrOcfIhNKdVBbY47UyxEsjRgz8nT6"
            alt="Sakinah Villa detail 9"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Sixth Row - Two Vertical Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="aspect-[3/5]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtyAfif9OgWmcp58hljF9XK0PnvQaowixZq2zD"
              alt="Sakinah Villa detail 10"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[3/5]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtqhcCWl5afN5SMmPvhKDoJIycb2GWukwr4nTB"
              alt="Sakinah Villa detail 11"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Eighth Row - Two Vertical Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="aspect-[3/5]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTt3nJcSVlzT14wWsaKpBehUvJ9nYFdoLCQi7Nr"
              alt="Sakinah Villa detail 12"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[3/5]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtweRGBT8icNoO5gJCH6Lev01XRKY2zkfTS34A"
              alt="Sakinah Villa detail 13"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </ProjectTemplate>
  );
}
