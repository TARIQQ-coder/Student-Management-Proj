import { SiBookstack, SiGoogleclassroom, SiCodeforces } from "react-icons/si";
import { RiEnglishInput } from "react-icons/ri";
import { PiMathOperationsFill } from "react-icons/pi";

const courses = [
  {
    title: "English 101",
    description: "Learn the basics",
    schedule: "Starts today at 11 AM, Class 300",
    students: 34,
    lessonProgress: "Lesson 8/12",
    percent: 67,
    icon: RiEnglishInput,
    iconColor: "text-indigo-600",
  },
  {
    title: "Maths 201",
    description: "Algebra and Geometry",
    schedule: "Starts tomorrow at 9 AM, Class 101",
    students: 28,
    lessonProgress: "Lesson 5/10",
    percent: 50,
    icon: PiMathOperationsFill,
    iconColor: "text-blue-600",
  },
  {
    title: "Coding 301",
    description: "Learn React + Zustand",
    schedule: "Starts Monday at 2 PM, Class 404",
    students: 41,
    lessonProgress: "Lesson 10/14",
    percent: 71,
    icon: SiCodeforces,
    iconColor: "text-purple-600",
  },
];

export default courses;
