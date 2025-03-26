import "./App.css";
import "@fontsource/poppins";
import React from "react";
import Home from "./views/Home";
import About from "./views/About";
import Projects from "./views/Projects";

const App = () => {
  return (
    <div>
            <Home />
      <About />
      <Projects />
    </div>
  );
};

export default App;
