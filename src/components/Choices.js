import React from "react";

const Choices = ({ handleChoice }) => {
  const handleClick = (name) => {
    handleChoice(name);
  };
  return (
    <div className="space-y-3 space-x-3">
      <button
        className="bg-white shadow overflow-hidden rounded-md px-6 py-4 hover:text-white hover:bg-green-600 cursor-pointer"
        onClick={() => {
          handleClick("title");
        }}
      >
        Title and description
      </button>
      <button
        className="bg-white shadow overflow-hidden rounded-md px-6 py-4 hover:text-white hover:bg-green-600 cursor-pointer"
        onClick={() => {
          handleClick("array");
        }}
      >
        Array
      </button>
      <button
        className="bg-white shadow overflow-hidden rounded-md px-6 py-4 hover:text-white hover:bg-green-600 cursor-pointer"
        onClick={() => {
          handleClick("badges");
        }}
      >
        Badges
      </button>
      <button
        className="bg-white shadow overflow-hidden rounded-md px-6 py-4 hover:text-white hover:bg-green-600 cursor-pointer"
        onClick={() => {
          handleClick("author");
        }}
      >
        Author
      </button>
      <button
        className="bg-white shadow overflow-hidden rounded-md px-6 py-4 hover:text-white hover:bg-green-600 cursor-pointer"
        onClick={() => {
          handleClick("install");
        }}
      >
        Installation
      </button>
      <button
        className="bg-white shadow overflow-hidden rounded-md px-6 py-4 hover:text-white hover:bg-green-600 cursor-pointer"
        onClick={() => {
          handleClick("logo");
        }}
      >
        Logo/Image
      </button>
      <button
        className="bg-white shadow overflow-hidden rounded-md px-6 py-4 hover:text-white hover:bg-green-600 cursor-pointer"
        onClick={() => {
          handleClick("example");
        }}
      >
        Code
      </button>
      <button
        className="bg-white shadow overflow-hidden rounded-md px-6 py-4 hover:text-white hover:bg-green-600 cursor-pointer"
        onClick={() => {
          handleClick("divider");
        }}
      >
        Divider
      </button>
      <button
        className="bg-white shadow overflow-hidden rounded-md px-6 py-4 hover:text-white hover:bg-green-600 cursor-pointer"
        onClick={() => {
          handleClick("link");
        }}
      >
        Link
      </button>
      <button
        className="bg-white shadow overflow-hidden rounded-md px-6 py-4 hover:text-white hover:bg-green-600 cursor-pointer"
        onClick={() => {
          handleClick("footer");
        }}
      >
        Footer
      </button>
      <button
        className="bg-white shadow overflow-hidden rounded-md px-6 py-4 hover:text-white hover:bg-green-600 cursor-pointer"
        onClick={() => {
          handleClick("chapter");
        }}
      >
        Chapter
      </button>
    </div>
  );
};

export default Choices;
