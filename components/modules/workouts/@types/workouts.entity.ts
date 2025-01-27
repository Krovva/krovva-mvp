export type Exercise = {
  name: string;
  time: number;
  rest: number;
  reps: number;
};

export type Workout = {
  name: string;
  description: string;
  category: string;
  exercises: Exercise[];
};
