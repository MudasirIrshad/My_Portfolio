"use client";
import React from "react";
import Typewriter from "react-ts-typewriter";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Learning Management System",
    description:
      "A full-featured LMS platform with user roles (students, teachers, admins), video lectures, progress tracking, and payment transaction. Built using Next.js, Typescript, Node.js, and PostgreSQL.",
    tech: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "ShadCN",
      "TypeScript",
    ],
    link: "https://github.com/MudasirIrshad/Learning-Management-System",
  },
  {
    title: "Social Media App",
    description:
      "A real-time social media platform where users can post, comment, and follow. Built with Next.js, PostgreSQL, and Tailwind CSS, with support for image uploads and notifications.",
    tech: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "ShadCN",
      "TypeScript",
    ],
    link: "https://social-media-app-rust-iota.vercel.app/",
  },
  {
    title: "SchoolRave 'Final Year Project'",
    description:
      "A digital platform for schools to manage online admissions, application tracking, and review/rating system. Backend powered by PostgreSQL.",
    tech: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "ShadCN",
      "TypeScript",
    ],
    link: "https://github.com/MudasirIrshad/SchoolRave-FYP-",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen px-6 py-24 bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-800 dark:text-gray-200">
          <Typewriter text="I have successfully developed" loop speed={100} />
        </h1>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 group"
            >
              <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3 group-hover:underline">
                {project.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
              >
                View Project
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
