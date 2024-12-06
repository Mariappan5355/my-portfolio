// data.js
export const data = [
  {
    id: 1,
    img: 'https://i.postimg.cc/HkgZYTJs/Group-3.png',
    title: "Waymore",
    desc: `WayMore is a comprehensive marketing platform that offers a wide range of features to help businesses streamline their marketing efforts and engage with their audience effectively. It provides tools for unifying and integrating various marketing channels, segmenting audiences for targeted campaigns, and creating interactive experiences through conversational forms and chatbots. It is a versatile marketing platform that offers a comprehensive suite of tools to help businesses create, manage, and optimize their marketing efforts across multiple channels.`,
    technologies: "React, Node.js (ExpressJs), Redis, RabbitMQ, MongoDB, MySQL 8.",
    projectManagement: "JIRA",
    responsibilities: [
      "Design and implement new features for Waymore.",
      "Understand existing micro-service structure and design architecture for the new implementation.",
      "Used RabbitMQ as a messaging queue to manage the flow of campaign messages between different parts of the system.",
      "Worked on Redis for caching campaign data to improve performance and reduce database load.",
      "Prepared high-performance REST APIs for major modules throughout the application and proxy API to communicate with different services in a subsystem.",
      "Wrote unit tests to ensure the reliability of the codebase for each fix/implementation.",
      "Assist in deploying releases to production and troubleshooting any deployment issues."
    ]
  },
  {
    id: 2,
    img: 'https://i.postimg.cc/k5HxbVV9/All-sprt.png',
    title: "All Sports",
    desc: `This project involves the development of a comprehensive web platform for a national sports games event. The technologies used for this project are React for the frontend and NodeJs for the backend. The website serves as a hub for displaying detailed information about 43 sports, including sports details, medal information, event specifics, and schedules.`,
    technologies: "React.js, NodeJs, MySQL 8, Jquery.",
    projectManagement: "JIRA",
    responsibilities: [
      "Building a robust backend application to support frontend functionalities.",
      "Developing 6 APIs to facilitate communication between the frontend and backend, covering sports profiles, order of play, scorecards, leagues, leaderboards, and elimination brackets.",
      "Implementing NodeJs middleware for authentication to ensure secure access to APIs using API tokens.",
      "Managing data from 3 different vendors supplying points details for the 43 sports.",
      "Designing a common controller to fetch data from these vendors based on sports and event criteria."
    ]
  },
  {
    id: 3,
    img: 'https://i.postimg.cc/59n275t4/school-management-software.png',
    title: "SMS",
    desc: `SMS is a school management application with multiple roles including Admin, Parent, Teacher, Accounts, etc. Teachers and admins can schedule their classes with students and maintain attendance. Student reports and fees payment details are sent as notifications to the respective parents. Parents can track their child’s exam reports and pay fees through the application.`,
    technologies: "Node.js (ExpressJs), AngularJS, jQuery, MySQL 8.",
    projectManagement: "JIRA",
    responsibilities: [
      "Involved in the software development life cycle (SDLC) including tracking requirements, gathering, analysis, detailed design, and development.",
      "Actively involved in developing reusable components.",
      "Designed flexible, reusable components to reduce lines of code and maintain UI consistency across all screens.",
      "Prepared high-performance REST APIs for major modules throughout the application.",
      "Wrote cron jobs to manage recurring calls."
    ]
  }
];
