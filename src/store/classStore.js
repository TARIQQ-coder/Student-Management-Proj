import { create } from "zustand";

export const useClassStore = create((set) => ({
  classes: [
    {
      id: 1,
      title: "Intro to Computer Science",
      teacher: "Mr. Smith",
      schedule: "Mon & Wed - 10:00 AM",
      description: "Learn the basics of computer science and algorithms.",
      icon: "SiGoogleclassroom",
      subjectDetails: [
        {
          title: "Algorithms",
          detail:
            "An algorithm is a step-by-step procedure used to solve problems or perform tasks. In computing, algorithms are essential for processing data, automating tasks, and making decisions efficiently. They form the foundation of software development, enabling computers to execute logic, optimize performance, and solve complex problems in areas like sorting, searching, encryption, and artificial intelligence.",
        },
        {
          title: "Programming Logic",
          detail:
            "Programming logic refers to the set of principles and techniques used to write clear, structured, and efficient code. It involves using control structures like loops, conditionals, and functions to direct the flow of a program. Strong programming logic ensures a program behaves as expected, reduces errors, and forms the core of problem-solving in software development",
        },
      ],
    },
    {
      id: 2,
      title: "Advanced Math",
      teacher: "Dr. Johnson",
      schedule: "Tue & Thu - 2:00 PM",
      description: "Dive deep into calculus and linear algebra.",
      icon: "PiMathOperationsFill",
      subjectDetails: [
        {
          title: "Calculus",
          detail:
            "In a calculus course, students can expect to explore the fundamental concepts of limits, derivatives, and integrals. They’ll learn how to calculate rates of change, determine slopes of curves, and find areas under graphs. The course emphasizes problem-solving, analytical thinking, and real-world applications in science, engineering, and economics. Students should be prepared for abstract thinking and algebra-intensive work.",
        },
        {
          title: "Linear Algebra",
          detail: "Linear algebra is the branch of mathematics that deals with vectors, matrices, and linear transformations. It focuses on solving systems of equations, understanding vector spaces, and manipulating multidimensional data. Linear algebra is essential in fields like computer graphics, machine learning, physics, and engineering, where it helps model complex systems, process data efficiently, and solve real-world computational problems.",
        },
      ],
    },
    {
      id: 3,
      title: "Competitive Programming",
      teacher: "Coach Lee",
      schedule: "Fridays - 4:00 PM",
      description: "Prepare for contests like Codeforces and Leetcode.",
      icon: "SiCodeforces",
      subjectDetails: [
        {
          title: "Greedy Algorithms",
          detail:
            "A greedy algorithm is a problem-solving approach that makes the best immediate choice at each step, hoping to find the global optimum. It doesn’t revisit decisions, making it efficient and easy to implement. While not always optimal for every problem, greedy algorithms work well for tasks like scheduling, coin change, and path-finding in graphs where local choices lead to global solutions.",
        },
        {
          title: "Dynamic Programming",
          detail:
            "Dynamic programming (DP) is a method for solving complex problems by breaking them into simpler overlapping sub-problems and storing their results to avoid redundant computations. It’s especially useful for optimization problems like shortest paths, knapsack, or Fibonacci sequences. DP improves efficiency and performance by reusing solutions, making it a powerful technique in algorithms and competitive programming.",
        },
      ],
    },
  ],

  enrolledClassIds: [],

  addClass: (newClass) =>
    set((state) => ({ classes: [...state.classes, newClass] })),
  removeClass: (id) =>
    set((state) => ({
      classes: state.classes.filter((cls) => cls.id !== id),
    })),

  toggleEnrollment: (id) =>
    set((state) => {
      const isEnrolled = state.enrolledClassIds.includes(id);
      return {
        enrolledClassIds: isEnrolled
          ? state.enrolledClassIds.filter((cid) => cid !== id)
          : [...state.enrolledClassIds, id],
      };
    }),

  getClassById: (id) => {
    const state = useClassStore.getState();
    return state.classes.find((cls) => cls.id === parseInt(id));
  },
}));
