import React from 'react';
import { motion } from 'framer-motion';
import ButtonSlider from './ButtonSlider';

const slides = [
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", alt: "Java" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg", alt: "Vite" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", alt: "Next.js" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg", alt: "Go" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", alt: "TypeScript" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", alt: "Angular" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", alt: "MongoDB" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", alt: "Vue.js" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", alt: "VS Code" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", alt: "GitHub" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg", alt: "Swift" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", alt: "C" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", alt: "C++" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", alt: "Firebase" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", alt: "Docker" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", alt: "Kubernetes" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg", alt: "Ruby" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", alt: "PHP" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", alt: "MySQL" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg", alt: "Scala" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", alt: "Redis" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg", alt: "Sass" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg", alt: "Webpack" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS3" }
];

const duplicatedSlides = [...slides, ...slides];

const Slider = () => {
  return (
    <div className="relative w-full overflow-hidden hidden lg:block" style={{ marginTop: '-10vh' }}>
      <motion.div
        className="flex"
        animate={{
          x: ['0%', '-100%'],
          transition: {
            ease: 'linear',
            duration: 11,
            repeat: Infinity
          }
        }}
      >
        {duplicatedSlides.map((slide, index) => (
          <div key={index} className="flex-shrink-0" style={{ width: `${100 / slides.length}%` }}>
            <div className="flex flex-col items-center justify-center h-full">
              <img src={slide.icon} alt={slide.alt} className="h-8 w-8 opacity-70" />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-16 relative">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <h3 className="text-purple-600 text-lg mb-2">ASPIRING WEB DEVELOPER 👋</h3>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Transform Your Tech Journey with Nitish
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Join me on a journey that bridges the gap between academic learning and professional excellence in web development.
          </p>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
            Find Out More
          </button>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 mt-8 md:mt-0"
        >
          <img 
            src="https://www.aceserc.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-image.d985148e.png&w=640&q=75" 
            alt="Developer" 
            className="w-full"
          />
        </motion.div>
      </div>
      <Slider />
      <ButtonSlider />
    </div>
  );
};

export default Hero;
