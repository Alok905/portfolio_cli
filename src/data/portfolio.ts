export const portfolioData = {
  personal: {
    name: "Alok Ranjan Joshi",
    title: "MERN Stack Developer",
    email: "alokranjanjoshi07567@gmail.com",
    github: "https://github.com/Alok905",
    linkedin: "https://linkedin.com/in/alok-ranjan-joshi",
    mobile: "+91-7681020254",
    location: "Bhubaneswar, Odisha, India"
  },

  about: `I'm a passionate MERN Stack Developer with strong frontend and backend expertise in building responsive, scalable web applications. Proficient in React.js, Node.js, Express.js, Redux Toolkit, RESTful APIs, and Git. Experienced in Agile development and Linux environments. Passionate about writing clean, optimized code and solving problems using data structures and algorithms.`,

  projects: [
    {
      id: 1,
      name: "Financo",
      description: "Built a finance web application during internship using the MERN stack with Redux for state management. Integrated a payment gateway and developed separate customer and admin dashboards for streamlined user interaction and backend control.",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux", "Payment Gateway"],
      github: "https://github.com/Alok905/financo",
      demo: null,
      status: "completed",
      type: "Internship Project"
    },
    {
      id: 2,
      name: "GreenNest",
      description: "Contributed to a plant-selling web app using the MERN stack by developing 10+ dynamic APIs and 5 responsive frontend pages.",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB", "API Development"],
      github: "https://github.com/Alok905/greennest",
      demo: null,
      status: "completed",
      type: "Internship Project"
    }
  ],

  experience: [
    {
      id: 1,
      company: "Tejas Networks Limited",
      role: "Software Development Engineer (SDE)",
      duration: "August 2024 - Present",
      description: "Developing employee portal features including hierarchy mapping, leave application, and workflows. Building RESTful APIs and optimizing backend performance.",
      technologies: ["Express.js", "MongoDB", "Node.js", "JWT", "Mongoose"],
      achievements: [
        "Developed employee portal features: Hierarchy mapping, leave application, and workflows",
        "Built RESTful APIs: Express.js, MongoDB, Node.js, JWT, Mongoose",
        "Optimized backend performance: Reduced API response time by 30%",
        "Improved frontend UX: React.js, Redux Toolkit, Bootstrap, responsive design",
        "Version control & collaboration: Git, GitHub, Agile, Linux, Jira",
        "Used data structures & algorithms: Backend optimization and logic flow improvement",
        "Deployed & managed cloud infrastructure: AWS (EC2, S3, EFS, S3, ELB, CloudWatch, Auto Scaling Group)",
        "Implemented scalable and secure deployments"
      ]
    },
    {
      id: 2,
      company: "Itohuz Technologies",
      role: "Software Development Engineer (SDE, Intern)",
      duration: "January 2024 - April 2024",
      description: "Built SPA frontend and created REST APIs, integrated frontend & backend, designed responsive UI, debugged and optimized code.",
      technologies: ["React.js", "Express.js", "MongoDB", "Bootstrap", "Tailwind CSS"],
      achievements: [
        "Built SPA frontend: Vanilla JavaScript, HTML5, CSS3 (without any framework)",
        "Created REST APIs: Express.js, MongoDB",
        "Integrated frontend & backend: React.js, Axios, fetch",
        "Designed responsive UI: Bootstrap, Tailwind CSS",
        "Debugged and optimized code: Improved frontend performance and modularity",
        "Collaborated in Agile team: Git, pull requests, standups"
      ]
    }
  ],

  education: [
    {
      id: 1,
      institution: "Odisha University of Technology and Research (formerly known as CET)",
      degree: "Bachelor of Technology - Computer Science and Engineering",
      duration: "August 2020 - June 2024",
      cgpa: "9.02",
      location: "Bhubaneswar, Odisha, India"
    },
    {
      id: 2,
      institution: "Adyant Higher Secondary School",
      degree: "Senior Secondary Education (CHSE)",
      duration: "2019",
      percentage: "77.1%",
      location: "Bhubaneswar, Odisha, India"
    },
    {
      id: 3,
      institution: "Chamar Meher High School",
      degree: "Secondary Education (BSE)",
      duration: "2017",
      percentage: "86.33%",
      location: "Bangomunda, Odisha, India"
    }
  ],

  skills: {
    programming: [
      "Python", "C", "C++", "JavaScript", "SQL", "Bash"
    ],
    webDevelopment: [
      "React.js", "Node.js", "Express.js", "Redux", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"
    ],
    database: [
      "MongoDB", "MySQL", "SQL"
    ],
    networkingProtocols: [
      "GPON", "TCP/IP", "Computer Networks", "VLAN"
    ],
    devopsTools: [
      "AWS (EC2, S3, IAM, CLI)", "Linux", "Bash Scripting", "Vagrant", "CI/CD", "Git"
    ],
    toolsPlatforms: [
      "Visual Studio", "Bugzilla", "Wireshark", "Spirent", "MobaXterm", "CVS", "MS Office", "Linux", "Windows", "GitBash", "GitHub"
    ],
    softSkills: [
      "Leadership", "Event Management", "Writing", "Attention to detail", "Time Management"
    ]
  },

  commands: {
    help: "Available commands: about, projects, experience, education, skills, contact, clear, whoami",
    whoami: "You are interacting with Alok Ranjan Joshi's portfolio terminal"
  }
};