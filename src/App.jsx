import React, { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false); // Hide the splash screen
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      {showSplash ? (
        <SplashScreen onComplete={handleSplashComplete} />
      ) : (
        <div className="bg-white dark:bg-[#0a192f] min-h-screen">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Hero />
          <Skills />
          <Portfolio />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
