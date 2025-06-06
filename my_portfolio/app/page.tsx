"use client";
import { motion } from "framer-motion";
import HomePage from "./components/homePage";
import AboutPage from "./components/aboutPage";
import ProjectsPage from "./components/projectPage";
export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      }}
    >
      <main>
        <section id="home" className="min-h-screen">
          <HomePage />
        </section>

        <section id="about" className="min-h-screen">
          <AboutPage />
        </section>

        <section id="projects" className="min-h-screen">
          <ProjectsPage />
        </section>
      </main>
    </motion.div>
  );
}
