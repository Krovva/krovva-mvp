export type Category =
  | "yoga"
  | "gym"
  | "cardio"
  | "stretch"
  | "fullbody"
  | "legs";

export type Exercise = {
  name: string;
  time: number;
  rest: number;
  reps: number;
  level: string;
  image: string;
  calories: number;
};

export type Workout = {
  id: string;
  name: string;
  description: string;
  category: Category;
  exercises: Exercise[];
  image: string;
  calories: number;
  minutes: number;
  level: string;
  weight: string;
};
