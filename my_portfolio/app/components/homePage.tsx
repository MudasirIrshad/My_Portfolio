"use client";
import React from "react";
import SplitText from "./_components/SplitText";
import Typewriter from "react-ts-typewriter";
import Image from "next/image";
import myimage from "../public/images/myimage.jpeg";
function HomePage() {
  return (
    <div className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center px-6 py-20 bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-black transition-colors duration-500">
      {/* Text Section */}
      <div className="flex-1 max-w-2xl w-full text-left space-y-6 lg:pr-16">
        <SplitText />

        <div className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-semibold">
          <Typewriter
            text={[
              "Full-Stack Developer",
              "React | Next.js | TypeScript",
              "Node.js | PostgreSQL | MongoDB",
            ]}
            loop
            speed={60}
            delay={1500}
          />
        </div>

        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mt-4">
          I’m <strong>Mudasir Irshad</strong>, a passionate software developer
          focused on building high-quality, scalable web apps. I love turning
          complex problems into clean and efficient code using modern tech
          stacks.
        </p>

        <p className="text-gray-600 dark:text-gray-400 text-md">
          My expertise lies in crafting dynamic frontends with React/Next.js and
          building powerful APIs with Node.js, TypeScript, and databases like
          PostgreSQL or MongoDB.
        </p>
      </div>

      {/* Image Section with Spinning Lines Border */}
      <div className="w-full hidden md:flex lg:w-auto justify-center items-center mb-12 lg:mb-0">
        <div className="relative w-80 h-80 flex items-center justify-center">
          {/* Spinning container for lines */}
          <div className="absolute w-full h-full animate-spin">
            {/* Top Line */}
            <div className="absolute w-1 h-6 bg-blue-500 top-0 left-1/2 -translate-x-1/2 rounded-full"></div>
            {/* Right Line */}
            <div className="absolute w-1 h-6 bg-purple-500 right-0 top-1/2 -translate-y-1/2 rounded-full"></div>
            {/* Bottom Line */}
            <div className="absolute w-1 h-6 bg-pink-500 bottom-0 left-1/2 -translate-x-1/2 rounded-full"></div>
            {/* Left Line */}
            <div className="absolute w-1 h-6 bg-yellow-500 left-0 top-1/2 -translate-y-1/2 rounded-full"></div>
          </div>

          {/* Optional subtle glow ring */}
          <div className="absolute inset-0 rounded-full ring-2 ring-purple-500 opacity-20 blur-sm"></div>

          {/* Profile Image */}
          <Image
            src={myimage}
            alt="Mudasir Irshad"
            width={288} // width in px (72 * 4)
            height={288}
            className="w-72 h-72 object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-2xl z-10"
            onError={(e) => {
              e.currentTarget.src = "/fallback-image.jpeg";
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
