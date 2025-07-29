import React from 'react';

const OngoingLesson = () => {
  return (
    <div className="  pb-7 ">
      <h2 className="text-xl font-semibold ">Ongoing Lesson</h2>
      <div className="flex flex-col items-start bg-white px-4 py-10 rounded-2xl mt-8">
        <img
          src="path-to-image.jpg"
          alt="Lesson"
          className="w-full h-48 object-cover rounded mb-2"
        />
        <div>
          <h3 className="font-semibold">Science Basics</h3>
          <p className="text-green-500">(Ends in: 45 min)</p>
          <p>Students online: <span className="text-green-500">34/40</span></p>
          <p>Presence: Mandatory</p>
        </div>
      </div>
    </div>
  );
};

export default OngoingLesson;