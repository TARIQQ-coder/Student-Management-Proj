const StudentProfile = () => {
  return (

    <div>
      <h3  className="font-semibold mb-4 text-xl">Profile</h3>
        <div className="bg-white rounded-xl px-4 text-center border border-[#bebbbb] h-[250px] py-12">
          <div className=" font-semibold mb-2 text-green-800 bg-yellow-50 px-2 py-1 rounded-full w-max mx-auto">
            Student of General Studies
          </div>
          <img
            src="https://i.pravatar.cc/100?img=23"
            alt="student"
            className="w-20 h-20 rounded-full mx-auto mb-3"
          />
          <h2 className="text-lg font-semibold">Kanye East</h2>
          <p className="text-gray-500">k.east@student.io</p>
        </div>
    </div>
  )
}

export default StudentProfile
