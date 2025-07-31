import React, { useState } from 'react'
import CategoryFilters from './CategoryFilters'
import TeacherGrid from './TeacherGrid'
import { teachers as allTeachers } from '../../data/teachers'
import { CiSearch, CiMail } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";

const TeacherSection = () => {
  const [activeCategory, setActiveCategory] = useState('All Teachers')

  // Filter logic
  const filteredTeachers =
    activeCategory === 'All Teachers'
      ? allTeachers
      : allTeachers.filter((teacher) =>
          teacher.subjects.includes(activeCategory)
        )

  return (
    <section className="p-6 bg-white min-h-screen">
      <div className="flex justify-between items-center mb-6 border-b pb-2">
                    <h1 className="text-2xl font-semibold ml-6">Teachers</h1>
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

      <CategoryFilters
        activeCategory={activeCategory}
        onChangeCategory={setActiveCategory}
      />

      <TeacherGrid teachers={filteredTeachers} />
    </section>
  )
}

export default TeacherSection
