import React from "react";
import Calculator from "../images/calc.png";
import Compound from "../images/compound.png";
import Lap from "../images/xecart.jpeg";
import Port from "../images/portfolio.png";

const work = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center md:justify-start ">
        <h1 className="py-8 md:pl-16 md:text-8xl text-white font-bold text-6xl ">MY PROJECTS</h1>
      </div>
      <div className="flex-col px-8">
        <div className="flex py-8 flex-col md:flex-row justify-center items-center md:justify-between ">
          <div className="mb-3.5 md:w-1/3 px-8 transition ease-in-out delay-150  hover:-translate-y-5 hover:scale-110  duration-300">
            <img className="w-72 rounded-3xl h-96 md:w-96" src={Port} alt="" />
          </div>
          <div className="  font-bold  p-8 border-2 border-green-300 text-green-300 text-3xl rounded-3xl md:w-2/3 px-8   ">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis sed voluptatibus fugiat quisquam architecto officiis
              minima dolore eum maiores velit beatae aperiam fugit tempore
              delectus, dolorum exercitationem nulla nisi corrupti!
            </p>
          </div>
        </div>
        <div className="flex py-8 flex-col md:flex-row justify-center items-center md:justify-between ">
          <div className="mb-3.5 md:w-1/3 px-8 transition ease-in-out delay-150  hover:-translate-y-5 hover:scale-110  duration-300">
            <img className="w-72 rounded-3xl h-96 md:w-96" src={Lap} alt="" />
          </div>
          <div className="  font-bold  p-8 border-2 border-green-300 text-green-300 text-3xl rounded-3xl md:w-2/3 px-8   ">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis sed voluptatibus fugiat quisquam architecto officiis
              minima dolore eum maiores velit beatae aperiam fugit tempore
              delectus, dolorum exercitationem nulla nisi corrupti!
            </p>
          </div>
        </div>
        <div className="flex py-8 flex-col md:flex-row justify-center items-center md:justify-between ">
          <div className="mb-3.5 md:w-1/3 px-8 transition ease-in-out delay-150  hover:-translate-y-5 hover:scale-110  duration-300">
            <img className="w-72 rounded-3xl h-96 md:w-96" src={Calculator} alt="" />
          </div>

          <div className=" font-bold  p-8 border-2 border-green-300 text-green-300 text-3xl rounded-3xl md:w-2/3 px-8   ">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis sed voluptatibus fugiat quisquam architecto officiis
              minima dolore eum maiores velit beatae aperiam fugit tempore
              delectus, dolorum exercitationem nulla nisi corrupti!
            </p>
          </div>
        </div>
        
        <div className="flex py-8 flex-col md:flex-row justify-center items-center md:justify-between ">
          <div className="mb-3.5 md:w-1/3 px-8 transition ease-in-out delay-150  hover:-translate-y-5 hover:scale-110  duration-300">
            <img className="w-72 rounded-3xl h-96 md:w-96" src={Compound} alt="" />
          </div>
          <div className="  font-bold  p-8 border-2 border-green-300 text-green-300 text-3xl rounded-3xl md:w-2/3 px-8   ">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis sed voluptatibus fugiat quisquam architecto officiis
              minima dolore eum maiores velit beatae aperiam fugit tempore
              delectus, dolorum exercitationem nulla nisi corrupti!
            </p>
          </div>
        </div>
        
        
        
      </div>
    </div>
  );
};

export default work;