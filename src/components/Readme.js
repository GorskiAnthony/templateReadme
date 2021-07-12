import React from "react";
import Choices from "./Choices";
import marked from "marked";
import Template from "./Template";
import hljs from "highlight.js";
import Editor from "react-simple-code-editor";

const Readme = ({ handleChoice, handleChange, state, handleTemplate }) => {
  marked.setOptions({
    highlight: function (code) {
      return hljs.highlight(code, { language: "md" }).value;
    },
  });

  return (
    <div className="mt-12 max-w-lg mx-auto grid gap-5 md:grid-cols-3 md:max-w-none h-screen">
      <div className="flex flex-col rounded-lg shadow-lg overflow-y-auto">
        <div className="flex-1 bg-white p-6 flex flex-col justify-between ">
          <div className="flex-1">
            <p className="text-xl font-medium text-green-700 mb-2">Choices</p>
            <Choices handleChoice={handleChoice} />
            <p className="text-xl font-medium text-green-700 mb-2">Templates</p>
            <Template handleTemplate={handleTemplate} />
          </div>
        </div>
      </div>

      <div className="flex flex-col rounded-lg shadow-lg overflow-y-auto">
        <div className="flex-1 bg-gray-900 p-6 flex flex-col justify-between">
          <div className="flex-1">
            <p className="text-xl font-medium text-gray-200 mb-2">Markdown</p>
            <Editor
              value={state}
              onValueChange={handleChange}
              highlight={(code) => {
                return hljs.highlight(code, { language: "md" }).value;
              }}
              id="output"
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: "1.1em",
                color: "#FAFAFA",
              }}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div className="flex-1 bg-white p-6 flex flex-col justify-between overflow-y-auto">
          <p className="text-xl font-medium text-green-700 mb-2">Output</p>

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
