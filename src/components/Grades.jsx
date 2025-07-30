import React from "react";
import { FaRegNewspaper } from "react-icons/fa6";
import { GiBrain } from "react-icons/gi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { PiMathOperationsFill } from "react-icons/pi";

const Grades = () => {
  return (
    <div className=" mb-4 md:mb-12">
      <h2 className="text-2xl font-semibold mb-2">Grades</h2>
      <div className="space-y-4">


        <div className="flex items-center justify-between bg-white px-6 py-10 rounded-2xl mt-8 ">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full border-gray-500 border flex items-center justify-center">
              <IoDocumentTextOutline className="text-lg text-gray-700" />
            </div>
            <div>
              <p>Mid-term paper</p>
              <p className="text-sm text-gray-500 ml-1">Summer term</p>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
           <span>98</span>
           </div>
        </div>

        <div className="flex items-center justify-between bg-white px-6 py-10 rounded-2xl">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full border-gray-500 border flex items-center justify-center">
              <GiBrain className="text-lg text-gray-700" />
            </div>
            <div>
              <p>Art History</p>
              <p className="text-sm text-gray-500 ml-1">Summer term</p>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
           <span>72</span>
           </div>
        </div>

        <div className="flex items-center justify-between bg-white px-6 py-10 rounded-2xl">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full border-gray-500 border flex items-center justify-center">
              <PiMathOperationsFill className="text-lg text-gray-700" />
            </div>
            <div>
              <p>Maths & Numbers</p>
              <p className="text-sm text-gray-500 ml-1">Summer term</p>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center">
           <span>34</span>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Grades;
