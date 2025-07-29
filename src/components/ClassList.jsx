import React, { useState } from 'react';
import ClassCard from './ClassCard';
import { useClassStore } from '../store/classStore';



const ClassList = () => {
  const classes = useClassStore((state) => state.classes);

 

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {classes.map((classItem) => (
        <ClassCard key={classItem.id} classData={classItem} />
      ))}

    </div>
  );
};

export default ClassList;
