import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import SpeedTypeImg from "@/projectsImages/stsdh.png"
// import 
import zenSurferImg from "@/projectsImages/zs.png";
import youNotesImg from "@/projectsImages/yn.png";

// Navigation links
export const LINKS = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Achievements",
    hash: "#achievements",
  },
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// External links
export const EXTRA_LINKS = {
  linkedin: "https://www.linkedin.com/in/ankit-pundir-71b270218/",
  github: "https://github.com/Ankit0-0",
  resume: "/Ankit_Pundir_Resume.pdf",
  source_code: "https://github.com/ankit0-0/portfolio",
  email: "ankipundir090@gmail.com",
  leetcode: "https://leetcode.com/Ankit000/",
  twitter: "https://twitter.com/AnkitPu49038709",
  gfg:  "https://www.geeksforgeeks.org/user/ankipundir090/"
} as const;

// Data for work experience
export const EXPERIENCES_DATA = [
  {
    title: "-------------",
    location: "-----------",
    description:
      "---------------------------------------------------------------------------------------------------------",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "-------------",
    location: "-----------",
    description:
      "---------------------------------------------------------------------------------------------------------",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "-------------",
    location: "-----------",
    description:
      "---------------------------------------------------------------------------------------------------------",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
] as const;

// 
export const ACHIEVEMENTS_DATA= [
  {
    title: "Finalist of U-Hackathon 4.0-Meta",
    location: "Dehradun, IN",
    description:
      "Reached the finals  in U-Hackathon 4.0-Meta, a 24-hour hackathon organized by the University of Petroleum and Energy Studies. Developed a web app that helps users to find the best-suited career path based on their interests and skills.",
    icon: React.createElement(LuGraduationCap),
    date: "september - 2023",
  },
  {
    title: "Knight @LeetCode",
    location: "Dehradun, IN",
    description:
      "LeetCode contest rating of 1,898(max), competing in the top 5% worldwide with a Knight badge.",
    icon: React.createElement(CgWorkAlt),
    date: "january - 2024",
  },
  {
    title: "Rank 239",
    location: "Dehradun, IN",
    description:
      "Ranked 239th out of 25,399 participants in the LeetCode Biweekly Contest on February 4, 2023.",
    icon: React.createElement(FaReact),
    date: "Fabruary 2024",
  },
] as const;

// Data for projects
export const PROJECTS_DATA = [
  {
    title: "SpeedType Showdown",
    description:
      "Multiplayer typing game where players compete in real-time to test their typing skills",
    tags: ["React", "Socket.io", "Node.js", "Tailwind css", "Algorithms"],
    imageUrl: SpeedTypeImg,
    projectUrl: "https://multiplayer-typing-game-1.onrender.com/",
  },
  {
    title: "Zen Surfer",
    description:
    "Zen Surfer is a Chrome extension that boosts productivity with distraction-blocking, focus mode, website blacklisting and customizable settings.",
    tags: ["React", "Chrome Manifest", "JavaScript", "HTML"],
    imageUrl: zenSurferImg,
    projectUrl: "https://github.com/Ankit0-0/zen-surfer",
  },
  {
    title: "YouNotes",
    description:
      "YouNotes is a web app that summarizes YouTube videos and allows users to take notes efficiently.",
    tags: ["React", "NLP", "Machine Learning", "PostgreSQL", "Node.js"],
    imageUrl: youNotesImg,
    projectUrl: "htps://github.com/Ankit0-0/YouNotes",
  },
] as const;

// Data for skills
export const SKILLS_DATA = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "PostgreSQL",
  "webRTC",
  "webSockets",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",
  "c++",
  "Express",
  "Framer Motion",
] as const;

// Owner name
export const OWNER_NAME = "Ankit Pundir";
