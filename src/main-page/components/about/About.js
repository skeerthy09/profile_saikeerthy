import React from "react";
import Wrapper from "../wrapper/Wrapper";
import Content from "../content/Content";
import Heading from "../heading/Heading";
import Subheading from '../subheading/Subheading'
import { BsChevronRight } from 'react-icons/bs'
import "./about.scss";
const experience = [
  "Having Total 8+ Years of experience in Front End Development.",
  
];
const getItems = (text) => {
  return (
    <li><BsChevronRight className='chevronright'/> {text}</li>
  )
}
const text = 'I am working as Front end developer.'
const heading = "About"
const About = () => {
  return (
    <>
      <Wrapper>
        <Heading heading={heading} />
        <Content text={text}/>
        <Subheading text={'Responsibilities'} />
        <ul className="responsibilities">
        {
          experience.map(item=>{
            return getItems(item)
          })
        }
        </ul>
      </Wrapper>
    </>
  );
};

export default About;
