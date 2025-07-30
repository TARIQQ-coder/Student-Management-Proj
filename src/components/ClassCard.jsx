import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BsClock } from "react-icons/bs";
import EnrollButton from "./EnrollButton";
import { useNavigate } from "react-router-dom";
import { SiGoogleclassroom, SiBookstack, SiCodeforces } from "react-icons/si";
import { PiMathOperationsFill } from "react-icons/pi";

const ClassCard = ({ classData, onViewDetails }) => {
  const iconMap = {
    SiGoogleclassroom: <SiGoogleclassroom className="w-12 h-12" />,
    SiBookstack: <SiBookstack className="w-12 h-12" />,
    SiCodeforces: <SiCodeforces className="w-12 h-12" />,
    PiMathOperationsFill: <PiMathOperationsFill className="w-12 h-12" />,
  };

  const navigate = useNavigate();

  return (
    <div>

    
    <div>
      <div className="bg-white border-2 border-[#d1c9c9] rounded-2xl p-4 space-y-3">
        <div className="flex items-center justify-around md:flex-col md:items-start md:space-y-3">
          <div>{iconMap[classData.icon]}</div>
          <div>
            <h2 className="text-xl font-bold">
              {classData.title}
            </h2>

            <div className="flex items-center text-gray-600">
              <FaChalkboardTeacher className="mr-2 text-green-600" />
              {classData.teacher}
            </div>

            <div className="flex items-center text-gray-600">
              <BsClock className="mr-2 text-blue-600" />
              {classData.schedule}
            </div>

            <p className="text-gray-700 ">{classData.description}</p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-3">
          <EnrollButton classId={classData.id} />
          <button
            onClick={() => navigate(`/classes/${classData.id}`)}
            className="text-sm px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-full"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ClassCard;
