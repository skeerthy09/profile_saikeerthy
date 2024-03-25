import React from "react";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";

import Navigationbar from "./components/navigationbar/Navigationbar";
import "./index.scss"

const Index = () => {
  return (
    <div>
      
      <Navigationbar />
      <Hero />
      <main id="main">
        <section id="about" class="">
          <div class="container" data-aos="fade-up">
            <About />
            
          </div>
        </section>
      </main>
    </div>
  );
};
export default Index;
