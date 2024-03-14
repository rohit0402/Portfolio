import React from "react";
import SkillsCard from "./SkillsCard";

const SkillsSection = () => {
  return (
    <div className=" mb-20  lg:mb-14">
      <h1 className=" text-5xl lg:text-7xl gradient-text mb-10 ">My Skills</h1>
      <div className=" h-[300px] overflow-y-scroll  select-none scroll-bar">
        <SkillsCard title={"ReactJs"}/>
        <SkillsCard title={"NodeJs"}/>
        <SkillsCard title={"MongoDB"}/>
        <SkillsCard title={"ExpressJs"}/>
        <SkillsCard title={"Tailwind CSS"}/>
        <SkillsCard title={"Data Structures"}/>
        <SkillsCard title={"Algorithms"}/>
      </div>
    </div>
  );
};

export default SkillsSection;
