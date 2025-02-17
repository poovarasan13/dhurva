'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Facebook, Instagram, Twitter } from 'lucide-react';

const ConcertEvent = () => {
    // Animation variants for different sections
    const headerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    };

    const sectionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="bg-white text-black min-h-screen">
            {/* Header Section */}
            <motion.header
                className="text-center py-6 border-b border-gray-300"
                initial="hidden"
                animate="visible"
                variants={headerVariants}
                transition={{ duration: 0.5 }}
            >
                <div className="flex justify-center gap-8 mb-4">
                    <img src="https://www.kcedhruva.in/assets/img/logo-color.png" alt="Dhruva Logo" className="h-16" />
                    <img src="https://kce.ac.in/new/wp-content/uploads/2025/01/footer-logo.png" alt="NSR Logo" className="h-16" />
                </div>
                <h1 className="text-5xl font-extrabold text-yellow-500 pacifico-regular">Mega Live In Concert</h1>
                <div className="flex justify-center gap-4 mt-4">
                    <Facebook className="text-2xl cursor-pointer hover:text-blue-500 transition-colors duration-200" />
                    <Instagram className="text-2xl cursor-pointer hover:text-pink-500 transition-colors duration-200" />
                    <Twitter className="text-2xl cursor-pointer hover:text-blue-400 transition-colors duration-200" />
                </div>
            </motion.header>

            {/* Hero Section */}
            <motion.section
                className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5 }}
            >
                <div className="text-center md:text-left max-w-lg">
                    <h2 className="text-4xl font-bold text-yellow-500 pacifico-regular">Let's Rock!</h2>
                    <p className="mt-4 text-gray-700 josefin">
                        KCE Dhruva Events Join us as we bring together vivid minds, visionaries and budding talents from all parts of the country to showcase their skills and passion in a vibrant environment.
                        Get ready to witness and celebrate creative innovation at Dhruva 2024 – a technical and cultural fest, organized by Karpagam College of Engineering. Prepare yourself for an unforgettable journey filled with electrifying tech competitions, mesmerizing cultural performances, and much more!
                    </p>
                    <div className="mt-6 flex items-center justify-center md:justify-start gap-4">
                        <Calendar className="text-yellow-500" />
                        <span className="text-lg">March 13, 2025</span>
                    </div>
                </div>
                <div className="mt-6 md:mt-0">
                    <img
                        src="https://images.unsplash.com/photo-1473396413399-6717ef7c4093?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGN1bHR1cmFsJTIwZXZlbnR8ZW58MHx8MHx8fDA%3D"
                        alt="Concert Crowd"
                        className="rounded-lg shadow-lg w-full max-w-md"
                    />
                </div>
            </motion.section>

            {/* About Section */}
            <motion.section
                className={`px-6 md:px-16 py-10`}
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5 }}
            >
                <h3 className="text-3xl font-bold text-yellow-500 pacifico-regular">Live-in Concert</h3>
                <p className="mt-4 text-gray-700 leading-relaxed josefin">
                    In the embrace of the night, prepare to be swept away by a cascade of harmonies and rhythms. Our Melody Evening is a tapestry of soul-stirring tunes, carefully curated to ignite your senses and transport you to a realm where every note carries a story, and every melody paints a picture.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                    <img src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGV2ZW50fGVufDB8fDB8fHww" alt="Concert Crowd" className="rounded-lg shadow-lg" />
                    <img src="https://images.unsplash.com/photo-1731007733979-6f3d7b8632ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2luZ2luZyUyMGV2ZW50fGVufDB8fDB8fHww" alt="Singer on Stage" className="rounded-lg shadow-lg" />
                    <img src="https://images.unsplash.com/flagged/photo-1590425113058-3a2678b4cdad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN0YWdlfGVufDB8fDB8fHww" alt="Stage Lighting" className="rounded-lg shadow-lg" />
                </div>
            </motion.section>

            {/* General Rules Section */}
            <motion.section
                className={`px-6 md:px-16 py-10 bg-gray-100`}
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5 }}
            >
                <h3 className="text-3xl font-bold text-yellow-500 pacifico-regular">General Rules</h3>
                <ul className="mt-4 text-gray-700 list-disc pl-[26px] space-y-[6px] josefin">
                    <li>Each participant should carry their respective identity proof.</li>
                    <li>Participants should refrain from abusive language, obscene displays, and revealing costumes during the event.</li>
                    <li>Event organizers have the right to deny entry to anyone who fails to adhere to the rules.</li>
                    <li>Consumption of alcohol and other banned substances is strictly prohibited.</li>
                </ul>
            </motion.section>
        </div>
    );
};

export default ConcertEvent;
