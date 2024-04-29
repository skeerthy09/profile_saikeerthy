import React from "react";
import StepperComponent from "../common/stepperComponent/StepperComponent";
import { Row, Col, Box } from "react-bootstrap";
import Heading from "../heading/Heading";
import "./resume.scss";
const one = [
  {
    title: "Fidelity Investments, SaltLake City, UT	",
    fromYear: "May 2022",
    toyear: "Till Date",
    // content: "Client: ",
    points: [
      'Developing ',
      'Involved ',
   
    ]
  }
];
const two = [
  {
    title: "Prudential Financial, Newark, NJ",
    fromYear:  "Jan 2021",
    toyear: "May 2022",
    content: "",
    points: [
      'Developing ',
      'Involved ',
    ]
  }
];
const three = [
  {
    title: "J.B. Hunt Transport Services Inc, Lowell, AK",
    fromYear:  "June 2020",
    toyear: "Dec 2020",
    content: "",
    points: [
      'Developing ',
      'Involved ',
    ]
  }
];
const four = [
  {
    title: "Prudential Financial, Newark, NJ",
    fromYear:  "Jan 2019",
    toyear: "June 2020",
    content: "",
    points: [
      'Developing ',
      'Involved ',
    ]
  }
];
const five = [
  {
    title: "JP Morgan Chase & Co, Newark, DE",
    fromYear:  "June 2018",
    toyear: "Dec 2018",
    content: "",
    points: [
      'Developing ',
      'Involved ',
    ]
  }
];
const six = [
  {
    title: "Catholic Health Initiatives, Englewood, CO",
    fromYear:  "Aug 2016",
    toyear: "June 2018",
    content: "",
    points: [
      'Developing ',
      'Involved ',
    ]
  }
];
const Resume = () => {
  return (
    <>
      <div className="resume" id="services">
        <Row>
          <Heading heading={"Experience"} />
          <Col lg={6} sm={12} xs={12}>
            <h3 className="stepper-title">{""}</h3>
            <StepperComponent stepBlocks={one} />
            <h3 className="stepper-title">{""}</h3>
            <StepperComponent stepBlocks={two} />
            <h3 className="stepper-title">{""}</h3>
            <StepperComponent stepBlocks={three} />
          </Col>
          <Col lg={6} sm={12} xs={12}>
            <h3 className="stepper-title">{""}</h3>
            <StepperComponent stepBlocks={four} />
            <h3 className="stepper-title">{""}</h3>
            <StepperComponent stepBlocks={five} />
            <h3 className="stepper-title">{""}</h3>
            <StepperComponent stepBlocks={six} />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Resume;
