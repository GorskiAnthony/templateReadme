import React from "react";
import Header from "../components/Header";
import Readme from "../components/Readme";

const App = () => {
  return (
    <div className="mx-auto px-2 sm:px-6 lg:px-8">
      <Header />
      <Readme />
    </div>
  );
};

export default App;
