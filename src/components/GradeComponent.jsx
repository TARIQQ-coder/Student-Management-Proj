import React from 'react'
import GradePanel from './GradePanel'
import GradeSidebar from './GradeSidebar'

const GradeComponent = () => {
  return (
    <div className='flex flex-wrap'>
      <GradePanel />
  <GradeSidebar />
    </div>
  )
}

export default GradeComponent