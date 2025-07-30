import GradeBadge from './GradeBadge'

const GradeTable = ({ courses }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-left">
          <tr>
            <th className="p-3">Class Name</th>
            <th className="p-3">Exam 1</th>
            <th className="p-3">Exam 2</th>
            <th className="p-3">Exam 3</th>
            <th className="p-3">Final Paper</th>
            <th className="p-3">Final Grade</th>
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
