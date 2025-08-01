import React from "react";
import { FaRegNewspaper } from "react-icons/fa6";
import { FaPenToSquare } from "react-icons/fa6";
import { IoBriefcaseOutline } from "react-icons/io5";
import { PiMathOperationsFill } from "react-icons/pi";
import { SlBookOpen } from "react-icons/sl";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ClassMaterials = () => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-2 ">Class Materials</h2>
      <div>
        <div className="flex items-center justify-between bg-white px-2 py-3 rounded-2xl my-2 cursor-pointer">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full border-gray-500 border flex items-center justify-center">
              <SlBookOpen className="text-lg text-gray-700" />
            </div>
            <div>
              <p>Lesson Materials</p>
              
            </div>
          </div>
<div className="mr-2">
           <FaAngleRight className="w-6 h-6 cursor-pointer"/>
           </div>
        </div>

        <div className="flex items-center justify-between bg-white px-2 py-3 rounded-2xl my-2 cursor-pointer">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full border-gray-500 border flex items-center justify-center">
              <IoBriefcaseOutline className="text-lg text-gray-700" />
            </div>
            <div>
              <p>Homework</p>
            </div>
          </div>
          <div className="mr-2">
           <FaAngleRight className="w-6 h-6 cursor-pointer"/>
           </div>
        </div>

        <div className="flex items-center justify-between bg-white px-2 py-3 rounded-2xl my-2 cursor-pointer">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full border-gray-500 border flex items-center justify-center">
              <FaPenToSquare className="text-lg text-gray-700" />
            </div>
            <div>
              <p>Your Notes</p>
            </div>
          </div>
          <Link to='/notes'>
          <div className="mr-2">
           <FaAngleRight className="w-6 h-6 cursor-pointer"/>
           </div>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ClassMaterials;
