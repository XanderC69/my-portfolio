import React from "react";
import Image from "../images/image.jpg";


const main = () => {
  return (
    <div className=" bg-gray-300 ">
      <div className="flex justify-center">
        <h1 className="text-4xl py-8 font-bold">SKILLS</h1>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row justify-evenly">
          <div className="flex flex-row py-6 px-4 ">
            <div className="flex md:flex-col  justify-around md:justify-centre items-center text-2xl font-bold">
              <img className="w-20 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300" src={Image} alt="" />
              <span className=" uppercase py-6">Python</span>
            </div>
          </div>
          <div className="flex flex-row py-6 px-4 ">
            <div className="flex md:flex-col  justify-between md:justify-centre items-center text-2xl font-bold">
              <img className="w-20 rounded-xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" src={Image} alt="" />
              <span className=" uppercase py-6">C++</span>
            </div>
          </div>
          <div className="flex flex-row py-6 px-4 ">
            <div className="flex md:flex-col  justify-between md:justify-centre items-center text-2xl font-bold">
              <img className="w-20 rounded-xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" src={Image} alt="" />
              <span className=" uppercase py-6">HTML</span>
            </div>
          </div>
          <div className="flex flex-row py-6 px-4 ">
            <div className="flex md:flex-col  justify-between md:justify-centre items-center text-2xl font-bold">
              <img className="w-20 rounded-xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" src={Image} alt="" />
              <span className=" uppercase py-6">CSS</span>
            </div>
          </div>
          <div className="flex flex-row py-6 px-4 ">
            <div className="flex md:flex-col  justify-between md:justify-centre items-center text-2xl font-bold">
              <img className="w-20 rounded-xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" src={Image} alt="" />
              <span className=" uppercase py-6">javascript</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-evenly">
          <div className="flex flex-row py-6 px-4 ">
            <div className="flex md:flex-col  justify-between md:justify-centre items-center text-2xl font-bold">
              <img className="w-20 rounded-xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" src={Image} alt="" />
              <span className=" uppercase py-6">React</span>
            </div>
          </div>
          <div className="flex flex-row py-6 px-4 ">
            <div className="flex md:flex-col  justify-between md:justify-centre items-center text-2xl font-bold">
              <img className="w-24 rounded-xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" src={Image} alt="" />
              <span className=" uppercase py-6">Bootstrap</span>
            </div>
          </div>
          <div className="flex flex-row py-6 px-4 ">
            <div className="flex md:flex-col  justify-between md:justify-center items-center text-2xl font-bold">
              <img className="w-20 rounded-xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" src={Image} alt="" />
              <span className=" uppercase py-6">Tailwind</span>
            </div>
          </div>
          <div className="flex flex-row py-6 px-4 ">
            <div className="flex md:flex-col  justify-between md:justify-centre items-center text-2xl font-bold">
              <img className="w-36 rounded-xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" src={Image} alt="" />
              <span className=" uppercase py-6">mongodb</span>
            </div>
          </div>
          <div className="flex flex-row py-6 px-4 ">
            <div className="flex md:flex-col  justify-between md:justify-centre items-center text-2xl font-bold">
              <img className="w-36 rounded-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300" src={Image} alt="" />
              <span className=" uppercase py-6">Firebase</span>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default main;
