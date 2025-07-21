import { Course } from "../model/course";

export const courseData: Course = {
  id: 1,
  name: 'Aprendiendo Angular',
  students: [
    {
      id: 100,
      identification: 10001,
      name: 'Ana',
      surname: 'López'
    },
    {
      id: 101,
      identification: 10002,
      name: 'Luis',
      surname: 'Martínez'
    },
    {
      id: 102,
      identification: 10003,
      name: 'Sofía',
      surname: 'Ramírez'
    },
    {
      id: 103,
      identification: 10004,
      name: 'Carlos',
      surname: 'Gómez'
    }
  ]
};
