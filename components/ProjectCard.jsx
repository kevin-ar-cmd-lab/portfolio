import React from "react";
import Image from "next/image";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

const ProjectCard = ({ project, index }) => {
  const { darkMode } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true }}
      className={`rounded-xl overflow-hidden shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col ${
        darkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      {/* Image */}
      <div className="h-48 overflow-hidden relative">
        <Image
          src={project.img}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Text Section */}
        <div className="flex-grow">
          <div className="flex justify-between items-center mb-3">
            <h3
              className={`text-xl font-semibold ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              {project.title}
            </h3>

            <span
              className={`text-xs px-3 py-1 rounded-full font-medium ${
                darkMode
                  ? "bg-indigo-700 text-indigo-100"
                  : "bg-indigo-100 text-indigo-800"
              }`}
            >
              {project.tech}
            </span>
          </div>

          <p
            className={`mb-6 text-sm leading-relaxed ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {project.description}
          </p>
        </div>

        {/* CTA Buttons — Always Visible */}
        <div className="flex gap-3">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            <ArrowTopRightOnSquareIcon className="w-4 h-4" />
            Live
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border transition ${
              darkMode
                ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                : "border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
          >
            <CodeBracketIcon className="w-4 h-4" />
            Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
