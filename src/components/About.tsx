import React, { FC } from 'react';
import './About.less';


import { Row, Col } from 'antd';

import {aboutText, socialMediaInfo} from './texts';

const About: FC = () => (
  <div id="about" className="About">
    <Row justify="center" className="vertical-align-middle">
      <Col xs={24} sm={12} className="text-center">
        <img src="./images/profile-pic.jpg" className="profile-pic" alt="Profile Pic" />
      </Col>

      <Col xs={24} sm={12} className="text-center">
        <h2>{aboutText.title}</h2>
        <p>
          {aboutText.content}
        </p>
        <div className="social-media">
          {
            socialMediaInfo.map(({ icon, url }, i) => (
              <a href={url}
                 key={i}
                 target="_blank"
                 rel="noopener noreferrer">
                   {icon}
              </a>
            ))
          }
        </div>

      </Col>
    </Row>
  </div>
);

export default About;
