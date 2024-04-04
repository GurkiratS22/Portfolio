import {
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
  threejs,
} from "/assets";

const isMobileDevice = () => {
  return /Mobi|Android/i.test(navigator.userAgent);
};

// Define all technologies with their icons
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
  // Only include Redux Toolkit icon for desktop devices
  ...(isMobileDevice() ? [] : [{ name: "Redux Toolkit", icon: redux }]),
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // Only include MongoDB icon for desktop devices
  ...(isMobileDevice() ? [] : [{ name: "MongoDB", icon: mongodb }]),
  {
    name: "Three JS",
    icon: threejs,
  },
  // Only include Git icon for desktop devices
  ...(isMobileDevice() ? [] : [{ name: "git", icon: git }]),
  // Only include Figma icon for desktop devices
  ...(isMobileDevice() ? [] : [{ name: "figma", icon: figma }]),
  // Only include Docker icon for desktop devices
  ...(isMobileDevice() ? [] : [{ name: "docker", icon: docker }]),
];

export { technologies };