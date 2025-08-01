import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import { MdInsertLink } from "react-icons/md";

const Materials = () => {
  return (
    <div className="mt-16">
      <h2 className="text-xl font-semibold">Materials and Reading</h2>
      <div className="space-y-4">


        <div className=" bg-white py-6  rounded-2xl mt-2 border border-gray-400 ">
          <ul>
            <div className="flex items-center justify-between border-b pb-3 border-gray-300">
            <li className="ml-6 text-gray-800 font-semibold text-lg">Syllabus</li>
            <div className="mr-6 text-gray-400">
              <IoEyeOutline />
            </div>
            </div>

            <div className="flex items-center justify-between border-b pb-3 border-gray-300 mt-3">
            <li className="ml-6 text-gray-800 font-semibold text-lg">Science-Book.pdf</li>
            <div className="mr-6 text-gray-400">
              <FiDownload />
            </div>
            </div>

            <div className="flex items-center justify-between border-b pb-3 border-gray-300 mt-3">
            <li className="ml-6 text-gray-800 font-semibold text-lg">Interesting website link</li>
            <div className="mr-6 text-gray-400">
              <MdInsertLink className="w-5 h-5"/>
            </div>
            </div>

            <div className="flex items-center justify-between border-b pb-3 border-gray-300 mt-3">
            <li className="ml-6 text-gray-800 font-semibold text-lg">History of Science</li>
            <div className="mr-6 text-gray-400">
              <FiDownload />
            </div>
            </div>

            <div className="flex items-center justify-between mt-3">
            <li className="ml-6 text-gray-800 font-semibold text-lg"> Book of Science</li>
            <div className="mr-6 text-gray-400">
              <FiDownload />
            </div>
            </div>
          </ul>

        </div>

      </div>
    </div>
  );
};

export default Materials;
