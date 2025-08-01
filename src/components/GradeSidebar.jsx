import React from 'react'
import StudentProfile from './StudentProfile'
import LatestGrades from './LatestGrades'
import NextExamCard from './NextExamCard'

const GradeSidebar = () => {
  return (
    <div className="w-full lg:w-[45%] p-4 space-y-4 bg-[#f5f1f1] rounded-lg md:ml-2">
      <StudentProfile />
      <LatestGrades />
      <NextExamCard />
    </div>
  )
}

export default GradeSidebar
