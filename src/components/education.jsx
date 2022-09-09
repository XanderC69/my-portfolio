import React from "react";


const main = () => {
  return (
<div className="h-400 bg-black ">
      <div className="flex justify-center">
        <h1 className="text-4xl text-white py-8 font-bold">EDUCATION</h1>
      </div>

      <div className="flex flex-col md:flex-row ">
        <div className="bg-black m-10 border-2 rounded-xl p-8 h-80 uppercase text-white font-bold md:w-1/2">
          Xth Results
          <div className="flex flex-col p-8  ">
            <div className="flex items-center">
              {/* <img className="w-20 rounded-full" src={Python} alt="py-logo" /> */}
              <span>Done from-Aggarwal Public School</span>
            </div>
            <div className="flex items-center">
              {/* <img className="w-20 rounded-full" src={C} alt="" srcset="" /> */}
              <span>With 8.20 cgpa</span>
            </div>
            <div className="flex items-center">
              {/* <img className="w-20 rounded-full" src={Python} alt="py-logo" /> */}
              <span>in CBSE</span>
            </div>
            
          </div>
        </div>
        <div className="bg-black m-10 border-2 rounded-xl p-8 h-80 uppercase text-white font-bold md:w-1/2">
          Xth Results
          <div className="flex flex-col p-8  ">
            <div className="flex items-center">
              {/* <img className="w-20 rounded-full" src={Python} alt="py-logo" /> */}
              <span>Done from Aggarwal Public School</span>
            </div>
            <div className="flex items-center">
              {/* <img className="w-20 rounded-full" src={C} alt="" srcset="" /> */}
              <span>with 84.60%</span>
            </div>
            <div className="flex items-center">
              {/* <img className="w-20 rounded-full" src={Python} alt="py-logo" /> */}
              <span>PCM</span>
            </div>
            <div className="flex items-center">
              {/* <img className="w-20 rounded-full" src={Python} alt="py-logo" /> */}
              <span>CBSE</span>
            </div>
          </div>
        </div>
        <div className="bg-black m-10 border-2 rounded-xl p-8 uppercase  text-white font-bold h-80 md:w-1/2">
          Graduation
          <div className="flex flex-col p-8  ">
            <div className="flex items-center">
              {/* <img className="w-20 rounded-full" src={Python} alt="py-logo" /> */}
              <span>Pursuing Btech from UIET Kurukshetra, Kurukshetra University</span>
            </div>
            <div className="flex items-center">
              {/* <img className="w-20 rounded-full" src={C} alt="" srcset="" /> */}
              <span>Computer Science Engineering</span>
            </div>
            <div className="flex items-center">
              {/* <img className="w-20 rounded-full" src={Python} alt="py-logo" /> */}
              <span>Current CGPA- 7.60</span>
            </div>
            <div className="flex items-center">
              {/* <img className="w-20 rounded-full" src={Python} alt="py-logo" /> */}
              <span>7th SEM</span>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default main;
