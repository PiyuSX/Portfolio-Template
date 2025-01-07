import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    title: 'MERN Stack',
    description: 'Full-stack development environment combining MongoDB, Express, React, and Node.',
    icon: [
      'https://img.icons8.com/color/48/mongodb.png',
      'https://img.icons8.com/ios/50/000000/express-js.png',
      'https://img.icons8.com/color/48/react-native.png',
      'https://img.icons8.com/fluency/48/node-js.png'
    ]
  },
  {
    title: 'JavaScript',
    description: 'High-level, often just-in-time compiled, and multi-paradigm programming language.',
    icon: 'https://img.icons8.com/color/48/javascript.png'
  },
  {
    title: 'MongoDB',
    description: 'NoSQL database for modern applications.',
    icon: 'https://img.icons8.com/color/48/mongodb.png'
  },
  {
    title: 'Express.js',
    description: 'Web application framework for Node.js.',
    icon: 'https://img.icons8.com/ios/50/000000/express-js.png'
  },
  {
    title: 'React.js',
    description: 'JavaScript library for building user interfaces.',
    icon: 'https://img.icons8.com/color/48/react-native.png'
  },
  {
    title: 'Node.js',
    description: 'JavaScript runtime built on Chrome\'s V8 JavaScript engine.',
    icon: 'https://img.icons8.com/fluency/48/node-js.png'
  },
  {
    title: 'Next.js',
    description: 'Server-side rendering and static site generation for React applications.',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg'
  },
  {
    title: 'Redux',
    description: 'State management for complex React applications.',
    icon: 'https://img.icons8.com/color/48/redux.png'
  },
  {
    title: 'Firebase',
    description: 'Backend services including authentication, database, and hosting.',
    icon: 'https://img.icons8.com/color/48/firebase.png'
  },
  {
    title: 'C++',
    description: 'Object-oriented programming and system development.',
    icon: 'https://img.icons8.com/color/48/c-plus-plus-logo.png'
  },
  {
    title: 'Python',
    description: 'Data analysis, automation, and backend development.',
    icon: 'https://img.icons8.com/color/48/python--v1.png'
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-[#0c1f3a]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-4">
          My Skills
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Experienced in full-stack development with expertise in various programming languages and frameworks.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-[#162a46] p-6 rounded-lg shadow-lg"
            >
              <div className="mb-4 flex justify-center space-x-2">
                {Array.isArray(skill.icon) ? (
                  skill.icon.map((iconUrl, idx) => (
                    <img key={idx} src={iconUrl} alt={`${skill.title} icon`} className="w-12 h-12" />
                  ))
                ) : (
                  <img src={skill.icon} alt={`${skill.title} icon`} className="w-12 h-12" />
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;