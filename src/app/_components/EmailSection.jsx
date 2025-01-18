"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="m-auto text-center py-24"
    >
      <div>
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2 justify-center">
          <Link href="https://github.com/Goel-Ronit">
            <Image src="/github-icon.svg" alt="Github Icon" height="50" width="50"/>
          </Link>
          <Link href="https://www.linkedin.com/in/ronitgoel/">
            <Image src="/linkedin-icon.svg" alt="Linkedin Icon" height="50" width="50"/>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
