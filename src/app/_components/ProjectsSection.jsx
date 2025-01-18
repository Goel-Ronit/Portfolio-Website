"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "TaskNest",
    description: "TaskNest is a note-taking application build with Next.js, React.js, Convex, and Blocknote.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Goel-Ronit/Web-Development-8",
    previewUrl: "https://tasknest-eight.vercel.app/",
  },
  {
    id: 2,
    title: "Board (Applications For Collaborators)",
    description: "Board is a real-time collaborative whiteboard application, designed for team brainstorming and project planning.",
    image: "/images/projects/2.png",
    gitUrl: "https://github.com/Goel-Ronit/Web-Development-7",
    previewUrl: "https://board-colab.vercel.app/",
  },
  {
    id: 3,
    title: "Travel Online",
    description: "Application for users to book or list properties with seamless authentication and filtering features, built using React.js, Next.js, and MongoDB.",
    image: "/images/projects/3.jpg",
    gitUrl: "https://github.com/Goel-Ronit/Web-Development-6",
    previewUrl: "https://travel-online.vercel.app/",
  },
  {
    id: 4,
    title: "SwiftCart",
    description: "Swiftcart is a full-stack e-commerce platform built with React.js, Next.js, MongoDB, Prisma, and NextAuth.",
    image: "/images/projects/4.png",
    gitUrl: "https://github.com/Goel-Ronit/WebDevelopment-5",
    previewUrl: "https://swiftcart-mauve.vercel.app/",
  },
  {
    id: 5,
    title: "Recipe Finder App",
    description: "A Web App Built On HTML, CSS and Javascript to discover delicious recipes tailored to your ingredients.",
    image: "/images/projects/5.jpeg",
    gitUrl: "https://github.com/Goel-Ronit/WebDevelopment-4",
    previewUrl: "https://goel-ronit.github.io/WebDevelopment-4/",
  },
  {
    id: 6,
    title: "Snake Game",
    description: "A Web Game Built On HTML, CSS and Javascript.",
    image: "/images/projects/6.png",
    gitUrl: "https://github.com/Goel-Ronit/WebDevelopment-2",
    previewUrl: "https://goel-ronit.github.io/WebDevelopment-2/",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
