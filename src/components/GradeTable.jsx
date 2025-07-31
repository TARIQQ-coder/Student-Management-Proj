import GradeBadge from './GradeBadge'

const GradeTable = ({ courses }) => {
  return (
    <div className="bg-white rounded-xl border  overflow-hidden border-[#bebbbb]">
      <table className="w-full text">
        <thead className="bg-[#f9f9f9] text-left text-[#8f8989] ">
          <tr>
            <th className="p-3 font-medium">Class Name</th>
            <th className="p-3 font-medium">Exam 1</th>
            <th className="p-3 font-medium">Exam 2</th>
            <th className="p-3 font-medium">Exam 3</th>
            <th className="p-3 font-medium">Final Paper</th>
            <th className="p-3 font-medium">Final Grade</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, i) => (
            <tr key={i} className="border-t">
              <td className="p-3 font-medium">{course.name}</td>
              <td className="p-3">{course.exam1 ?? '-'}</td>
              <td className="p-3">{course.exam2 ?? '-'}</td>
              <td className="p-3">{course.exam3 ?? '-'}</td>
              <td className="p-3">{course.finalPaper ?? '-'}</td>
              <td className="p-3">
                <GradeBadge grade={course.finalGrade} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default GradeTable
