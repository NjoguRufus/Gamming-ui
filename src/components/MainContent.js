// src/components/MainContent.js
import React from 'react';
import ThreeDCube from './ThreeDCube';
//import ThreeDSphere from './ThreeDSphere';
import { motion } from 'framer-motion';

const MainContent = () => {
  return (
    <main className="flex-1 bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Future</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 3D Cube */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2">3D Interactive Cube</h2>
          <ThreeDCube />
        </div>

        {/* Remove or comment this section */}
        {/* 
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2">3D Interactive Sphere</h2>
          <ThreeDSphere />
        </div> 
        */}

        {/* Example of a futuristic card with animation */}
        <motion.div
          className="bg-gray-800 p-4 rounded-lg shadow-lg"
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <h2 className="text-xl font-semibold mb-2">Player Profile</h2>
          <p className="text-gray-400">Level: 42</p>
          <p className="text-gray-400">Experience: 18,000 XP</p>
          <button className="mt-4 py-2 px-4 bg-blue-500 rounded hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-blue-500/50">
            View Details
          </button>
        </motion.div>
      </div>
    </main>
  );
}

export default MainContent;
