import React from "react";

const Template = ({ handleTemplate }) => {
  const handleClick = (name) => {
    handleTemplate(name);
  };
  return (
    <div className="space-y-3 space-x-3">
      <button
        className="bg-white shadow overflow-hidden rounded-md px-6 py-4 hover:text-white hover:bg-green-600 cursor-pointer"
        onClick={() => {
          handleClick("full_project");
        }}
      >
        Full project
      </button>
      <button
        className="bg-white shadow overflow-hidden rounded-md px-6 py-4 hover:text-white hover:bg-green-600 cursor-pointer"
        onClick={() => {
          handleClick("full_summary");
        }}
      >
        Full summary
      </button>
      <button
        className="bg-white shadow overflow-hidden rounded-md px-6 py-4 hover:text-white hover:bg-green-600 cursor-pointer"
        onClick={() => {
          handleClick("full_tp");
        }}
      >
        Full TP
      </button>
    </div>
  );
};

export default Template;
