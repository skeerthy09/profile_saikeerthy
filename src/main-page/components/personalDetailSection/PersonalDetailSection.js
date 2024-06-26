import React from 'react';
import Subheading from '../subheading/Subheading'
import {Row, Col} from 'react-bootstrap'
import { BsChevronRight } from 'react-icons/bs'

import './personalDetailsection.scss'

const PersonalDetailSection = () => {
    return (
        <>
        <div className='about'>
        <Row>
            <Col lg={4}>
              <div className='whiteoverlay'>
            <div className='about-img'></div>
            </div>
            </Col>
            <Col lg={8}>

            <Subheading text={'Personal Details'} />
                {/* <p class="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p> */}
                <Row>
                    <Col lg={6}>
                    <ul>
                      <li>
                        <BsChevronRight className='chevronright'/>
                        <strong>Birthday:</strong> <span>JAN 1992</span>
                      </li>
                      <li>
                      <BsChevronRight className='chevronright'/>
                        <strong>Sex:</strong> <span>Male</span>
                      </li>
                      <li>
                      <BsChevronRight className='chevronright'/>
                        <strong>Phone:</strong> <span>+1 (646) 543-1491</span>
                      </li>
                      <li>
                      <BsChevronRight className='chevronright'/>
                        <strong>City:</strong> <span>West Chester, PA 19382</span>
                      </li>
                    </ul>
                    </Col>
                    <Col lg={6}>
                    <ul>
                      <li>
                      <BsChevronRight className='chevronright'/>
                        <strong>Languages:</strong> <span>English, Telugu, Hindi.</span>
                      </li>
                      <li>
                      <BsChevronRight className='chevronright'/>
                        <strong>Degree:</strong> <span>Master's in CS</span>
                      </li>
                      <li>
                      <BsChevronRight className='chevronright'/>
                        <strong>Email:</strong>
                        <span>skeerthy09@gmail.com</span>
                      </li>
                      <li>
                      {/* <BsChevronRight className='chevronright'/>
                        <strong>Freelance:</strong> <span>Available</span> */}
                      </li>
                    </ul>
                    </Col>
                </Row>
                {/* <p>
                  Officiis eligendi itaque labore et dolorum mollitia officiis
                  optio vero. Quisquam sunt adipisci omnis et ut. Nulla
                  accusantium dolor incidunt officia tempore. Et eius omnis.
                  Cupiditate ut dicta maxime officiis quidem quia. Sed et
                  consectetur qui quia repellendus itaque neque. Aliquid amet
                  quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis
                  culpa magni laudantium dolores.
                </p> */}
            </Col>
        </Row>
        </div>
        </>
    )
}
export default PersonalDetailSection