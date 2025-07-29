import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useClassStore } from '../store/classStore';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { BsClock } from 'react-icons/bs';
import { SiGoogleclassroom } from 'react-icons/si';

const ClassDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const getClassById = useClassStore((state) => state.getClassById);
  const classData = getClassById(id);

  if (!classData) {
    return <p className="p-4 text-red-500">Class not found.</p>;
  }

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-2xl shadow space-y-6">
      <button
        onClick={() => navigate(-1)}
        className="text-sm text-blue-500 hover:underline"
      >
        ← Back
      </button>

      <div className="flex items-center space-x-4">
        <SiGoogleclassroom className="w-10 h-10 text-green-600" />
        <h1 className="text-2xl font-bold">{classData.title}</h1>
      </div>

      <div className="text-gray-700 space-y-2">
        <p className="flex items-center">
          <FaChalkboardTeacher className="mr-2 text-green-500" />
          <strong>Teacher:</strong>&nbsp;{classData.teacher}
        </p>

        <p className="flex items-center">
          <BsClock className="mr-2 text-blue-500" />
          <strong>Schedule:</strong>&nbsp;{classData.schedule}
        </p>

        <p className="pt-2">{classData.description}</p>
      </div>

      {/* 🧠 Subject Details Section */}
      {classData.subjectDetails?.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Subject Breakdown</h2>
          <ul className="space-y-3">
            {classData.subjectDetails.map((subject, index) => (
              <li
                key={index}
                className="border p-3 rounded-lg bg-gray-50 text-gray-700"
              >
                <h3 className="text-lg font-medium">{subject.title}</h3>
                <p className="text-sm">{subject.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ClassDetail;
