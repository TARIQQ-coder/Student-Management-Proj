import React from "react";
import courses from "../../data/Courses";

const Overview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 pl-8">
      {courses.map((course, index) => {
        const IconComponent = course.icon; // Capitalized because it's a component

        return (
          <div
            key={index}
            className="bg-white p-4 rounded-lg border-2 max-w-sm border-[#d1c9c9]"
          >
            <div className="flex items-center space-x-4 justify-around">
              <div>
                <IconComponent className={`w-12 h-12 ${course.iconColor}`} />
              </div>

              <div>
                <h2 className="text-lg font-semibold">{course.title}</h2>
                <p className="mt-2">{course.description}</p>
                <p>{course.schedule}</p>
                <p>{course.students} students</p>

                <div className="mt-4">
                  <div className="flex justify-between text-sm text-green-400 mb-1">
                    <span>{course.lessonProgress}</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-2 rounded-full bg-[#f5f5f5]">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                      style={{ width: `${course.percent}%` }}
                    ></div>
                  </div>

                  {/* Percentage text */}
                  <div className="text-right text-xs text-[#8a8484] mt-1">
                    {course.percent}% completed
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Overview;
