// client-side component
"use client";

// Import necessary dependencies and components.
import { motion } from "framer-motion";

import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

// Define the About component.
const About = () => {
  // Use the useSectionInView custom hook to track when the "About" section is in view.
  const { ref } = useSectionInView("About");

  // Return the About section, which uses framer-motion for animations.
  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    >
      {/* Display the section heading for "About me." */}
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3">
        I am currently an undergraduate student at{" "}
        <b> Graphic Era Hill University</b>, Dehradun, majoring in{" "}
        <b className="font-medium">computer science engineering.</b> I
        specialize in building collaborative and real-time data sharing
        applications leveraging technologies like{" "}
        <i className="italic">WebSockets and WebRTC, </i> making it easier for
        you to connect with your team, friends, and family. Apart from that, I
        have a good understanding of
        <b className="font-medium"> React, Next.js, Node.js, and MongoDB. </b>I
        also possess great problem-solving skills and have a good understanding
        of
        <i className="font-medium"> data structures and algorithms</i>,
        constantly solving problems on platforms like LeetCode and Codeforces.
      </p>

      <p>
        Eager to embark on exciting projects and overcome challenges, I am
        enthusiastic about collaborating with others to create impactful
        solutions. Let&apos;s connect and build something great together!
      </p>
    </motion.section>
  );
};

// Export the About component.
export default About;
