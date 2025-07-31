import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { subject: 'Maths', grade: 93 },
  { subject: 'Management', grade: null },
  { subject: 'Science', grade: 88 },
  { subject: 'Art History', grade: 70 },
  { subject: 'Numbers', grade: 34 },
  { subject: 'Writing', grade: 40 },
  { subject: 'Philosophy', grade: 95 },
]

const InPerspective = () => {
  return (
    <div className="">
      <h3 className="font-semibold mb-4 text-xl">In Perspective</h3>
      <div className="h-75 bg-white p-4 rounded-xl border border-[#bebbbb]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data.filter(d => d.grade !== null)}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="subject" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="grade" fill="#6366f1" radius={[6, 6, 0, 0]} barSize={30} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default InPerspective
