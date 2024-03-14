import React from "react";
import { FaGithub } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { SiGeeksforgeeks } from "react-icons/si";
import { SiCodingninjas } from "react-icons/si";
const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center mb-14 lg:mb-36">
      <span className="text-3xl lg:text-2xl font-bold gradient-text mb-8 lg:mb-0 rotate-0 lg:-rotate-90">Profile & Contacts</span>
      <div className="flex flex-col lg:flex-row lg:ml-20 lg:gap-36">
        <div className="mb-5 lg:mb-0">
          <h1 className="text-5xl lg:text-6xl gradient-text mb-5 lg:mb-10 underline">Contact Me:</h1>
          <div className="flex flex-col gap-2">
          <a href="mailto:rohit456sonar@gmail.com" className="text-white font-mono underline text-lg lg:text-2xl">rohit456sonar@gmail.com</a>
            <Link to="tel:+919692085941" className="text-white font-mono underline text-lg lg:text-2xl">+91 9692085941</Link>
          </div>
          <div className="flex gap-2 mt-2">
            <Link to="https://www.linkedin.com/in/rohit-sonar-3b3291273/" className="text-white text-2xl">
              <FaLinkedin />
            </Link>
          </div>
        </div>
        <div className="mb-5 lg:mb-0">
          <h1 className="text-5xl lg:text-6xl gradient-text mb-5 lg:mb-10 underline">Coding Profiles:</h1>
          <div className="flex gap-6 mt-2">
            <Link to="https://leetcode.com/Rohit0402/" className="text-white text-2xl">
              <SiLeetcode />
            </Link>
            <Link to="https://auth.geeksforgeeks.org/user/rohitsonar" className="text-white text-2xl">
              <SiGeeksforgeeks />
            </Link>
            <Link to="https://www.codingninjas.com/studio/profile/ce465998-79e3-437d-b4f3-a94e34ca09bc" className="text-white text-2xl">
              <SiCodingninjas />
            </Link>
            <Link to="https://github.com/rohit0402" className="text-white text-2xl">
              <FaGithub />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
