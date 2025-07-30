import React from 'react';
import { useClassStore } from '../store/classStore';

const EnrolledClass = () => {
  const enrolledClassIds = useClassStore((state) => state.enrolledClassIds);
  const classes = useClassStore((state) => state.classes);

  const enrolledClasses = classes.filter((cls) =>
    enrolledClassIds.includes(cls.id)
  );

  if (enrolledClasses.length === 0) {
    return <p className="text-gray-500">No classes enrolled yet.</p>;
  }

  return (
    <div className="space-y-4">
      {enrolledClasses.map((cls) => (
        <div
          key={cls.id}
          className="p-4 bg-white rounded-lg  border border-[#d1c9c9]"
        >
          <h3 className="font-semibold text-xl">{cls.title}</h3>
          <p className="text-gray-600">{cls.teacher}</p>
          <p className='text-gray-600'>{cls.schedule}</p>
        </div>
      ))}
    </div>
  );
};

export default EnrolledClass;
