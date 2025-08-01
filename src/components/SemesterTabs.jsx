const semesters = ['1st Semester', '2nd Semester', '3rd Semester', '4th Semester']

const SemesterTabs = ({ active, onChange }) => {
  return (
    <div className="flex space-x-3 mb-4 ">
      {semesters.map((label, idx) => (
        <button
          key={label}
          onClick={() => onChange(idx)}
          className={`px-4 py-2 rounded-full text-sm border   ${
            active === idx ? 'bg-[#f9f9f9] text-black font-semibold border-black' : 'bg-white text-gray-700 border-[#dad9d9]'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

export default SemesterTabs
