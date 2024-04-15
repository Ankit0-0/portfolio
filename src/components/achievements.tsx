// Import necessary dependencies and components.
"use client"; // This comment indicates that this code should run on the client side in Next.js.

import React, { useEffect, useState } from "react";

import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { ACHIEVEMENTS_DATA } from "@/constants";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";

import "react-vertical-timeline-component/style.min.css";
import { useThemeContext } from "@/context/theme-context";

// Define the Experience component.
const Achievements = () => {
  const { ref } = useSectionInView("Achievements", 0.5);
  const { theme } = useThemeContext();
  const { activeSection } = useActiveSectionContext();

  const [isAchievementsSectionActive, setIsAchievementsSectionActive] =
    useState(false);

  useEffect((): void => {
    // Set isAchievementsSectionActive to true when the active section is "Experience".
    if (activeSection === "Achievements") {
      setIsAchievementsSectionActive(true);
    }
  }, [activeSection]);

  return (
    <section ref={ref} id="achievements" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Achievements</SectionHeading>

      <VerticalTimeline lineColor="">
        {ACHIEVEMENTS_DATA.map((achievement, i) => (
          <React.Fragment key={`achievement-${i}`}>
            <VerticalTimelineElement
              visible={isAchievementsSectionActive}
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={achievement.date}
              icon={achievement.icon}
              iconStyle={{
                background:
                  theme === "light" ? "#fff" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{achievement.title}</h3>
              <p className="font-normal !mt-0">{achievement.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {achievement.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

// Export the Experience component.
export default Achievements;
