const StudentProfile = () => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm text-center">
      <div className="text-xs font-semibold mb-2 text-yellow-600 bg-yellow-100 px-2 py-1 rounded-full w-max mx-auto">
        Student of General Studies
      </div>
      <img
        src="https://i.pravatar.cc/100?img=23"
        alt="student"
        className="w-20 h-20 rounded-full mx-auto mb-3"
      />
      <h2 className="text-lg font-semibold">Kanye East</h2>
      <p className="text-sm text-gray-500">k.east@student.io</p>
    </div>
  )
}

export default StudentProfile
