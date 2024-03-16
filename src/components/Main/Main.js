import React from "react";
import Project from './Project/Project';
import Technology from './Technology/Technology';
import About from './About/About';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';

function Main() {
  return (
    <> 
      <Hero />
      <Navbar />
      <Project />
      <Technology />
      <About />
    </>
  )
}

export default Main;