// src/Pages/Projects/glow-spa.tsx
import React from 'react';
import ProjectTemplate from '../../Components/ProjectTemplate';

export default function Project10() {
  return (
    <ProjectTemplate
      projectSlug="/projects/glow-spa"
      nextSlug="indigo-villa"
    >
      {/* Project Images Grid */}
      <div className="mt-16 space-y-8">
        {/* First Row - Two Horizontal Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="aspect-[4/3]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtz2RJ874VOYoqlE8KBP1etFvkZn6fRJNjQwIW"
              alt="Glow Spa detail 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtzXZG0d4VOYoqlE8KBP1etFvkZn6fRJNjQwIW"
              alt="Glow Spa detail 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Second Row - Two Horizontal Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="aspect-[4/3]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtNDS4msG66dDplvfPWVh50xKR1sN7e9cUjYSB"
              alt="Glow Spa detail 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtOLVwY4dVqPrsAn2YG0Ow496xDFlCXeJM758N"
              alt="Glow Spa detail 4"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Third Row - Two Horizontal Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="aspect-[4/3]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtmQA3Xn125OmpJw0Ngx8nC7rvoQfIdPyLiHDY"
              alt="Glow Spa detail 5"
              className="w-full h-full object-cover object-bottom"
            />
          </div>
          <div className="aspect-[4/3]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtYi54Wte2OKR9LniGN7uqc1HXgaydTbFVMP4l"
              alt="Glow Spa detail 6"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Fourth Row - Two Horizontal Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="aspect-[4/3]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtmRHmTY125OmpJw0Ngx8nC7rvoQfIdPyLiHDY"
              alt="Glow Spa detail 7"
              className="w-full h-full object-cover object-bottom"
            />
          </div>
          <div className="aspect-[4/3]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtOZrkaOdVqPrsAn2YG0Ow496xDFlCXeJM758N"
              alt="Glow Spa detail 8"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Fifth Row - Two Horizontal Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="aspect-[4/3]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtsccdgrKNni0DyxpJo17bECqTl2uej8k6mY49"
              alt="Glow Spa detail 9"
              className="w-full h-full object-cover object-bottom"
            />
          </div>
          <div className="aspect-[4/3]">
            <img
              src="https://2sdiz6bji6.ufs.sh/f/A7G6PIBqyzTtuR8dXDEZPg9BSDseXGfwOamrp8LY37zxiHnQ"
              alt="Glow Spa detail 10"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </ProjectTemplate>
  );
}
