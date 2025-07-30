import { create } from 'zustand';

export const useClassStore = create((set) => ({
  classes: [
    {
      id: 1,
      title: 'Intro to Computer Science',
      teacher: 'Mr. Smith',
      schedule: 'Mon & Wed - 10:00 AM',
      description: 'Learn the basics of computer science and algorithms.',
      icon: 'SiGoogleclassroom',
      subjectDetails: [
        {
          title: 'Algorithms',
          detail: 'Understand searching, sorting, and basic problem-solving techniques.',
        },
        {
          title: 'Programming Logic',
          detail: 'Explore how to write clear and efficient code using logic structures.',
        },
      ],
    },
    {
      id: 2,
      title: 'Advanced Math',
      teacher: 'Dr. Johnson',
      schedule: 'Tue & Thu - 2:00 PM',
      description: 'Dive deep into calculus and linear algebra.',
      icon: 'PiMathOperationsFill',
      subjectDetails: [
        {
          title: 'Calculus',
          detail: 'Differentiation, integration, and applications in real-world problems.',
        },
        {
          title: 'Linear Algebra',
          detail: 'Matrices, vector spaces, and transformations.',
        },
      ],
    },
    {
      id: 3,
      title: 'Competitive Programming',
      teacher: 'Coach Lee',
      schedule: 'Fridays - 4:00 PM',
      description: 'Prepare for contests like Codeforces and Leetcode.',
      icon: 'SiCodeforces',
      subjectDetails: [
        {
          title: 'Greedy Algorithms',
          detail: 'Learn techniques to make locally optimal choices at each step.',
        },
        {
          title: 'Dynamic Programming',
          detail: 'Master solving complex problems by breaking them into subproblems.',
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
