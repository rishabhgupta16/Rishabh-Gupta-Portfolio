import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  cpp,
  hirelens,
  campusledger,
  weatherapp,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Journey" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Web Development", icon: web },
  { title: "Frontend Development", icon: creator },
  { title: "React Development", icon: mobile },
  { title: "Backend Development", icon: backend },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Git / GitHub", icon: git },
  { name: "Node JS", icon: nodejs },
  { name: "C++", icon: cpp },
];

const experiences = [
  {
    title: "B.Tech in Information Technology",
    company_name: "Raj Kumar Goel Institute of Technology",
    icon: web,
    iconBg: "#383E56",
    date: "2023 - 2027",
    points: [
      "Building a strong foundation in programming, data structures, databases, and core computer science concepts.",
      "Developed an interest in web development and began turning programming concepts into practical web experiences.",
    ],
  },
  {
    title: "Head Graphic Designer",
    company_name: "Yantrikom Ventures Private Limited",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "Nov 2025 - Sep 2026",
    points: [
      "Owned the complete visual identity of technical events, independently creating event branding, promotional campaigns, posters, and key design assets from concept to final execution.",
      "Maintained a consistent visual language across digital promotions and on-ground event creatives.",
    ],
  },
  {
    title: "Web Development Intern",
    company_name: "Codec Technologies India",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Jun 2026 - Jul 2026",
    points: [
      "Gained hands-on experience building responsive web interfaces using HTML, CSS, JavaScript, and React.js.",
      "Applied development concepts through practical work while strengthening frontend and problem-solving skills.",
    ],
  },
  {
    title: "Graphics Advisor",
    company_name: "Yantrikom Ventures Private Limited",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "Sep 2026 - Present",
    points: [
      "Guide the graphics team on visual direction and creative decisions based on my previous experience leading event branding.",
      "Review designs, support junior designers, and help maintain consistent quality and branding across events.",
    ],
  },
];

const projects = [
  {
    name: "HireLens AI",
    description:
      "AI-powered resume analyzer that evaluates resumes against job descriptions, estimates ATS compatibility and job-match scores, identifies keyword gaps, and provides actionable feedback.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "typescript", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
      { name: "puter.js", color: "blue-text-gradient" },
    ],
    image: hirelens,
    source_code_link:
      "https://github.com/rishabhgupta16/-ai_resume_analyzer",
    live_demo_link:
      "https://hirelens-ai-lyart.vercel.app/",
  },
  {
    name: "CampusLedger",
    description:
      "Student-focused personal finance platform for tracking income and expenses, managing category budgets and savings goals, monitoring recurring payments, and analyzing spending through interactive financial insights.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "node.js", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
      { name: "express", color: "blue-text-gradient" },
    ],
    image: campusledger,
    source_code_link:
      "https://github.com/rishabhgupta16/CampusLedger",
    live_demo_link:
      "https://campus-ledger-neon.vercel.app/",
  },
  {
    name: "Weather App",
    description:
      "Responsive weather application that fetches real-time weather data for searched locations and displays temperature, weather conditions, humidity, and wind speed through a clean interface.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
      { name: "weather-api", color: "blue-text-gradient" },
    ],
    image: weatherapp,
    source_code_link:
      "https://github.com/rishabhgupta16/Whether_app/tree/main/weatherApp",
    live_demo_link:
      "https://rishabh-weather-app-six.vercel.app/",
  },
];

export {
  services,
  technologies,
  experiences,
  projects,
};