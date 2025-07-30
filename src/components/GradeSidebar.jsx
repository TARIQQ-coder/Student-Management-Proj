import React from 'react'
import StudentProfile from './StudentProfile'
import LatestGrades from './LatestGrades'
import NextExamCard from './NextExamCard'

const GradeSidebar = () => {
  return (
    <div className="w-full lg:w-1/3 p-4 space-y-6">
      <StudentProfile />
      <LatestGrades />
      <NextExamCard />
    </div>
  )
}

export default GradeSidebar
