import React from "react";


const main = () => {
  return (
    <div className="h-400 bg-green-400 ">
      <div className="flex justify-center">
        <h1 className="text-4xl py-8 font-bold">EDUCATION</h1>
      </div>

      <div className="flex flex-col md:flex-row ">
        <div className="bg-black m-10 border-2 rounded-xl p-8 h-80 uppercase text-white font-bold md:w-1/3">
          Programming languages
          <div className="flex flex-col p-8  ">
            <div className="flex items-center">
              {/* <img className="w-20 rounded-full" src={Python} alt="py-logo" /> */}
              <span>C</span>
            </div>
            <div className="flex items-center">
              {/* <img className="w-20 rounded-full" src={C} alt="" srcset="" /> */}
              <span>C++</span>
            </div>
            <div className="flex items-center">
              {/* <img className="w-20 rounded-full" src={Python} alt="py-logo" /> */}
              <span>Python</span>
            </div>
            <div className="flex items-center">
              {/* <img className="w-20 rounded-full" src={Python} alt="py-logo" /> */}
              <span>Java</span>
            </div>

          </div>
        </div>
        <div className="bg-black m-10 border-2 rounded-xl p-8 uppercase  text-white font-bold h-80 md:w-1/3">
          Front-End
          <div className="flex flex-col p-8  ">
            <div className="flex items-center">
              {/* <img className="w-20 rounded-full" src={Python} alt="py-logo" /> */}
              <span>HTML</span>
            </div>
            <div className="flex items-center">
              {/* <img className="w-20 rounded-full" src={C} alt="" srcset="" /> */}
              <span>CSS</span>
            </div>
            <div className="flex items-center">
              {/* <img className="w-20 rounded-full" src={Python} alt="py-logo" /> */}
              <span>JavaScript</span>
            </div>
            <div className="flex items-center">
              {/* <img className="w-20 rounded-full" src={Python} alt="py-logo" /> */}
              <span>Bootstrap</span>
            </div>
            <div className="flex items-center">
              {/* <img className="w-20 rounded-full" src={Python} alt="py-logo" /> */}
              <span>Tailwind</span>
            </div>

          </div>
        </div>
        <div className="bg-black m-10 border-2 rounded-xl p-8 uppercase  text-white font-bold h-80 md:w-1/3">
          back-end
          <div className="flex flex-col p-8  ">
            <div className="flex items-center">
              {/* <img className="w-20 rounded-full" src={Python} alt="py-logo" /> */}
              <span>C</span>
            </div>
            <div className="flex items-center">
              {/* <img className="w-20 rounded-full" src={C} alt="" srcset="" /> */}
              <span>C++</span>
            </div>
            <div className="flex items-center">
              {/* <img className="w-20 rounded-full" src={Python} alt="py-logo" /> */}
              <span>Python</span>
            </div>
            <div className="flex items-center">
              {/* <img className="w-20 rounded-full" src={Python} alt="py-logo" /> */}
              <span>Java</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default main;
