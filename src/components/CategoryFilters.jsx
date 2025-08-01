const categories = [
  'All Teachers',
  'Science',
  'History',
  'Art',
  'Mathematics',
  'Physics',
  'Chemistry',
  'Literature',
  'Information Technology',
]

const CategoryFilters = ({ activeCategory, onChangeCategory }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6 pl-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChangeCategory(category)}
          className={`px-4 py-1 cursor-pointer rounded-full border transition
            ${activeCategory === category 
              ? 'bg-gray-100 text-black border-black'
              : 'bg-white text-gray-600 border-gray-300 hover:border-black'}`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilters
