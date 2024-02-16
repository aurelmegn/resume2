import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Aurel Megnigbeto",
  initials: "AM",
  location: "Cotonou, Bénin",
  locationLink: "https://www.google.com/maps/place/Cotonou",
  about:
    "Experimented full stack Software engineer",
  summary:
    "I’m a software engineer with 4 years of experience, I like programming and problem-solving. I've led technical team for designing from the ground, the architecture of a SAAS to the deployement to the end users and to it's maintenance.  What I expect about a company is a place where I can be challenged and push to learn every day.",
  avatarUrl: "",
  personalWebsiteUrl: "aurelmegnigbeto.dev",
  contact: {
    email: "he@aurelmegnigbeto.dev",
   tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/aurelmegn",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aurel-megnigbeto/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/aurelmegn",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Institut de Mathématiques et de Sciences Physiques",
      degree: "Master degree in Computer Science (Information systems)",
      start: "2014",
      end: "2020",
    },
  ],
  work: [
    {
      company: "Foxtech",
      link: "https://fasfox.com/en/",
      badges: ["Remote"],
      title: "Lead software engineer",
      // logo: ParabolLogo,
      start: "2022",
      end: "Present",
      description: [
          "Led the design and implementation of a distributed system consisting of microservices that communicate through Apache Kafka. The system implements the “INTEROP fibre protocol of french fiber operators” and allow ordering, monitoring, and data feeding to the order process. It consists of a backend, a daemon process, a frontend, and a business workflow management engine. The process of fiber ordering is represented using BPMN language and Camunda to orchestrate the processes."
        ],
    },
    {
      company: "Foxtech",
      link: "https://fasfox.com/en/",
      badges: ["Remote"],
      title: "Backend Django and Android Developer",
      // logo: NSNLogo,
      start: "Mai 2020",
      end: "Jannuary 2022",
      description: [
          "Led the design and implementation of a new Django/DRF backend for an employee management app",
          "R&D of a data extraction feature taking receipts and document as input in Android using Ml kit",
          "Created an AI and Camera2 API bas  ed face positioning assistant that helps the user to take selfie with the back camera of a smartphone\n",
          "Implemented worker manager in Android to synchronize RAW pictures with the backend\n",
          "Designed, implemented and fully unit tested a reliable and maintainable REST API that wrap a SOAP API",
          "Designed a reliable and tested data parsing component in python","" +
        "Implementation of an interconnection module between telecom provider and Orange APIs using FastAPI"
        ]
      ,
    },
  ],
  skills: [
    "Python",
    "Django", "PHP", "Java", "Kotlin", "Typscript",
    "Vuejs", "Camunda", "BPMN - Workflow automation", "Nodejs", "Docker", "Postgres", "Gitlab", "CI/CD", "Ops"
  ],
  projects: [
    {
      title: "WebToKindle",
      techStack: [
        "Side Project",
        "Django",
        "Celery",
        "Reactjs",
        "Python",
      ],
      description: "A saas that allows users to send web articles to their kindle device",
      // logo: ConsultlyLogo,
      link: {
        // label: "webtokindle.net",
        href: "",
      },
    },

  ],
} as const;
