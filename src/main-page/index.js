import React from "react";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Facts from "./components/facts/Facts";
import PersonalDetailSection from "./components/personalDetailSection/PersonalDetailSection";
import Skills from "./components/skills/Skills";
import Resume from "./components/resume/Resume";
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
            <PersonalDetailSection />
            <Facts />
            <Skills/>
            <Resume />
          </div>
        </section>
      </main>
    </div>
  );
};
export default Index;
