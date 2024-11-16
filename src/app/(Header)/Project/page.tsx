
"use client";

import { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveLink?: string;
  repoLink?: string;
  npxCommand?: string;
}

const cliProjects: Project[] = [
  { title: "Number Guessing Game", description: "A CLI-based number guessing game built in TypeScript, where players guess the hidden number within limited tries.", techStack: ["TypeScript", "Node.js"], npxCommand: "@muhammadowaisshah/number-guessing-game" },
  { title: "To-Do App CLI", description: "A to-do list application via CLI that allows users to manage list easily.", techStack: ["TypeScript", "Node.js"], npxCommand: "@muhammadowaisshah/to-do-list" },
  { title: "Currency Converter App CLI", description: "Converts currency values in real-time using this simple TypeScript CLI tool.", techStack: ["TypeScript", "Node.js"], npxCommand: "@muhammadowaisshah/currency-convertor" },
  { title: "ATM Machine CLI", description: "Simulates an ATM environment, where users can withdraw and deposit using CLI commands.", techStack: ["TypeScript", "Node.js"], npxCommand: "@muhammadowaisshah/cli-atm-machine" },
  { title: "Words Counter App CLI", description: "Counts words and characters in text files or user input.", techStack: ["TypeScript", "Node.js"], npxCommand: "@muhammadowaisshah/word_counter" },
  { title: "CLI Calculator", description: "A command-line calculator capable of basic arithmetic operations.", techStack: ["TypeScript", "Node.js"], npxCommand: "@muhammadowaisshah/simple-calculator" }
];

const nextJsProjects: Project[] = [
  { title: "AI Portfolio", description: "An interactive, animated AI developer portfolio with responsive design using Next.js.", techStack: ["Next.js", "TypeScript", "Tailwind CSS"], liveLink: "/ai-portfolio", repoLink: "https://github.com/your-username/ai-portfolio" }
];

const cssHtmlProjects: Project[] = [
  { title: "Responsive Layout", description: "A basic but flexible layout made with HTML and CSS, adapting to all screen sizes.", techStack: ["HTML", "CSS"], liveLink: "/responsive-layout", repoLink: "https://github.com/your-username/responsive-layout" }
];

const ProjectSection: FC<{ title: string; description: string; projects: Project[]; isCLI?: boolean }> = ({ title, description, projects, isCLI }) => (
  <section className="mb-16">
    <motion.h2
      className="text-4xl sm:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#2D6A4F] to-[#FFB81C] mb-3"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {title}
    </motion.h2>
    <motion.p
      className="text-center text-[#333333] mb-8 max-w-2xl mx-auto text-lg sm:text-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {description}
    </motion.p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="p-6 rounded-lg bg-[#1F2937] text-white shadow-lg hover:shadow-xl transition-shadow duration-500"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.15 }}
        >
          <h3 className="text-2xl font-semibold mb-2 text-[#FFB81C]">{project.title}</h3>
          <p className="text-[#B4B8B6] mb-3 leading-relaxed">{project.description}</p>
          <ul className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech, techIndex) => (
              <li
                key={techIndex}
                className="bg-[#2D6A4F] text-white px-3 py-1 rounded-full text-sm font-medium"
              >
                {tech}
              </li>
            ))}
          </ul>
          <div className="space-y-2">
            {project.liveLink && (
              <Link href={project.liveLink}>
                <span className="text-[#FFB81C] hover:text-[#FF7043] transition-colors underline cursor-pointer">
                  Live Demo
                </span>
              </Link>
            )}
            {project.repoLink && (
              <Link href={project.repoLink}>
                <span className="text-[#FFB81C] hover:text-[#FF7043] transition-colors underline cursor-pointer">
                  GitHub Repository
                </span>
              </Link>
            )}
            {isCLI && project.npxCommand && (
              <div className="text-[#FFB81C] mt-2">
                Run via NPX: <code className="bg-gray-700 px-2 py-1 rounded">{project.npxCommand}</code>
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

const ProjectsPage: FC = () => (
  <div className="max-w-6xl mx-auto p-6 md:p-8">
    <motion.h1
      className="text-5xl sm:text-6xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#2D6A4F] to-[#FFB81C] mb-6"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Projects
    </motion.h1>
    <motion.p
      className="text-center text-[#333333] mb-12 max-w-3xl mx-auto text-lg sm:text-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      Welcome to my portfolio, where technology meets creativity. I am a passionate developer with expertise in building cutting-edge applications using modern web technologies. Currently, I am expanding my knowledge in <strong>AI Agents</strong>, a field that excites me and promises to revolutionize how we interact with machines.
      <br /><br />
      Explore my projects below to see how I’m combining my passion for development with the exciting possibilities of AI technology.
    </motion.p>
    <ProjectSection title="CLI Projects (TypeScript)" description="TypeScript-powered CLI applications for varied functionalities." projects={cliProjects} isCLI />
    <ProjectSection title="Next.js Projects" description="Next.js projects with a focus on performance and modern UI." projects={nextJsProjects} />
    <ProjectSection title="CSS & HTML Projects" description="Responsive layouts crafted with CSS and HTML for all devices." projects={cssHtmlProjects} />
  </div>
);

export default ProjectsPage;

