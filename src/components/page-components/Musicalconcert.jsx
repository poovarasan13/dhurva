import React from 'react';

const MusicalConcert = () => {
    return (
        <div className="min-h-screen bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Image Section */}
            <div className="relative overflow-hidden rounded-2xl md:order-first order-last">
                <img
                src="https://www.kcedhruva.in/assets/melody-evening/dhurva_2k23_priyanka_n_k.jpg"
                alt="Musical Concert"
                className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
            </div>

            {/* Content Section */}
            <div className="md:py-4">
                <h2 className="text-indigo-700 text-2xl sm:text-3xl font-bold mb-4 md:mb-6">
                Musical Concert
                </h2>
                <p className="text-gray-600 sm:text-lg mb-6 md:mb-8">
                Get ready for an unforgettable evening of musical exploration as we present Melodic
                Evening, a unique concert that showcases the rich tapestry of ethnic music and the
                esteemed presence of our distinguished guests.
                </p>
                <p className="text-gray-600 sm:text-lg mb-6 md:mb-8">
                Our event will transport you to a world of diverse musical traditions, with a focus on
                the sounds and styles of various cultures. The event will feature a fusion of music and
                dance that will immerse you in the vibrant atmosphere. The concert will be performed by
                the esteemed and sparkling "Chemmeen Band" from Kochi. Get ready to vibe with us on
                16/03/2024 at KCE DHRUVA 2024.
                </p>
                <p className="text-gray-600 sm:text-lg mb-6 md:mb-8">
                Join us for an unforgettable evening as we welcome our renowned singer "Priya Jerson,"
                known for her exceptional talent and as a significant figure in Super Singer, at our
                concert. Experience her mesmerizing voice and be captivated by her performance!
                </p>
                <p className="text-gray-600 sm:text-lg mb-6 md:mb8">
                Get ready to groove to the beats of our dynamic DJ at the concert.
                </p>
                <div>
                <a
                    href="#"
                    className="inline-block bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-full outline-none transition duration-100 px-8 py-3"
                >
                    Register Now
                </a>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    };

export default MusicalConcert;
