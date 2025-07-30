import React from "react";
import ClassCard from "./ClassCard";
import { useClassStore } from "../store/classStore";
import EnrolledClass from "./EnrolledClass";
import ClassMaterials from "./ClassMaterials";

const ClassList = () => {
  const classes = useClassStore((state) => state.classes);

  return (
    <div>
      <h1 className="text-2xl font-semibold ml-6 border-b pb-2">Classes</h1>

      <div className="flex flex-col md:flex-row gap-6 p-6">
        {/* Left side: All available classes */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          {classes.map((classItem) => (
            <ClassCard key={classItem.id} classData={classItem} />
          ))}
        </div>

        <div className="flex flex-col justify-between bg-[#e7e3e3] px-4  rounded pt-2">
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
