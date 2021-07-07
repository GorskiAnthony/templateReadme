import React, { useState } from "react";
import Header from "../components/Header";
import Readme from "../components/Readme";
import data from "../helpers/data.json";
import {
  templateProjet,
  templateSummary,
  templateTP,
} from "../helpers/helperTemplate";
import Footer from "../components/Footer";
import Modal from "../components/Modal";

const App = () => {
  const [state, setstate] = useState(data.title.text);
  const [toggle, setToggle] = useState(false);

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
    const text = state + "\n\n" + data[choice].text;
    setstate(text);
  };

  const handleChange = (event) => {
    const text = event;
    setstate(text);
  };

  const handleChoice = (name) => {
    changeState(name);
  };

  const handleTemplate = (name) => {
    handleErase();
    switch (name) {
      case "full_project":
        setstate(templateProjet);
        break;
      case "full_summary":
        setstate(templateSummary);
        break;
      case "full_tp":
        setstate(templateTP);
        break;

      default:
        setstate("");
        break;
    }
  };

  const handleInfo = () => {
    setToggle(!toggle);
  };

  return (
    <div className="mx-auto px-2 sm:px-6 md:px-8">
      {toggle ? <Modal handleInfo={handleInfo} /> : ""}

      <Header
        handleErase={handleErase}
        handleDownload={handleDownload}
        handleInfo={handleInfo}
      />
      <Readme
        handleChange={handleChange}
        handleChoice={handleChoice}
        handleTemplate={handleTemplate}
        state={state}
      />
      <Footer />
    </div>
  );
};

export default App;
