import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";

import './App.css'
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Services />
     <Portfolio />
     <Contact />
     <Footer />
    </div>
  );
};

export default App;


