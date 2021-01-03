import React, {FC} from 'react';
import { Timeline, Tabs } from 'antd';
import './Resume.less';

import { resumeData, Expeience, Education } from './texts';

const { TabPane } = Tabs;


const mapExperienceToTimelineItem = (experiences: Array<Expeience>) => (
  experiences.map((x, xi) => (
    <Timeline.Item key={xi}>
      <h3>{x.time}</h3>
      <h3>{x.position}, {x.location}</h3>
      <h4>
        <a href={x.companyUrl}>{x.company}</a>
      </h4>
      <ul className="resume-details">
        {x.details.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>
    </Timeline.Item>
  ))
);

const Resume:FC = () => (
  <div className="Resume" id="resume">
    <h2 className="text-center subtitle">Resume</h2>
    <Tabs
      defaultActiveKey="1"
      tabPosition="left">

      <TabPane tab="Work Experience" key="1" className="auto-overflow">
        <Timeline>
          {mapExperienceToTimelineItem(resumeData.workExperience)}
        </Timeline>
      </TabPane>
      <TabPane tab="Additional Experience" key="2" className="auto-overflow">
        <Timeline>
          {mapExperienceToTimelineItem(resumeData.additionalExperience)}
        </Timeline>
      </TabPane>
      <TabPane tab="Technical Skils" key="3" className="auto-overflow">
        <Timeline>
          <Timeline.Item>
            <div>
              {Object.keys(resumeData.technicalSkills).map((key:string, i) => {
                return (
                  <div key={i}>
                    <h4>{key}</h4>
                    <ul>
                      {resumeData.technicalSkills[key].map((skill:string, j) => <li key={skill}>{skill}</li>)}
                    </ul>
                  </div>
                )
              })}
            </div>
          </Timeline.Item>
        </Timeline>
      </TabPane>
      <TabPane tab="Education" key="4" className="auto-overflow">
        <Timeline>
          {resumeData.educations.map((education: Education, i) => (
            <Timeline.Item key={i}>
              <h3>{education.time}</h3>
              <h3>{education.school}, {education.major} </h3>
              <h4>{education.gpa}</h4>
              <div>
                <h4>Relevant Coursework</h4>
                <ul>
                  {education.relevantCoursework.map((course:string, j) => (
                    <li key={j}>{course}</li>
                  ))}
                </ul>
              </div>
          </Timeline.Item>
          ))}
        </Timeline>
      </TabPane>
    </Tabs>
  </div>
);

export default Resume;
