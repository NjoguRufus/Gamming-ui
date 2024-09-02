// src/App.js
import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
