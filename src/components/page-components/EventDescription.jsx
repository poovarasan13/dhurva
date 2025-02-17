import React from 'react';
import { motion } from 'framer-motion';

const EventDescription = () => {
  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
      <div className="flex flex-wrap -m-1 md:-m-2">
        {/* Image Gallery (50% width on all screens) */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex w-1/2 flex-wrap">
              {[
                'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp',
                'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp',
                'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp',
              ].map((src, index) => (
                <motion.div
                  key={index}
                  className={`w-${index === 2 ? 'full' : '1/2'} p-1 md:p-2`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={src}
                  />
                </motion.div>
              ))}
            </div>
            <div className="flex w-1/2 flex-wrap">
              {[
                'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp',
                'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp',
                'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp',
              ].map((src, index) => (
                <motion.div
                  key={index}
                  className={`w-${index === 0 ? 'full' : '1/2'} p-1 md:p-2`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={src}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Content Section (50% width on all screens) */}
        <motion.div
          className="w-full md:w-1/2 p-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="text-3xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Unleash Your Potential at [Event Name]
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Join us for an immersive experience designed to ignite your
            passion, expand your knowledge, and connect you with industry
            leaders. Get ready to transform your perspective and elevate your
            career.
          </motion.p>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            {[
              { title: 'Expert Speakers', desc: 'Learn from the best in the field' },
              { title: 'Interactive Workshops', desc: 'Hands-on sessions to sharpen your skills' },
              { title: 'Networking Opportunities', desc: 'Connect with peers and potential mentors' },
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <strong>{item.title}:</strong> {item.desc}
              </motion.li>
            ))}
          </ul>
          <div className="flex items-center justify-start">
            <motion.button
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-full transition duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Register Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default EventDescription;