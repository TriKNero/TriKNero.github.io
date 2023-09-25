function countFullYears(startDate) {
  const today = new Date();
  return today.getFullYear() - startDate.getFullYear() - (today.getMonth() < startDate.getMonth() || (today.getMonth() === startDate.getMonth() && today.getDate() < startDate.getDate()) ? 1 : 0);
}

const startDate = new Date('2015-08-01');
const fullYears = countFullYears(startDate);

module.exports = {
  siteTitle: 'Kristian Korneev',
  subTitle: 'Software Engineer',
  siteDescription: `Korneev Kristian CV`,
  keyWords: ['gatsbyjs', 'react'],
  authorName: 'Kristian Korneev',
  twitterUsername: '',
  githubUsername: 'TriKNero',
  authorAvatar: '/images/avatar.jpeg',
  authorDescription: `${fullYears}+ years of experience in Front End and Back End technologies. Worked as a JavaScript, React and Electron developer. Improving tasks to a significantly higher standard than their previous execution. I thoroughly enjoy working with ambitious, motivated, and compassionate people. I'm a proud father of two lovely daughters. During my free time, I indulge in playing the guitar and exploring new destinations through travel.
`,
  skills: [
    {
      name: 'TypeScript, JavaScript',
      level: 100,
    },
    {
      name: 'Meteor, Koa, Express, Node.js',
      level: 100,
    },
    {
      name: 'Next, Gatsby',
      level: 100,
    },
    {
      name: 'React, Redux',
      level: 100,
    },
    {
      name: 'React Native, Electron, Chrome extensions',
      level: 99,
    },
    {
      name: 'AWS SDK, MUI',
      level: 98,
    },
    {
      name: 'CI/CD, Github Actions',
      level: 99,
    },
    {
      name: 'Jest, Mocha, TestCafe, Selenium, Storybook',
      level: 99,
    },
    {
      name: 'Mongo DB',
      level: 95,
    },
    {
      name: 'MySql, PostgreSQL, SQLight',
      level: 85,
    },
    {
      name: 'Python(Django / Flask)',
      level: 50,
    },
  ],
  jobs: [

    {
      company: 'MaestroQA, USA, Remote',
      begin: {
        month: 'feb',
        year: '2020',
      },
      duration: "3.8",
      occupation: 'Full Stack Engineer',
      description: `<p><strong>Responsibilities:</strong></p> 
      <ul>
        <li>Served as a full stack engineer for MaestroQA Analytics App, actively contributing to the development of new features and services.</li>
      </ul>
      <p><strong>Achievements:</strong></p>
      <ul>
        <li>Innovated and developed MaestroQA screen recorder extension and Electron Companion APP.</li>
        <li>Successfully configured CI processes using GitHub Actions, leading to improved code testing and coverage.</li>
        <li>Experienced in team leadership.</li>
      </ul>
      `,
    },
    {
      company: 'Astraload, USA, Remote',
      begin: {
        month: 'apr',
        year: '2019',
      },
      duration: null,
      occupation: 'Full Stack Web Developer',
      description: `<p><strong>Responsibilities:</strong></p> 
      <ul>
        <li>Actively involved in shaping the core features of the Astraload Load Testing performance tool.</li>
        <li>Helped to improve performance of web application for such companies as: selfleaders, hive, white rabbit japan</li>
      </ul>
      <p><strong>Achievements:</strong></p>
      <ul>
        <li>Helped to scale performance of <a href="https://selfleaders.com/">SelfLeaders</a> web application from 1000 to 4000 active users.</li>
        <li>Experienced in team leadership.</li>
      </ul>
      `,
    }, {
      company: 'TechGC Holding, Inc, USA, Remote',
      begin: {
        month: 'may',
        year: '2017',
      },
      duration: '2 years',
      occupation: 'Full Stack Web Developer',
      description: `<p><strong>Responsibilities:</strong></p>
        <ul> 
          <li>Develop a social network for American senior lawyers using Meteor and React, accessible at [members.techgc.co](https://members.techgc.co).</li>
          <li>Create a microservice for seamless data extraction from legacy software.</li>
          <li>Design and implement a messaging feature using the KOA framework.</li>
          <li>Proficient in writing comprehensive end-to-end and unit tests for robust code coverage.</li>
          <li>Ensure a seamless user experience by supporting responsive design principles.</li>
          <li>Contribute to UI/UX enhancements for improved user interaction and satisfaction.</li>
          <li>Develop custom analytics to provide valuable insights for informed decision-making.</li>
        </ul>
        <p>
        <strong>Achievements:</strong>
        </p>
        <ul>
        <li>Developed members.techgc.co from scratch</li>
        </li>
        </ul>
      </p>`,
    },

    {
      company: 'Freelance',
      begin: {
        month: 'aug',
        year: '2015',
      },
      duration: '2 years',
      occupation: 'Frontend developer',
      description: `<p><strong>Responsibilities:</strong></p>
        <ul> 
          <li>Frontend development for different customers.</li>
        </ul>
        <p><strong>Achievements:</strong></p>
        <ul> 
          <li>Developed frontend for: conceptclub, acoolakids, rbc.group, mafiafood</li>
          <li>Developing some soft for different companies to optimize staff jobs. Uses PHP, React, Jquery and Flask</li>
          <li>Support legacy soft</li> 
          <li>Write queries and migrations for large database</li> 
        </ul>
`,
    }
    /* ... */
  ],
  social: {
    linkedin: 'https://www.linkedin.com/in/kristian-korneev-920b34121',
    github: 'https://github.com/TriKNero',
    email: 'krisnerodev@gmail.com',
  },
  siteUrl: 'https://triknero.github.io',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpg',
  googleAnalyticsId: 'UA-146463065-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  display: 'minimal-ui',
  icon: 'src/assets/my_favicon.png',
  headerLinks: [
    {
      label: 'Kristian Korneev',
      url: '/',
    }
  ]
}