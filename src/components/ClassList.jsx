import React from "react";
import ClassCard from "./ClassCard";
import { useClassStore } from "../store/classStore";
import EnrolledClass from "./EnrolledClass";
import ClassMaterials from "./ClassMaterials";
import { CiSearch, CiMail } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";

const ClassList = () => {
  const classes = useClassStore((state) => state.classes);

  return (
    <div>
      <div className="flex justify-between items-center mb-6 border-b pb-2">
                    <h1 className="text-2xl font-semibold ml-6">Classes</h1>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-2">
                        <div className="relative">
                          <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                          <input
                            type="text"
                            placeholder="Search"
                            className="pl-10 pr-4 py-2 bg-[#dddbdb] rounded-3xl outline-none placeholder:text-[#f5f5f5]"
                          />
                        </div>
                        <div>
                          <IoIosNotificationsOutline className="text-gray-500" />
                        </div>
                        <div>
                          <CiMail className="text-gray-500" />
                        </div>
                      </div>
                    </div>
                  </div>

      <div className="flex flex-col md:flex-row gap-6 p-6">
        {/* Left side: All available classes */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          {classes.map((classItem) => (
            <ClassCard key={classItem.id} classData={classItem} />
          ))}
        </div>

        <div className="flex flex-col justify-between bg-[#f5f1f1] px-4  rounded pt-2">
          {/* Right side: Enrolled classes */}
          <div className="w-full md:w-[300px]">
            <h2 className="text-xl font-bold mb-4">Enrolled Classes</h2>
            <EnrolledClass />
          </div>
          <div>
            <ClassMaterials />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassList;
