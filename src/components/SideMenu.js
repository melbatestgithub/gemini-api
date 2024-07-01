// src/components/SideMenu.js
import React from 'react';

function SideMenu() {
  return (
    <div className="w-20 bg-gray-700 text-white p-6 flex flex-col items-center">
      <button className="mb-6 w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-2xl">
        +
      </button>
      <button className="mb-6 w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-2xl">
        ?
      </button>
      <button className="mb-6 w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-2xl">
        ↻
      </button>
    </div>
  );
}

export default SideMenu;
