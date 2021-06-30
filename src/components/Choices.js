import React from "react";

const Choices = ({ handleChoice }) => {
  const handleClick = (name) => {
    handleChoice(name);
  };
  return (
    <div className="space-y-3 space-x-3">
      <button
        className="bg-white shadow overflow-hidden rounded-md px-6 py-4 hover:text-white hover:bg-indigo-600 cursor-pointer"
        onClick={() => {
          handleClick("title");
        }}
      >
        Title and description
      </button>
      <button
        className="bg-white shadow overflow-hidden rounded-md px-6 py-4 hover:text-white hover:bg-indigo-600 cursor-pointer"
        onClick={() => {
          handleClick("api");
        }}
      >
        API reference
      </button>
      <button
        className="bg-white shadow overflow-hidden rounded-md px-6 py-4 hover:text-white hover:bg-indigo-600 cursor-pointer"
        onClick={() => {
          handleClick("authors");
        }}
      >
        Authors
      </button>
      <button
        className="bg-white shadow overflow-hidden rounded-md px-6 py-4 hover:text-white hover:bg-indigo-600 cursor-pointer"
        onClick={() => {
          handleClick("deploy");
        }}
      >
        Deployement
      </button>
      <button
        className="bg-white shadow overflow-hidden rounded-md px-6 py-4 hover:text-white hover:bg-indigo-600 cursor-pointer"
        onClick={() => {
          handleClick("install");
        }}
      >
        Installation
      </button>
      <button
        className="bg-white shadow overflow-hidden rounded-md px-6 py-4 hover:text-white hover:bg-indigo-600 cursor-pointer"
        onClick={() => {
          handleClick("logo");
        }}
      >
        Logo
      </button>
      <button
        className="bg-white shadow overflow-hidden rounded-md px-6 py-4 hover:text-white hover:bg-indigo-600 cursor-pointer"
        onClick={() => {
          handleClick("example");
        }}
      >
        Usage/Examples
      </button>
      <button
        className="bg-white shadow overflow-hidden rounded-md px-6 py-4 hover:text-white hover:bg-indigo-600 cursor-pointer"
        onClick={() => {
          handleClick("variable");
        }}
      >
        Environment Variables
      </button>
      <button
        className="bg-white shadow overflow-hidden rounded-md px-6 py-4 hover:text-white hover:bg-indigo-600 cursor-pointer"
        onClick={() => {
          handleClick("section");
        }}
      >
        Section
      </button>
      <button
        className="bg-white shadow overflow-hidden rounded-md px-6 py-4 hover:text-white hover:bg-indigo-600 cursor-pointer"
        onClick={() => {
          handleClick("divider");
        }}
      >
        Divider
      </button>
    </div>
  );
};

export default Choices;
