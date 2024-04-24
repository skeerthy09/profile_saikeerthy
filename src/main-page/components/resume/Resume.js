import React from "react";
import StepperComponent from "../common/stepperComponent/StepperComponent";
import { Row, Col, Box } from "react-bootstrap";
import Heading from "../heading/Heading";
import "./resume.scss";
const one = [
  {
    title: "",
    fromYear: 2022,
    toyear: 2024,
    content: "Client: ",
    points: [
      'Developing ',
      'Involved ',
   
    ]
  },
  {
    title: "",
    fromYear: 345,
    toyear: 435,
    content: "",
    points: [
      'Developing ',
      'Involved ',
    ]
  },
  
];
const two = [
  {
    title: "",
    fromYear:  345,
    toyear: 345,
    content: "",
    points: [
      'Developing ',
      'Involved ',
    ]
  },
  {
    title: " ",
    fromYear: 546 ,
    toyear: 56 ,
    content: "",
    points: [
      'Developing ',
      'Involved ',
    ]
  },
  {
    title: " ",
    fromYear:  34,
    toyear:  34,
    content: "",
    points: [
      'Developing ',
      'Involved ',
    ]
  },
  
];
const three = [
  {
    title: "",
    fromYear:  345,
    toyear: 345,
    content: "",
    points: [
      'Developing ',
      'Involved ',
    ]
  },
  {
    title: " ",
    fromYear: 546 ,
    toyear: 56 ,
    content: "",
    points: [
      'Developing ',
      'Involved ',
    ]
  },
  {
    title: " ",
    fromYear:  34,
    toyear:  34,
    content: "",
    points: [
      'Developing ',
      'Involved ',
    ]
  },
  
];
const Resume = () => {
  return (
    <>
      <div className="resume">
        <Row>
          <Heading heading={"Experience"} />
          <Col lg={6} sm={12} xs={12}>
          <h3 className="stepper-title">{"one"}</h3>
            <StepperComponent stepBlocks={one} />
            <h3 className="stepper-title">{"two"}</h3>
            <StepperComponent stepBlocks={two} />
          </Col>
          <Col lg={6} sm={12} xs={12}>
          <h3 className="stepper-title">{"three"}</h3>
            <StepperComponent stepBlocks={three} />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Resume;
