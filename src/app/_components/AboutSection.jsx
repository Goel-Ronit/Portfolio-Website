"use client";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a <b>full-stack web developer</b> and a tech guy. I studied at Mother Divine Public School in the science department. I passed school in 2021 and am pursuing a BTech in Software Engineering at <b>Delhi Technological University</b>. 
          <br></br>
          <br></br>
          I learned web development in my first year. I know how to work with the latest technologies on the web like <b>NextJs, ReactJS, MongoDB, Tailwind CSS, and some other libraries like Next UI, and Next Auth</b>. I love new technologies and like to learn about them.
          <br></br>
          <br></br>
          I excel in problem-solving, having solved questions on Data Structures and Algorithms on the <b>Geeks for Geeks platform</b>, where I am ranked 15th globally. I hold a contest rating of <b>1842 on Leetcode</b>, where I am ranked <b>331 globally in problem-solving</b>. I am among the top <b>12% of coders on CodeStudio</b>, having earned Specialist Badges in 14 topics and attaining the <b>Master level</b>.
          <br></br>
          <br></br>
          I also participate in competitive programming and am a <b>pupil on Codeforces with a rating of 1377</b>. Additionally, I am a <b>3 ⭐ coder on CodeChef with a rating of 1700</b>.
          <br></br>
          <br></br>
          Besides coding, I know how to swim, and travelling is my favourite hobby.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
