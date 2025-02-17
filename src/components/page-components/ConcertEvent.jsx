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
                <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-500 madimi">
                    Mega Live In Concert
                </h1>
            </motion.header>

            {/* Hero Section */}
            <motion.section
                className="relative px-6 md:px-16 py-10"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5 }}
            >
                <div className="w-full px-4">
                    <div className="flex flex-wrap items-center justify-between max-w-7xl mx-auto">
                        <div className="w-full md:w-7/12 text-center md:text-left max-w-lg">
                            <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 madimi">
                                Let's Rock!
                            </h2>
                            <p className="mt-4 text-lg md:text-xl font-bold text-gray-700 josefin">
                                KCE Dhruva Events Join us as we bring together vivid minds, visionaries, 
                                and budding talents from all parts of the country to showcase their skills 
                                and passion in a vibrant environment.
                            </p>

                            <div className="mt-6 flex items-center justify-center md:justify-start gap-4">
                                <Calendar className="text-yellow-500" size={24} />
                                <span className="text-lg">March 13, 2025</span>
                            </div>
                        </div>
                        <div className="mt-8 md:mt-0 w-full md:w-5/12">
                            <img
                                src="https://images.unsplash.com/photo-1473396413399-6717ef7c4093?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Concert Crowd"
                                className="rounded-lg shadow-lg w-full h-64 md:h-96 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* About Section */}
            <motion.section
                className="px-6 md:px-16 py-10"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5 }}
            >
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 madimi">
                    Live-in Concert
                </h3>
                <p className="mt-4 text-gray-700 leading-relaxed text-lg md:text-xl josefin">
                    In the embrace of the night, prepare to be swept away by a cascade of harmonies 
                    and rhythms. Our Melody Evening is a tapestry of soul-stirring tunes, carefully 
                    curated to ignite your senses.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                    <img 
                        src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Concert Crowd"
                        className="rounded-lg shadow-lg h-48 w-full object-cover"
                    />
                    <img 
                        src="https://images.unsplash.com/photo-1731007733979-6f3d7b8632ae?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Singer on Stage"
                        className="rounded-lg shadow-lg h-48 w-full object-cover"
                    />
                    <img 
                        src="https://images.unsplash.com/flagged/photo-1590425113058-3a2678b4cdad?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Stage Lighting"
                        className="rounded-lg shadow-lg h-48 w-full object-cover"
                    />
                </div>
            </motion.section>

            {/* General Rules Section */}
            <motion.section
                className="px-6 md:px-16 py-10 bg-gray-100"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5 }}
            >
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 madimi">
                    General Rules
                </h3>
                <ul className="mt-4 text-gray-700 list-disc space-y-3 pl-6 md:pl-8 josefin">
                    <li className="text-lg">Each participant should carry their respective identity proof.</li>
                    <li className="text-lg">Participants should refrain from abusive language and obscene displays.</li>
                    <li className="text-lg">Event organizers have the right to deny entry to anyone.</li>
                    <li className="text-lg">Consumption of alcohol is strictly prohibited.</li>
                </ul>
            </motion.section>

            {/* Social Links */}
            <div className="flex justify-center gap-6 py-8">
                <Facebook className="w-8 h-8 cursor-pointer hover:text-blue-600 transition-colors" />
                <Instagram className="w-8 h-8 cursor-pointer hover:text-pink-600 transition-colors" />
                <Twitter className="w-8 h-8 cursor-pointer hover:text-blue-400 transition-colors" />
            </div>
        </div>
    );
};

export default ConcertEvent;