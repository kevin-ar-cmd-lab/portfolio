import React from "react";
import { useTheme } from "../context/ThemeContext";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const { darkMode } = useTheme();

  const projects = [
    {
      title: "E-Commerce Web Application",
      tech: "Next.js, Stripe, MongoDB",
      description:
        "A scalable full-stack e-commerce platform featuring secure Stripe payments, authentication, product management, cart logic, and admin analytics dashboard.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1170&q=80",
      live: "https://jumatech-shopper.netlify.app/",
      github: "https://github.com/kevin-ar-cmd-lab/E-commerce-app.git",
    },
    {
      title: "Roadtrip Planner Application",
      tech: "React, Google Maps API, Local Storage",
      description:
        "Interactive trip planning application with dynamic route rendering, itinerary management, place search integration, and persistent trip storage.",
      img: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1170&q=80",
      live: "https://roadtrip-plan.netlify.app/",
      github: "https://github.com/kevin-ar-cmd-lab/roadtrip-planner.git",
    },
  ];

  return (
    <section
      className={`py-16 ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      } transition-colors duration-300`}
      id="projects"
    >
      <div className="container mx-auto px-6 text-center">
        <h2
          className={`text-4xl font-extrabold mb-12 ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
