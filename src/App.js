import React from "react";
import "./App.css";
import Intro from "./components/Intro";
import About from "./components/About";
import Experience from "./components/Experience";
import Contacts from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <Experience />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
