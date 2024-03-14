import React from "react";
import rohitsonarprofileimg from "../assets/rohitsonarprofileimg.jpg";
const HomeCard = () => {
  return (
    <div className=" flex flex-col lg:flex-row gap-5 lg:gap-1 justify-between items-center mb-20 lg:mb-36">
      <div>
        <img
          src={rohitsonarprofileimg}
          alt=""
          className=" rounded-full w-[200px] lg:w-[450px] lg:h-[450px] mx-auto"
        />
      </div>
      <div className=" text-white  mt-1  flex flex-col gap-5 lg:w-[50%]">
        <h1 className="text-5xl lg:text-7xl gradient-text mb-5">Hello!</h1>
        <p className="text-xl lg:text-2xl">
          My name is Rohit Sonar, currently pursuing my B.Tech degree in
          Electronics and Instrumentation Engineering from Odisha University of
          Technology and Research. I'm an intermediate MERN stack developer and
          a passionate problem solver. With expertise in data structures and
          algorithms, I've successfully tackled over 400+ DSA problems on
          various platforms and achieved a commendable global ranking of 680 in
          LeetCode's biweekly contest 122 out of 22k+ participants.
          Additionally, I consistently rank in the top 10% on LeetCode's
          platform.
        </p>
        <p className="text-xl text-white  lg:text-2xl">
          I'm eager to apply my skills, learn new technologies, expand my
          knowledge, and contribute positively as a software developer for the
          growth of the organization. Let's collaborate and grow together in
          this dynamic field!
        </p>
      </div>
    </div>
  );
};

export default HomeCard;
