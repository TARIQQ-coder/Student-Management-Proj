const ProgressBars = () => {
  const progress = [
    { label: 'Lectures', value: 90, total: 100 },
    { label: 'Assignments', value: 14, total: 21 },
    { label: 'Exams', value: 5, total: 7 }
  ]

  return (
    <div className="">
      <h3 className=" font-semibold mb-4 text-xl">Progress</h3>
      <div className="space-y-6 bg-white p-4 rounded-xl border border-[#bebbbb]">
        {progress.map((item, i) => {
          const percent = Math.round((item.value / item.total) * 100)
          return (
            <div key={i} className="space-y-1">
              <div className="">
                <span>{item.label}</span>
                
              </div>
              <div className="w-full bg-gray-100 h-4 rounded-full">
                <div
                  className="h-4 bg-purple-500 rounded-full"
                  style={{ width: `${percent}%` }}
                />
              </div>
              <div className="flex justify-between text-[#746f6e]">
                <span>{item.value}/{item.total}</span>
                <span>({percent}%) done</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProgressBars
