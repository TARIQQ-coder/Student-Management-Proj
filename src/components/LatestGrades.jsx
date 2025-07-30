const latest = [
  { subject: 'Mid-term paper', term: 'Summer term', grade: 98 },
  { subject: 'Art History', term: 'Summer term', grade: 72 },
  { subject: 'Maths & Numbers', term: 'Summer term', grade: 34 },
]

const getBadgeColor = (grade) => {
  if (grade >= 90) return 'bg-green-100 text-green-700'
  if (grade >= 70) return 'bg-orange-100 text-orange-700'
  return 'bg-red-100 text-red-700'
}

const LatestGrades = () => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <h3 className="text-sm font-semibold mb-4 text-gray-700">Latest Grades</h3>
      <ul className="space-y-3">
        {latest.map((item, i) => (
          <li key={i} className="flex justify-between items-center text-sm">
            <div>
              <p className="font-medium">{item.subject}</p>
              <p className="text-gray-500 text-xs">{item.term}</p>
            </div>
            <span className={`px-3 py-1 text-xs rounded-full font-semibold ${getBadgeColor(item.grade)}`}>
              {item.grade}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LatestGrades
