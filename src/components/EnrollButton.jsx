import React, { useState } from 'react';
import { useClassStore } from '../store/classStore';

const EnrollButton = ({ classId }) => {
   const enrolledClassIds = useClassStore((state) => state.enrolledClassIds);
  const toggleEnrollment = useClassStore((state) => state.toggleEnrollment);
  const isEnrolled = enrolledClassIds.includes(classId);

 

  return (
    <button
      onClick={() => toggleEnrollment(classId)}
      className={`px-4 py-1 rounded-full text-sm font-medium transition-colors ${
        isEnrolled
          ? 'bg-red-100 text-red-600 hover:bg-red-200'
          : 'bg-green-600 text-white hover:bg-green-700'
      }`}
    >
      {isEnrolled ? 'Unenroll' : 'Enroll'}
    </button>
  );
};

export default EnrollButton;
