// src/components/Sidebar.js
import React from 'react';

const Sidebar = () => {
  return (
    <aside className="bg-gray-800 text-white h-screen w-64 py-8 px-4 shadow-lg">
      <nav className="space-y-4">
        <a href="#dashboard" className="block py-2 px-4 rounded hover:bg-gray-700 hover:text-blue-400 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
          Dashboard
        </a>
        <a href="#inventory" className="block py-2 px-4 rounded hover:bg-gray-700 hover:text-green-400 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
          Inventory
        </a>
        <a href="#settings" className="block py-2 px-4 rounded hover:bg-gray-700 hover:text-purple-400 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
          Settings
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;
