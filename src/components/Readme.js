import React from "react";
import Choices from "./Choices";
import marked from "marked";

const Readme = ({ handleChoice, handleChange, state }) => {
  return (
    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none h-screen">
      <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div className="flex-1 bg-white p-6 flex flex-col justify-between ">
          <div className="flex-1">
            <p className="text-xl font-medium text-indigo-600 mb-2">Choices</p>
            <Choices handleChoice={handleChoice} />
          </div>
        </div>
      </div>

      <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div className="flex-1 bg-gray-900 p-6 flex flex-col justify-between">
          <div className="flex-1">
            <p className="text-xl font-medium text-gray-200 mb-2">Markdown</p>
            <textarea
              className="w-full min-h-full bg-gray-900 text-white focus:outline-none"
              id="output"
              value={state}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
      </div>

      <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <p className="text-xl font-medium text-indigo-600 mb-2">Result</p>

          <div
            className="flex-1"
            dangerouslySetInnerHTML={{
              __html: marked(state),
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Readme;
