import "./App.css";
import "@fontsource/poppins";
import React from "react";
import Home from "./views/Home";
import About from "./views/About";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
    </div>
  );
};

export default App;
