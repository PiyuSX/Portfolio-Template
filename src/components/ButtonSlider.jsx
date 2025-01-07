import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

const ButtonSlider = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        isVisible && (
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="fixed bottom-24 right-4 z-50" // Added z-50 for higher z-index
            >
                <button
                    className="bg-purple-600 text-white p-4 rounded-full hover:bg-purple-700 transition-colors"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <FaArrowUp />
                </button>
            </motion.div>
        )
    );
};

export default ButtonSlider;
