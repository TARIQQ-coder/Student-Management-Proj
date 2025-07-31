import React, { useState } from 'react'
import SemesterTabs from './SemesterTabs'
import GradeTable from './GradeTable'

// Mock data (you’ll later fetch from a DB or props)
import { semesterData } from '../../data/gradesData'

const GradePanel = () => {
  const [activeSemester, setActiveSemester] = useState(0) // index: 0 = 1st Semester

  return (
    <div className="w-full py-2 m">
      <SemesterTabs active={activeSemester} onChange={setActiveSemester} />
      <GradeTable courses={semesterData[activeSemester]} />
    </div>
  )
}

export default GradePanel
