import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  return (
    <div className=" flex flex-col">
      <h3 className=" mb-7 text-5xl lg:text-7xl gradient-text ">My Projects</h3>
      <ProjectCard/>  
    </div>
  );
};

export default ProjectSection;
