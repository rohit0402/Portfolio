import React from "react";
import DeliciousImg from "../assets/DeliciousImg.png";
import CulinarCanvas from "../assets/CulinaryCanvasImg.png";
import weatherApp from "../assets/weatherAppImg.png";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ProjectCard = () => {
  return (
    <>
      {window.innerWidth < 767 ? (
        <div className="flex flex-wrap justify-center mb-24 ">
        {/* First Project Card */}
        <div className="m-2 sm:w-full md:w-[320px] border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-clip lg:overflow-hidden hover:shadow-md lg:hover:scale-105 transition-all backdrop-blur-3xl shadow-xl">
          <Link to="https://culinary-canvas-frontend.vercel.app">
            <img
              src={CulinarCanvas}
              alt="projectimg-1"
              className="h-[200px] w-full object-cover object-center"
            />
          </Link>

          <div className="p-4 flex flex-col gap-3">
            <div className="flex items-center justify-evenly">
              <h2 className="tracking-widest text-2xl text-white">
                CulinaryCanvas
              </h2>
              <Link to="https://culinary-canvas-frontend.vercel.app">
                <span className="text-blue-300 font-bold inline-flex items-center text-lg md:text-xl md:mb-2 lg:mb-0 hover:text-blue-600 cursor-pointer">
                  Live
                </span>
              </Link>
            </div>
            <h1 className="text-lg lg:text-xl font-bold text-gray-400">
              CulinaryCanvas is a recipe app designed to make cooking easier
              and more enjoyable. With a user-friendly interface and a vast
              collection of recipes, CulinaryCanvas allows users to explore,
              save, and share their favorite recipes effortlessly. From quick
              weekday meals to gourmet dinner ideas, CulinaryCanvas has
              something for everyone. Start exploring and unleash your inner
              chef!
            </h1>
          </div>
          <div className="flex items-center justify-center mr-2 mb-3">
            <Link
              to="https://github.com/rohit0402/CulinaryCanvas_frontend"
              className="mr-2"
            >
              <FaGithub className="text-blue-300 font-bold  inline-flex items-center text-lg md:text-xl md:mb-2 lg:mb-0 hover:text-blue-600 cursor-pointer" />
              <span className="text-white">1</span>
            </Link>
            <Link to="https://github.com/rohit0402/Culinary_Canvas_backend">
              <FaGithub className="text-blue-300 font-bold inline-flex items-center text-lg md:text-xl md:mb-2 lg:mb-0 hover:text-blue-600 cursor-pointer" />
              <span className="text-white">2</span>
            </Link>
          </div>
        </div>
        <div className="m-2 sm:w-full md:w-[320px] border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-clip lg:overflow-hidden hover:shadow-md lg:hover:scale-105 transition-all backdrop-blur-3xl shadow-xl">
          <Link to="https://delicious-frontend-shjd.vercel.app/">
            <img
              src={DeliciousImg}
              alt="projectimg-1"
              className="h-[200px] w-full object-cover object-center"
            />
          </Link>
          <div className="p-4 flex flex-col gap-3">
            <div className="flex items-center justify-evenly">
              <h2 className="tracking-widest text-2xl text-white">
                DELICIOUS
              </h2>
              <Link to="https://delicious-frontend-shjd.vercel.app/">
                <span className="text-blue-300 font-bold inline-flex items-center text-lg md:text-xl md:mb-2 lg:mb-0 hover:text-blue-600 cursor-pointer">
                  Live
                </span>
              </Link>
              
            </div>
            <h1 className="text-lg lg:text-xl font-bold text-gray-400">
              Delicious is a food ordering app designed for convenience and
              enjoyment. With a user-friendly interface and diverse cuisines,
              Delicious lets users browse, order, and track deliveries
              effortlessly. Whether craving comfort food or exploring exotic
              flavors, Delicious satisfies every appetite. Order with ease and
              indulge in a culinary experience like no other!
            </h1>
          </div>
          <div className="flex items-center justify-center mr-2 mb-3 ">
          <Link to="https://github.com/rohit0402/Delicious_frontend" className="mr-2">
                <FaGithub className="text-blue-300 font-bold inline-flex items-center text-lg md:text-xl md:mb-2 lg:mb-0 hover:text-blue-600 cursor-pointer" />
                <span className="text-white">1</span>
              </Link>
              <Link to="https://github.com/rohit0402/Delicious_backend">
                <FaGithub className="text-blue-300 font-bold inline-flex items-center text-lg md:text-xl md:mb-2 lg:mb-0 hover:text-blue-600 cursor-pointer" />
                <span className="text-white">2</span>
              </Link>
          </div>
        </div>
        <div className="m-2 sm:w-full md:w-[320px] border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-clip lg:overflow-hidden hover:shadow-md lg:hover:scale-105 transition-all backdrop-blur-3xl shadow-xl">
          <Link to="https://my-weather-app-dun.vercel.app/">
            <img
              src={weatherApp}
              alt="projectimg-1"
              className="h-[200px] w-full object-cover object-center"
            />
          </Link>
          <div className="p-4 flex flex-col gap-3">
            <div className="flex items-center justify-evenly">
              <h2 className="tracking-widest text-2xl text-white">
                MyWeatherApp
              </h2>
              <Link to="https://my-weather-app-dun.vercel.app/">
                <span className="text-blue-300 font-bold inline-flex items-center text-lg md:text-xl md:mb-2 lg:mb-0 hover:text-blue-600 cursor-pointer">
                  Live
                </span>
              </Link>
              
            </div>
            <h1 className="text-lg lg:text-xl font-bold text-gray-400">
              WeatherApp is a reliable weather forecast application designed
              for simplicity and accuracy. With an intuitive interface and
              precise forecasts, WeatherApp helps users plan their day with
              confidence. Whether checking the current conditions or planning
              for the week ahead, WeatherApp provides essential weather
              information at your fingertips. Stay informed and prepared for
              any forecast with WeatherApp!
            </h1>
          </div>
          <div className="flex items-center justify-center mr-2 mb-3 ">
          <Link to="https://github.com/rohit0402/MyWeatherApp" className="mr-2">
                <FaGithub className="text-blue-300 font-bold inline-flex items-center text-lg md:text-xl md:mb-2 lg:mb-0 hover:text-blue-600 cursor-pointer" />
                <span className="text-white">1</span>
              </Link>
              
          </div>
        </div>
      </div>
      ) : (
        <div className="flex flex-wrap justify-center mb-24 ">
          {/* First Project Card */}
          <div className="m-2 sm:w-full md:w-[320px] border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-clip lg:overflow-hidden hover:shadow-md lg:hover:scale-105 transition-all backdrop-blur-3xl shadow-xl">
            <Link to="https://culinary-canvas-frontend.vercel.app">
              <img
                src={CulinarCanvas}
                alt="projectimg-1"
                className="h-[200px] w-full object-cover object-center"
              />
            </Link>

            <div className="p-4 flex flex-col gap-3">
              <div className="flex items-center justify-evenly">
                <h2 className="tracking-widest text-2xl text-white">
                  CulinaryCanvas
                </h2>
                <Link to="https://culinary-canvas-frontend.vercel.app">
                  <span className="text-blue-300 font-bold inline-flex items-center text-lg md:text-xl md:mb-2 lg:mb-0 hover:text-blue-600 cursor-pointer">
                    Live
                  </span>
                </Link>
              </div>
              <h1 className="text-lg lg:text-xl font-bold text-gray-400">
                CulinaryCanvas is a recipe app designed to make cooking easier
                and more enjoyable. With a user-friendly interface and a vast
                collection of recipes, CulinaryCanvas allows users to explore,
                save, and share their favorite recipes effortlessly. From quick
                weekday meals to gourmet dinner ideas, CulinaryCanvas has
                something for everyone. Start exploring and unleash your inner
                chef!
              </h1>
            </div>
            <div className="flex items-center justify-center mr-2 mb-3">
              <Link
                to="https://github.com/rohit0402/CulinaryCanvas_frontend"
                className="mr-2"
              >
                <FaGithub className="text-blue-300 font-bold  inline-flex items-center text-lg md:text-xl md:mb-2 lg:mb-0 hover:text-blue-600 cursor-pointer" />
                <span className="text-white">1</span>
              </Link>
              <Link to="https://github.com/rohit0402/Culinary_Canvas_backend">
                <FaGithub className="text-blue-300 font-bold inline-flex items-center text-lg md:text-xl md:mb-2 lg:mb-0 hover:text-blue-600 cursor-pointer" />
                <span className="text-white">2</span>
              </Link>
            </div>
          </div>
          <div className="m-2 sm:w-full md:w-[320px] border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-clip lg:overflow-hidden hover:shadow-md lg:hover:scale-105 transition-all backdrop-blur-3xl shadow-xl">
            <Link to="https://delicious-frontend-shjd.vercel.app/">
              <img
                src={DeliciousImg}
                alt="projectimg-1"
                className="h-[200px] w-full object-cover object-center"
              />
            </Link>
            <div className="p-4 flex flex-col gap-3">
              <div className="flex items-center justify-evenly">
                <h2 className="tracking-widest text-2xl text-white">
                  DELICIOUS
                </h2>
                <Link to="https://delicious-frontend-shjd.vercel.app/">
                  <span className="text-blue-300 font-bold inline-flex items-center text-lg md:text-xl md:mb-2 lg:mb-0 hover:text-blue-600 cursor-pointer">
                    Live
                  </span>
                </Link>
                
              </div>
              <h1 className="text-lg lg:text-xl font-bold text-gray-400">
                Delicious is a food ordering app designed for convenience and
                enjoyment. With a user-friendly interface and diverse cuisines,
                Delicious lets users browse, order, and track deliveries
                effortlessly. Whether craving comfort food or exploring exotic
                flavors, Delicious satisfies every appetite. Order with ease and
                indulge in a culinary experience like no other!
              </h1>
            </div>
            <div className="flex items-center justify-center mr-2 mb-3 mt-14">
            <Link to="https://github.com/rohit0402/Delicious_frontend" className="mr-2">
                  <FaGithub className="text-blue-300 font-bold inline-flex items-center text-lg md:text-xl md:mb-2 lg:mb-0 hover:text-blue-600 cursor-pointer" />
                  <span className="text-white">1</span>
                </Link>
                <Link to="https://github.com/rohit0402/Delicious_backend">
                  <FaGithub className="text-blue-300 font-bold inline-flex items-center text-lg md:text-xl md:mb-2 lg:mb-0 hover:text-blue-600 cursor-pointer" />
                  <span className="text-white">2</span>
                </Link>
            </div>
          </div>
          <div className="m-2 sm:w-full md:w-[320px] border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-clip lg:overflow-hidden hover:shadow-md lg:hover:scale-105 transition-all backdrop-blur-3xl shadow-xl">
            <Link to="https://my-weather-app-dun.vercel.app/">
              <img
                src={weatherApp}
                alt="projectimg-1"
                className="h-[200px] w-full object-cover object-center"
              />
            </Link>
            <div className="p-4 flex flex-col gap-3">
              <div className="flex items-center justify-evenly">
                <h2 className="tracking-widest text-2xl text-white">
                  MyWeatherApp
                </h2>
                <Link to="https://my-weather-app-dun.vercel.app/">
                  <span className="text-blue-300 font-bold inline-flex items-center text-lg md:text-xl md:mb-2 lg:mb-0 hover:text-blue-600 cursor-pointer">
                    Live
                  </span>
                </Link>
               
              </div>
              <h1 className="text-lg lg:text-xl font-bold text-gray-400">
                WeatherApp is a reliable weather forecast application designed
                for simplicity and accuracy. With an intuitive interface and
                precise forecasts, WeatherApp helps users plan their day with
                confidence. Whether checking the current conditions or planning
                for the week ahead, WeatherApp provides essential weather
                information at your fingertips. Stay informed and prepared for
                any forecast with WeatherApp!
              </h1>
            </div>
            <div className="flex items-center justify-center mr-2 mb-3 ">
            <Link to="https://github.com/rohit0402/MyWeatherApp" className="mr-2">
                  <FaGithub className="text-blue-300 font-bold inline-flex items-center text-lg md:text-xl md:mb-2 lg:mb-0 hover:text-blue-600 cursor-pointer" />
                  <span className="text-white">1</span>
                </Link>
                
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
