import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.scss";


const Footer = () => {
  return (
    <>
      <div className="footer">
        <Container>
            <Row>
                <h3>Sai Keerthy</h3>
                <p> I hereby declare that the above-mentioned information is true to the best of my knowledge.</p>
                <p> This application created using by React js, html, css and bootstrap.</p>
                <div className="copy-right">
                © Copyright
                <strong> MyResume</strong>
                . All Rights Reserved
      
                </div>
            </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
