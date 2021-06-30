import React, { useState } from "react";
import Header from "../components/Header";
import Readme from "../components/Readme";
import data from "../helpers/data.json";
import Footer from "../components/Footer";

const App = () => {
  const [state, setstate] = useState(data.title.text);

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([document.querySelector("#output").value], {
      type: "text/plain;charset=utf-8",
    });
    element.href = URL.createObjectURL(file);
    element.download = "README.md";
    document.body.appendChild(element);
    element.click();
  };

  const handleErase = () => {
    const OUTPUT = document.querySelector("#output");
    OUTPUT.value = "";
    setstate("");
  };

  const changeState = (choice = "title") => {
    const text = state + data[choice].text + "\n\n";
    setstate(text);
  };

  const handleChange = (event) => {
    const text = event.target.value;
    setstate(text);
  };

  const handleChoice = (name) => {
    console.log("handleChoice dans le Readme.js = " + name);
    changeState(name);
  };

  return (
    <div className="mx-auto px-2 sm:px-6 lg:px-8">
      <Header handleErase={handleErase} handleDownload={handleDownload} />
      <Readme
        handleChange={handleChange}
        handleChoice={handleChoice}
        state={state}
      />
      <Footer />
    </div>
  );
};

export default App;
