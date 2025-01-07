import React, { useState, useEffect } from 'react';

const SplashScreen = ({ onComplete = () => {} }) => {
    const [isOffline, setIsOffline] = useState(false);
    const [animate, setAnimate] = useState(false);
    const [blur, setBlur] = useState(false);
    const [hideText, setHideText] = useState(false);

    useEffect(() => {
        const handleOffline = () => setIsOffline(true);
        const handleOnline = () => setIsOffline(false);

        window.addEventListener('offline', handleOffline);
        window.addEventListener('online', handleOnline);

        const timer = setTimeout(() => {
            setAnimate(true);
            setHideText(true); // Hide text when animation starts
            setTimeout(() => {
                setBlur(true);
                setTimeout(() => {
                    onComplete(); // Notify when splash screen is done
                }, 1000); // Delay to allow blur animation to complete
            }, 1000); // Delay to allow enlarge animation to complete
        }, 2000); // Start animation after 2 seconds

        return () => {
            clearTimeout(timer); // Cleanup the timer
            window.removeEventListener('offline', handleOffline);
            window.removeEventListener('online', handleOnline);
        };
    }, [onComplete]);

    return (
        <div className={`flex items-center justify-center bg-gray-100 dark:bg-[#0a192f] h-screen ${animate ? 'animate' : ''}`}>
            {isOffline ? (
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-black dark:text-white">No Internet</h1>
                    <img src="https://www.google.com/logos/doodles/2017/st-georges-day-2017-5636032355186688-5721030323662848-ror.gif" alt="Dinosaur" />
                </div>
            ) : (
                <div className={`text-center transition-all duration-1000 ${blur ? 'blur-lg' : ''}`}>
                    <img src="/Profile.jpg" alt="Profile" className={`rounded-full mx-auto mb-4 transition-all duration-1000 ${animate ? 'w-full h-full max-w-screen max-h-screen' : 'w-32 h-32'} ${blur ? 'blur-lg' : ''}`} style={{ objectFit: 'contain' }} />
                    {!hideText && (
                        <>
                            <h1 className="text-4xl font-bold text-black dark:text-white">
                                Hello, I am <span className="text-purple-500 dark:text-purple-500">Nitish</span>
                            </h1>
                            <h2 className="text-2xl text-black dark:text-white">A Web Developer And Programmer</h2>
                            <h3 className="text-xl text-black dark:text-white mt-4">Welcome to my site!</h3>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default SplashScreen;
