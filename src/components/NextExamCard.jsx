import { CalendarDays, Globe } from 'lucide-react' // or use any icon lib you prefer

const NextExamCard = () => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <h3 className="text-sm font-semibold mb-3 text-gray-700">Next Exam</h3>
      <div className="flex items-start space-x-3">
        <div className="bg-blue-100 p-2 rounded-full">
          <CalendarDays className="w-5 h-5 text-blue-600" />
        </div>
        <div>
          <p className="font-medium text-sm">World Economy Exam</p>
          <p className="text-xs text-gray-500">Monday, 15 May 2023</p>
          <p className="text-xs text-gray-500">11 AM, Online</p>
        </div>
      </div>
    </div>
  )
}

export default NextExamCard
