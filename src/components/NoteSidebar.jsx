import React from 'react'
import TeacherProfile from './TeacherProfile'
import Materials from './Materials'
import Homework from './Homework'

const NoteSidebar = () => {
  return (
    <div className="w-full lg:w-[45%] p-4 space-y-4 bg-[#f5f1f1] rounded-lg md:ml-2">
      <TeacherProfile />
      <Materials />
      <Homework />
    </div>
  )
}

export default NoteSidebar
