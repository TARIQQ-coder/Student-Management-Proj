import { Mail, Phone, MoreHorizontal } from "lucide-react";

const tagColors = {
  Science: "bg-green-100 text-green-700",
  Chemistry: "bg-teal-100 text-teal-700",
  History: "bg-yellow-100 text-yellow-700",
  Art: "bg-pink-100 text-pink-700",
  Mathematics: "bg-blue-100 text-blue-700",
  Physics: "bg-indigo-100 text-indigo-700",
  Literature: "bg-purple-100 text-purple-700",
  "Information Technology": "bg-orange-100 text-orange-700",
  "World Economics": "bg-sky-100 text-sky-700",
  "French & Spanish Language": "bg-pink-50 text-pink-600",
  "Physical Education": "bg-lime-100 text-lime-700",
  default: "bg-gray-100 text-gray-600",
};

const TeacherCard = ({ teacher }) => {
  const { name, email, subjects, avatar } = teacher;

  return (
    <div className="bg-white rounded-xl px-4 text-center border border-[#bebbbb] h-[300px] py-6 ">
      {/* Subject Tags */}
      <div className="flex justify-center flex-wrap gap-2 ">
        {subjects.map((subject, i) => (
          <span
            key={i}
            className={`text-sm px-3 py-1 rounded-full font-medium ${
              tagColors[subject] || tagColors.default
            }`}
          >
            {subject}
          </span>
        ))}
      </div>

      {/* Avatar + Name */}
      <div className="mt-4">
        <img
          src={avatar}
          alt={name}
          className="w-25 h-25 rounded-full mx-auto object-cover"
        />
        <h4 className="text-lg font-semibold mt-2">{name}</h4>
        <p className="text-sm text-gray-500">{email}</p>
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
  );
};

export default TeacherCard;
