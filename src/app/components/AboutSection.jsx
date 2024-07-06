"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML, CSS & Javascript</li>
        <li>ReactJS</li>
        <li>NextJS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Delhi Technological University</li>
        <li>Mother Divine Public School</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>The Complete 2023 Web Development Bootcamp</li>
        <li>Mastering Data Structures And Algorithms</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a <b>full-stack web developer</b> and a tech guy. I studied at Mother Divine Public School in the science department. I passed school in 2021 and am pursuing a BTech in Software Engineering at Delhi Technological University. 
          <br></br>
          I learned web development in my first year. I know how to work with the latest technologies on the web like <b>NextJs, ReactJS, MongoDB, Tailwind CSS, and some other libraries like Next UI, and Next Auth</b>. I love new technologies and like to learn about them.
          <br></br>
          I excel in problem-solving, having solved over 2,500 questions on Data Structures and Algorithms on the Geeks for Geeks platform, where I am ranked 12th globally. I am among the top 8% of coders on CodeStudio, having earned Specialist Badges in 14 topics and attaining the Master level. 
          <br></br>
          Additionally, I am a 3 ⭐ coder on CodeChef with a rating of 1640 and hold a contest rating of 1725 on Leetcode, where I am ranked 324th globally, having solved over 2,000 questions.
          <br></br>
          Other than coding I know how to swim and travelling is my favourite hobby.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
