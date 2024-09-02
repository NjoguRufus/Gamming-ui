// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center shadow-lg">
      <div className="text-xl font-bold">GameTitle</div>
      <div className="flex space-x-4">
        <button className="py-2 px-4 bg-blue-500 rounded hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-blue-500/50">
          Home
        </button>
        <button className="py-2 px-4 bg-green-500 rounded hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-green-500/50">
          Profile
        </button>
        <button className="py-2 px-4 bg-purple-500 rounded hover:bg-purple-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-purple-500/50">
          Settings
        </button>
      </div>
    </header>
  );
}

export default Header;
