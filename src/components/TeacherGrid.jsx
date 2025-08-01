import TeacherCard from './TeacherCard'

const TeacherGrid = ({ teachers }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pl-8">
      {teachers.map((teacher, index) => (
        <TeacherCard key={index} teacher={teacher} />
      ))}
    </div>
  )
}

export default TeacherGrid
