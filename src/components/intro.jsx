import React from "react";
import Image from "../images/image.jpg";

const intro = () => {
  return (
    <div className=" flex md:flex-row flex-col md:pl-10 md:justify-evenly justify-center items-center py-28  ">
      
      
        <div className="flex flex-col justify-center align-center items-center">
          <div className="w-60  border-gray-300 border-8 rounded-full ">
            <img className="w-60 rounded-full" src={Image} alt="" />
          </div>
          <div className="flex flex-col justify-center items-center">
            {" "}
            <h1 className="text-6xl mt-8 font-bold text-green-200">Frontend</h1>
            <h1 className="text-6xl mt-3 font-bold text-green-200">
              Developer
            </h1>
          </div>
        </div>
        <div>
        <div className="flex flex-col items-center ">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-xl font-bold md:text-3xl mt-8 text-indigo-200">
              I like to craft,different solid web{" "}
            </h1>
            <h1 className="text-xl font-bold md:text-3xl text-indigo-200">
              designs with better efficiency and{" "}
            </h1>
            <h1 className="text-xl font-bold md:text-3xl text-indigo-200">
              nice user experience{" "}
            </h1>
          </div>
    
      </div>
      <div className="flex md:w-96 md:justify-center md:items-center md:align-center mt-12 ml-16">
        <button className="p-8 rounded-3xl md:mt-12 flex justify-center align-middle text-3xl border-green-200 border-2 text-white  hover:bg-green-500 hover:text-black">
          Explore
        </button>
      </div>
        </div>
        
    </div>
  );
};

export default intro;
