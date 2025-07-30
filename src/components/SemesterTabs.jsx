const semesters = ['1st Semester', '2nd Semester', '3rd Semester', '4th Semester']

const SemesterTabs = ({ active, onChange }) => {
  return (
    <div className="flex space-x-3 mb-4">
      {semesters.map((label, idx) => (
        <button
          key={label}
          onClick={() => onChange(idx)}
          className={`px-4 py-2 rounded-full text-sm border ${
            active === idx ? 'bg-black text-white' : 'bg-gray-100 text-gray-600'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

export default SemesterTabs
