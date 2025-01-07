import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.',
    image: '/project1.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    demoLink: '#',
    codeLink: '#'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag and drop functionality, and team collaboration features.',
    image: '/project2.jpg',
    technologies: ['Next.js', 'Firebase', 'Tailwind CSS', 'React DnD'],
    demoLink: '#',
    codeLink: '#'
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather dashboard that provides real-time weather information, forecasts, and interactive maps using various weather APIs.',
    image: '/project3.jpg',
    technologies: ['React', 'OpenWeather API', 'Chart.js', 'Mapbox'],
    demoLink: '#',
    codeLink: '#'
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-4">
          Portfolio
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Here are some of my recent projects that showcase my skills and experience.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-[#162a46] rounded-lg overflow-hidden shadow-lg"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.demoLink}
                    className="text-purple-600 hover:text-purple-700 dark:text-purple-400"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    className="text-purple-600 hover:text-purple-700 dark:text-purple-400"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;