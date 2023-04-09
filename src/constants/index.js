import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Education/Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Wordpress Web Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "UX/UI Designer",
    icon: backend,
  },
  {
    title: "Professional Photographer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Ordinary Level Education",
    company_name: "Ke/Kegalu Vidyalaya",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "April 2008 - December 2018",
    points: [
      "Kegalu Vidyalaya was where I studied from Period Grade 1 to Period Grade 11",
      "I got 158 marks and passed my scholarship exam in 2012. Then, in 2021, I passed my ordinary level exam and got 4 A passes, 3 B passes, and 2 credit passes in English medium.",
      "I am a member of the school's throwball ,basketball, and cricket teams. Also, I'm the secretary of the school scout society and a club member of the school drama and music clubs.",
      "I have many victories at national and international level competitions in sports fields. I also participated as a player on the 2017 India-Sri Lanka Throwball Series runner-up team.",
    ],
  },
  {
    title: "Additional Level Education",
    company_name: "Ke/Kegalu Vidyalaya",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2019 - 2022 February",
    points: [
      "I did my advance-level education at Kegalu Vidyalaya in the Science Stream, and I passed my advance-level examination with 2 credit passes and 1 simple pass.",
      "I am the school's deputy head prefect and secretary of the science association. I'm also a nominated presidential scouter.",
      "I am a member of the photographic and art society of Kegalu Vidyalaya, and I cover many functions in the school and outdoor events. I am also a member of the school's senior western band.",
      "Likewise, I have won many awards in school colors and science competitions..",
    ],
  },
  {
    title: "Undergraduate",
    company_name: "Informatics Institute of Technology",
    icon: shopify,
    iconBg: "#ffffff",
    date: "Jan 2023 - Present",
    points: [
      "I am a computer science undergraduate at the University of Westminster, accredited by the Informatics Institute of Technology.",
      "I have already studied some great programming courses on LinkedIn Learning and also followed two courses on the UOM open platform.",
      "I am currently studying some front-end languages, such as HTML, CSS, and Javascript, as well as some back-end languages, such as Python and Java. Other than that, I can create websites by using WordPress and the Elementor page builder platform, and I can design UI/UX designs by using figma. I am also studying mathematics for computing.",
      "I have created projects and have some ongoing projects. Currently, we are designing a project for an online timetable system to IIT as our group project to develop the efficiency of students by using Figma, and I created an e-commerce website and a small calculator too, along with some other ongoing Figma UI design projects.",
    ],
  },
  {
    title: "Internship",
    company_name: "Hoping for a company",
    icon: meta,
    iconBg: "#000000",
    date: "Present",
    points: [
      "",
      "",
      "",
      "",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "IIT Online time table",
    description:
      "This website is entirely dedicated to online students.From this We can develop the efficiency of the students. Other than that, there is an option to see whether or not there are lectures. This UI was created by Figma, and this is an ongoing and updated project.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "My portfolio",
    description:
      "This is my other portfolio website that I created by using Wordpress and Elementor Page Builder. This is also a very smooth website. I used a lot of plugins to make my website more interactive.Anyone can hire me on any project via this website.",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "Elementor",
        color: "green-text-gradient",
      },
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "E-Commerce Website",
    description:
      "This site is the online E-commerce platform that we created as a group project. We used HTML, CSS, and JavaScript knowledge. This is an ongoing and constantly updated project. Any seller or buyer can register on that page to sell or buy iteams. ",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
