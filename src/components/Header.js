import React from "react";

const Header = () => {
  return (
    <div className="md:flex md:items-center md:justify-between mt-4">
      <div className="flex-1 min-w-0">
        <h2 className="text-2xl font-bold leading-7 text-gray-700 sm:text-3xl sm:truncate">
          Write your README
        </h2>
      </div>
      <div className="mt-4 flex md:mt-0 md:ml-4">
        <button
          type="button"
          className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <i className="fas fa-cloud-download-alt"></i>{" "}
          <span className="pl-3">README.md</span>
        </button>
        <button
          type="button"
          className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          <i class="fas fa-eraser"></i> <span className="pl-3">Erase</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
