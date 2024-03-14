import React from "react";

const AboutCard = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between lg:items-center mb-20 lg:mb-36">
      <span className="uppercase text-2xl lg:text-2xl font-bold gradient-text mg:8 lg:mb-0 rotate-0 lg:-rotate-90">
        What I do
      </span>
      <p className="text-xl lg:text-4xl text-white lg:w-[88%]">
        As an intermediate MERN stack developer and passionate problem solver, I
        develop scalable web applications and solve complex programming
        challenges. My goal is to leverage my skills and knowledge to contribute
        positively to software development projects and drive innovation in the
        field.
      </p>
    </div>
  );
};

export default AboutCard;
