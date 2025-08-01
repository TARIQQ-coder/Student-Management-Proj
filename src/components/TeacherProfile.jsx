import { Mail, Phone, MoreHorizontal } from 'lucide-react'
import ProfileImage2 from '../../src/assets/ProfileImage2.jpg' 


const tagColors = {
  Science: 'bg-green-100 text-green-700',
  Chemistry: 'bg-teal-100 text-teal-700',
  History: 'bg-yellow-100 text-yellow-700',
  Art: 'bg-pink-100 text-pink-700',
  Mathematics: 'bg-blue-100 text-blue-700',
  Physics: 'bg-indigo-100 text-indigo-700',
  Literature: 'bg-purple-100 text-purple-700',
  'Information Technology': 'bg-orange-100 text-orange-700',
  'World Economics': 'bg-sky-100 text-sky-700',
  'French & Spanish Language': 'bg-pink-50 text-pink-600',
  'Physical Education': 'bg-lime-100 text-lime-700',
  default: 'bg-gray-100 text-gray-600',
}

const TeacherProfile = () => {


  return (
    <div>
          <h3 className="text-xl font-semibold">Tutor</h3>
        <div className="bg-white rounded-xl px-4 text-center border border-[#bebbbb] h-[300px] py-6 mt-4">
          <div className='mt-4'>
            <img
              src={ProfileImage2}
              alt='name'
              className="w-25 h-25 rounded-full mx-auto object-cover"
            />
            <h4 className="text-lg font-semibold mt-2">Mr.Hommes</h4>
            <p className="text-sm text-gray-500">j.homme@teacher.io</p>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-3 mt-6">
            <button className="border py-2 px-4 border-gray-300 rounded-full cursor-pointer">
              <Mail className="w-4 h-4 text-gray-600" />
            </button>
            <button className="border py-2 px-4 border-gray-300 rounded-full cursor-pointer">
              <Phone className="w-4 h-4 text-gray-600" />
            </button>
            <button className="border py-2 px-4 border-gray-300 rounded-full cursor-pointer">
              <MoreHorizontal className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
    </div>
  )
}

export default TeacherProfile
