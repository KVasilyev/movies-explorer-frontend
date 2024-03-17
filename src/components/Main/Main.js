import React from "react";
import './Main.css';

import Project from './Project/Project';
import Technology from './Technology/Technology';
import About from './About/About';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';

function Main() {
  return (
    <main className="main">
      <Hero />
      <Navbar />
      <Project />
      <Technology />
      <About />
    </main>
  )
}

export default Main;