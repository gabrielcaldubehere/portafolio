import { useState } from "react";
import Header from "./components/Header";
import Home from "./views/Home";
import About from "./views/About";
import "./App.css";
import "@fontsource/poppins";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
      </main>
    </div>
  );
}

export default App;
