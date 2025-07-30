const getColor = (grade) => {
  if (!grade) return 'bg-gray-200 text-gray-600'
  const num = parseInt(grade)
  if (num >= 90) return 'bg-green-100 text-green-700'
  if (num >= 80) return 'bg-yellow-100 text-yellow-700'
  if (num >= 70) return 'bg-orange-100 text-orange-700'
  if (num >= 50) return 'bg-red-100 text-red-600'
  return 'bg-red-200 text-red-700'
}

const getLetter = (grade) => {
  if (!grade) return 'N/A'
  const num = parseInt(grade)
  if (num >= 90) return 'A'
  if (num >= 80) return 'B'
  if (num >= 70) return 'C'
  if (num >= 50) return 'D'
  return 'E'
}

const GradeBadge = ({ grade }) => {
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getColor(grade)}`}>
      {grade ? `${grade} (${getLetter(grade)})` : 'N/A'}
    </span>
  )
}

export default GradeBadge
