import React from 'react';
import {GithubFilled, FacebookFilled, LinkedinFilled} from '@ant-design/icons';

export interface Expeience {
  time: string;
  position: string;
  location: string;
  companyUrl: string;
  company:string;
  details: Array<string>;
}

export interface Education {
  time: string,
  school: string,
  major: string,
  gpa: string,
  relevantCoursework: Array<string>
}

export interface TechnicalSkills {
  [key: string]: Array<string>
}

export interface ResumeData {
  workExperience: Array<Expeience>,
  additionalExperience: Array<Expeience>,
  technicalSkills: TechnicalSkills,
  educations: Array<Education>
}

export interface PortfolioItem {
  imageUrl: string,
  title: string,
  description: string,
  link: string
}

export const coverText = {
  mainTitle: 'Hi, my name is Hanming Zeng',
  subTtile: 'A Software Engineer in New York City'
};

export const aboutText = {
  title: 'About Me',
  content: 'My name is Hanming Zeng. I am currently a Software Engineer at Google. I graduated from New York University in December 2017 with a B.A. in Computer Science. I love coding and exploring newest technologies. This site is built with React and ant.design framework.'
}

export const socialMediaInfo = [
  {
    icon: <GithubFilled/>,
    url: 'https://github.com/zhm12359'
  },
  {
    icon: <FacebookFilled/>,
    url: 'https://www.facebook.com/zenghanming'
  },
  {
    icon: <LinkedinFilled/>,
    url: 'https://www.linkedin.com/in/hanming-zeng-75480a9b/'
  }
];


export const resumeData: ResumeData = {
  workExperience: [
    {
      time: 'May 2019 - Present',
      position: 'Software Engineer',
      company: 'Google',
      location: 'Mountain View, CA / New York, NY',
      companyUrl: 'https://about.google/',
      details: [
        'Develop internal tools and infrastractures',
      ]
    },
    {
      time: 'January 2018 - April 2019',
      position: 'Software Engineer',
      company: 'Equityzen',
      location: 'New York, NY',
      companyUrl: 'https://equityzen.com',
      details: [
        'Full stack development for internal and external Django web application that manages private stock market deals',
        'Lead frontend engineering, integrate ReactJs and Redux into existing project and write guiding documentations ',
        'Code review and offer constructive suggestions to teammates to boost up program performance, test coverage and SEO',
        'Manage product deploy via AWS and ensure the workflow adheres to Agile methodology across the entire team'
      ]
    },
    {
      time: 'May 2016 - January 2018',
      position: 'Software Engineer',
      location: 'New York, NY',
      company: 'New York University, Operations Technology Support and Services',
      companyUrl: 'https://www.nyu.edu/life/campus-resources/facilities-operations-maintenance.html',
      details: [
        'Program and maintain web applications in ASP.NET (C#) MVC framework for NYU Treasury Department ',
        'Set up Front End page using React-Redux and document the use patterns for React Components on Confluence',
        'Design data models in C# Entity Framework, establish database in MSSQL server and create Api Endpoints',
        'Review pull request from coworkers, comment on potential logic error and help reduce time and space complexity'
      ]
    },
    {
      time: 'May 2017 - August 2017',
      position: 'Full Stack Developer',
      company: 'Credit Suisse',
      location: 'New York, NY',
      companyUrl: 'https://www.credit-suisse.com/us/en.html',
      details: [
        'Investigated code efficiency and boosted productivity by getting rid of redundant database calls in legacy projects',
        'Calculated latency and throughput of a pricer application in Java Spring framework and logged unusual behaviors',
        'Developed a web application for fine art backed loan transaction using Blockchain (Distributed Ledger) Technology',
      ]
    }
  ],
  additionalExperience:[
    {
      time: 'January 2016 - May 2016',
      position: 'Data Analyst Intern',
      company: 'Amass Insights, Inc.',
      location: 'New York, NY',
      companyUrl: 'https://amassinsights.com/',
      details: [
        'Collected, analyzed, and delivered unique data to investors working with 1600 investment and technology companies',
        'Researched on potential data partners and recorded information of hundred of companies in 12 different industries',
      ]
    },
    {
      time: ' September 2015 - December 2018',
      position: 'Teaching Assistant',
      company: 'New York University',
      location: 'New York, NY',
      companyUrl: 'http://nyu.edu',
      details: [
        'Facilitate 10 in-class coding workshops with professors to deepen students’ understanding in Python programming',
        'Grade 300+ algorithm homework, aid 100+ students with programming exercises and prepare them for examinations',
      ]
    },
    {
      time: ' September 2015 - December 2018',
      position: 'Mentor',
      company: 'Phi Chi Theta Beta National Business Fraternity, New York Beta Chapter ',
      location: 'New York, NY',
      companyUrl: 'http://nyu.edu',
      details: [
        'Coach members python programming, hold workshops in web design and mentor pledges in business etiquette',
      ]
    },
    {
      time: ' March 2013 - June 2013',
      position: 'Beta Tester and Teaching Assistant',
      company: 'Enactus Computer Training Program for the Blind',
      location: 'Hangzhou, China',
      companyUrl: 'http://nyu.edu',
      details: [
        'Reported the deficiency of Braille Screen Reader during instruction, customized the need for blind participants',
      ]
    },
  ],

  technicalSkills: {
    'Languages': ['Javascript', 'Typescript', 'Python', 'Java', 'C#', 'Kotlin', 'HTML & CSS'],
    'Web Frameworks': ['Django', 'Flask', 'Spring', '.NET', 'React'],
    'Database': ['SQL Server', 'Postgres SQL', 'MongoDB'],
    'Infrastracture': ['Git', 'Subversion', 'AWS', 'Google Cloud'],
  },

  educations: [
    {
      time: 'September 2014 - December 2017',
      school: 'New York University',
      major: 'Bachelor of Arts in Computer Science',
      gpa: '3.86/4.00',
      relevantCoursework: ['Full Stack Web Development', 'Data Structures', 'Algorithms', 'Statistics', 'Operating System', 'Object Oriented Programming']
    }
  ]
};

export const portfolioData: Array<PortfolioItem> = [
  {
    imageUrl: 'images/portfolio/crossy-road.png', // url here refers to the path under public folder, but you can use general https urls too!
    title: 'Game: VR Crossy Road',
    description: 'A VR crossy road game.',
    link: 'games/crossy-road/index.html', // url here refers to the path under public folder, but you can use general https urls too!
  },
  {
    imageUrl: 'images/portfolio/comics-screenshot.jpg',
    title: 'Comic: What if I am a twin',
    description: 'A self made comic with Bitmoji.',
    link: 'images/portfolio/comics.pdf',
  },
  {
    imageUrl: 'images/portfolio/kirby.png',
    title: 'Game: Kirby vs. Missile',
    description: 'A mini kirby game. Try to reach as many stars as your can while dodging the middles.',
    link: 'games/kirby/index.html',
  }
];
