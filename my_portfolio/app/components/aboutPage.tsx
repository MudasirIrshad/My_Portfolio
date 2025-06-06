"use client";
import React from "react";

function AboutPage() {
  return (
    <div className="min-h-screen px-6 py-20 bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-black transition-colors duration-500">
      <div className="max-w-5xl mx-auto space-y-12 text-gray-800 dark:text-gray-200">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Learn more about my journey, skills, and what drives my work in
            software development.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-10">
          {/* Story */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">👋 Who I Am</h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              I’m <strong>Mudasir Irshad</strong>, a full-stack developer with a
              love for clean code and smart design. My journey began with
              curiosity and turned into a passion for building scalable, modern
              web applications using technologies like <strong>React</strong>,{" "}
              <strong>Next.js</strong>, <strong>TypeScript</strong>, and
              <strong> Node.js</strong>.
            </p>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">🛠️ What I Do</h2>
            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 dark:text-gray-300">
              <li>
                Build dynamic user interfaces with React, Tailwind CSS, and
                Next.js
              </li>
              <li>
                Develop scalable APIs with Node.js, Express, and TypeScript
              </li>
              <li>Manage databases like PostgreSQL and MongoDB</li>
              <li>
                Focus on performance, maintainability, and clean architecture
              </li>
              <li>Deploy full-stack applications to production with CI/CD</li>
            </ul>
          </section>

          {/* Values */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">💡 My Values</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I believe in continuous learning, clear communication, and writing
              code that future developers can love. Whether working solo or in a
              team, I strive to deliver value through every line of code I
              write.
            </p>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <h3 className="text-xl font-semibold mb-2">🚀 Let's Connect</h3>
            <p className="text-md text-gray-600 dark:text-gray-400">
              If you're looking to collaborate, discuss a project, or just say
              hi — feel free to reach out!
            </p>
            <a
              href="mailto:mudasirirshad47@gmail.com?subject=Let's%20Connect&body=Hi%20Mudasir,"
              className="inline-block mt-4 px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Contact Me
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
