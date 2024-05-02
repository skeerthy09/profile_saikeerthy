import React from "react";
import { Row, Col } from "react-bootstrap";
import "./skills.scss";
import Heading from "../heading/Heading";
import Content from "../content/Content";
import ProgressBarComponent from "../common/progress-bar/ProgressBarComponent";

const heading = "SKILLS";
const text =
  "Following are the skills i worked on and profeciency ";
const Skills = () => {
  return (
    <>
    <div id="skills">
      <Row>
        <Heading heading={heading} />
        {/* <Content text={text} /> */}
        <Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <ProgressBarComponent label={"HTML"} number={90} />
            <ProgressBarComponent label={"CSS"} number={80} />
            <ProgressBarComponent label={"SASS"} number={80} />
            <ProgressBarComponent label={"JAVA SCRIPT"} number={95} />
            <ProgressBarComponent label={"JQUERY"} number={70} />
            <ProgressBarComponent label={"BOOTSTRAP"} number={80} />
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <ProgressBarComponent label={"REACT JS"} number={60} />
            <ProgressBarComponent label={"REDUX"} number={60} />
            <ProgressBarComponent label={"NEXT JS"} number={60} />
            <ProgressBarComponent label={"TYPESCRPT"} number={90} />
            <ProgressBarComponent label={"ANGULAR 15"} number={90} />
          </Col>
        </Row>
      </Row>
      </div>
    </>
  );
};
export default Skills;
