import { CalendarDays, Globe } from 'lucide-react' // or use any icon lib you prefer

const NextExamCard = () => {
  return (
    <div className=" ">
      <h3 className="text-lg font-semibold mb-3">Next Exam</h3>
      <div className="flex items-center space-x-3 bg-white rounded-xl p-4">
        <div className="bg-blue-100 p-2 rounded-full">
          <CalendarDays className="w-8 h-8 text-blue-600" />
        </div>
        <div>
          <p className="font-medium my-2">World Economy Exam</p>
          <p className="text-sm text-gray-500">Monday, 15 May 2023</p>
          <p className="text-sm text-gray-500">11 AM, Online</p>
        </div>
      </div>
    </div>
  )
}

export default NextExamCard
