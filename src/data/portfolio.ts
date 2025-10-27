export const portfolioData = {
  personal: {
    name: "Alok Ranjan Joshi",
    title: "MERN Stack Developer",
    email: "alokranjanjoshi07567@gmail.com",
    github: "https://github.com/Alok905",
    linkedin: "https://linkedin.com/in/alok-ranjan-joshi",
    mobile: "+91-7681020254",
    location: "Bhubaneswar, Odisha, India",
  },

  about: `🚀 I'm a passionate MERN Stack Developer with strong frontend and backend expertise in building responsive, scalable web applications.
🧠 Proficient in React.js, Node.js, Express.js, Redux Toolkit, RESTful APIs, and Git.
📂 Experienced in Agile development and Linux environments.
✨ I love writing clean, optimized code and solving problems using data structures and algorithms.`,

  projects: [
    {
      id: 1,
      name: "Financo",
      description:
        "Built a finance web application during internship using the MERN stack with Redux for state management. Integrated a payment gateway and developed separate customer and admin dashboards for streamlined user interaction and backend control.",
      stack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Redux",
        "Payment Gateway",
      ],
      github: "https://github.com/Alok905/financo",
      demo: null,
      status: "completed",
      type: "Internship Project",
    },
    {
      id: 2,
      name: "GreenNest",
      description:
        "Contributed to a plant-selling web app using the MERN stack by developing 10+ dynamic APIs and 5 responsive frontend pages.",
      stack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "API Development",
      ],
      github: "https://github.com/Alok905/greennest",
      demo: null,
      status: "completed",
      type: "Internship Project",
    },
  ],

  experience: [
    {
      id: 1,
      company: "Tejas Networks Limited",
      role: "Software Development Engineer in Test (SDET)",
      duration: "August 2024 - Present",
      description:
        "Building automation frameworks and APIs for internal testing systems. Managing CI/CD pipelines, server synchronization, and scalable deployments across internal infrastructure.",
      technologies: [
        "React.js",
        "Redux",
        "Python",
        "GitLab CI/CD",
        "AWS (EC2, S3)",
        "Linux",
        "Bash",
      ],
      achievements: [
        "Developed a scalable automation framework (SAS – Simple Automation System) using React and Redux",
        "Deployed automation framework on Tejas internal servers for organization-wide access",
        "Built Python-based automation framework handling multiple node types for automated testing",
        "Designed and implemented 40+ Python APIs for automation script execution",
        "Created and maintained GitLab CI/CD pipelines for smooth code synchronization",
        "Configured and managed cron jobs to sync GitLab and server repositories",
        "Migrated automation codebase and infrastructure to GitLab for streamlined operations",
        "Resolved critical production issues under tight deadlines with quick debugging",
        "Experimented with AWS EC2 and S3 for initial SaaS deployment",
      ],
    },
    {
      id: 2,
      company: "Itobuz Technologies",
      role: "Software Development Engineer (Intern)",
      duration: "January 2024 - April 2024",
      description:
        "Developed frontend and backend modules for a finance web app using the MERN stack, improving UI performance and backend integration.",
      technologies: [
        "JavaScript",
        "HTML5",
        "CSS3",
        "Express.js",
        "MongoDB",
        "React.js",
        "Bootstrap",
        "Tailwind CSS",
        "Git",
      ],
      achievements: [
        "Built single-page frontend using Vanilla JavaScript, HTML5, and CSS3 without frameworks",
        "Developed RESTful APIs using Express.js and MongoDB for backend services",
        "Integrated frontend and backend using React.js, Axios, and Fetch API",
        "Designed responsive, modern UI with Bootstrap and Tailwind CSS",
        "Debugged and optimized frontend code to enhance performance and modularity",
        "Collaborated in an Agile environment using Git, pull requests, and standups",
      ],
    },
  ],

  education: [
    {
      id: 1,
      institution:
        "Odisha University of Technology and Research (formerly known as CET)",
      degree: "Bachelor of Technology - Computer Science and Engineering",
      duration: "August 2020 - June 2024",
      cgpa: "9.02",
      location: "Bhubaneswar, Odisha, India",
    },
    {
      id: 2,
      institution: "Adyant Higher Secondary School",
      degree: "Senior Secondary Education (CHSE)",
      duration: "2019",
      percentage: "77.1%",
      location: "Bhubaneswar, Odisha, India",
    },
    {
      id: 3,
      institution: "Chamar Meher High School",
      degree: "Secondary Education (BSE)",
      duration: "2017",
      percentage: "86.33%",
      location: "Bangomunda, Odisha, India",
    },
  ],

  skills: {
    programming: ["Java", "Python", "JavaScript", "C", "C++", "SQL", "Bash"],
    webDevelopment: [
      "React.js",
      "Node.js",
      "Express.js",
      "Redux",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Tailwind CSS",
    ],
    database: ["MongoDB", "MySQL", "SQL"],
    networkingProtocols: ["GPON", "TCP/IP", "VLAN"],
    devopsTools: [
      "AWS (EC2, ECR, ELB, EFS, EBS, S3, RDS, IAM, CLI, Elastic Beanstalk)",
      "Linux",
      "Bash Scripting",
      "Vagrant",
      "CI/CD",
      "Git",
      "GitLab CI/CD",
      "Jenkins",
      "Docker",
    ],
    toolsPlatforms: [
      "Visual Studio",
      "Bugzilla",
      "Wireshark",
      "Spirent",
      "Linux",
      "GitBash",
      "GitHub",
      "GitLab",
    ],
    softSkills: [
      "Leadership",
      "Event Management",
      "Attention to Detail",
      "Time Management",
      "Team Collaboration",
    ],
  },
  commands: {
    help: "Available commands: about, projects, experience, education, skills, contact, clear, whoami",
    whoami: "You are interacting with Alok Ranjan Joshi's portfolio terminal",
  },
};
