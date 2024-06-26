import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  threejs,
  sass,
  mysql,
  php,
  vscode,
  github,
  mongodb,
  redux
} from "/assets";

const isMobileDevice = () => {
  return /Mobi|Android/i.test(navigator.userAgent);
};

// Define all technologies with their icons
const technologies = [
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
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
  
  ...(isMobileDevice() ? [] : [{ name: "HTML 5", icon: html }]),
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  
  ...(isMobileDevice() ? [] : [{ name: "CSS 3", icon: css }]),
  {
    name: "Three JS",
    icon: threejs,
  },
  
  ...(isMobileDevice() ? [] : [{ name: "GitHub", icon: github }]),
  
  ...(isMobileDevice() ? [] : [{ name: "Tailwind CSS", icon: tailwind }]),

  ...(isMobileDevice() ? [] : [{ name: "Sass", icon: sass }]),
  
  ...(isMobileDevice() ? [] : [{ name: "VS Code", icon: vscode }]),

  ...(isMobileDevice() ? [] : [{ name: "Redux", icon: redux }]),
];

export { technologies };