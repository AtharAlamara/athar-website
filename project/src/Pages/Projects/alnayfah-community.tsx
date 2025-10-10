// src/Pages/Projects/alnayfah-community.tsx
import React from 'react';
import ProjectTemplate from '../../Components/ProjectTemplate';

export default function Project4() {
  return (
    <ProjectTemplate
      projectSlug="/projects/alnayfah-community"
      nextSlug="alolaya-apartment"
    >
      {/* Project Images Grid */}
      <div className="mt-16 space-y-8">
        {/* First Row - Two Vertical Images (cropped bottom 1/4) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTt54NP0mLo4AGrMJHhYKm3gLkawENcRpdTxev0"
              alt="Al-Nayfah Compound detail 1"
              className="w-full h-[110%] object-cover object-top"
            />
          </div>
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtDV4ti24LPw73KrWQM90BTl2yox1meqdgXGzv"
              alt="Al-Nayfah Compound detail 2"
              className="w-full h-[110%] object-cover object-top"
            />
          </div>
        </div>

        {/* Second Row - Two Vertical Images (cropped bottom 1/4) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtBtSYcmetPlFrqGoQeY156fncgpARx8z4ahNj"
              alt="Al-Nayfah Compound detail 3"
              className="w-full h-[110%] object-cover object-top"
            />
          </div>
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtz8GUTS4VOYoqlE8KBP1etFvkZn6fRJNjQwIW"
              alt="Al-Nayfah Compound detail 4"
              className="w-full h-[110%] object-cover object-top"
            />
          </div>
        </div>

        {/* Third Row - Two Vertical Images (cropped bottom 1/4) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtZfgrm1zIwQ42fTitNUoEO7HnMs6muXZFWAgq"
              alt="Al-Nayfah Compound detail 5"
              className="w-full h-[110%] object-cover object-top"
            />
          </div>
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtWJOjSDwtiXDPEsxpnmcaLQy2Wwlk9HTjSZqN"
              alt="Al-Nayfah Compound detail 6"
              className="w-full h-[110%] object-cover object-top"
            />
          </div>
        </div>

        {/* Fourth Row - Two Vertical Images (cropped bottom 1/4) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtB0ygiHetPlFrqGoQeY156fncgpARx8z4ahNj"
              alt="Al-Nayfah Compound detail 9"
              className="w-full h-[110%] object-cover object-top"
            />
          </div>
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtT0kMtzFg0SOit9Ckny3R7jfb2vIrc8xQPopW"
              alt="Al-Nayfah Compound detail 10"
              className="w-full h-[110%] object-cover object-top"
            />
          </div>
        </div>

        {/* Fifth Row - Two Vertical Images (cropped bottom 1/4) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtbujKb2V8cxkWw7TeioYSGsFjdNJRMOvyh5q4"
              alt="Al-Nayfah Compound detail 11"
              className="w-full h-[110%] object-cover object-top"
            />
          </div>
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtm3N70g125OmpJw0Ngx8nC7rvoQfIdPyLiHDY"
              alt="Al-Nayfah Compound detail 12"
              className="w-full h-[110%] object-cover object-top"
            />
          </div>
        </div>
      </div>
    </ProjectTemplate>
  );
}
