INSERT INTO Workout_x_exercises (exercise_id, repetitions, sets, duration, rest_time, workout_id) VALUES
((SELECT id FROM Exercises WHERE name = 'Standard Push-up'),
12, 3, 45, 60,
(SELECT id FROM Workouts WHERE name = 'Full Body Power Hour')),

((SELECT id FROM Exercises WHERE name = 'Barbell Back Squat'),
10, 4, 60, 90,
(SELECT id FROM Workouts WHERE name = 'Full Body Power Hour')),

((SELECT id FROM Exercises WHERE name = 'Pull-up Progression'),
8, 3, 40, 75,
(SELECT id FROM Workouts WHERE name = 'Advanced Power Yoga')),

((SELECT id FROM Exercises WHERE name = 'Romanian Deadlift'),
12, 4, 50, 90,
(SELECT id FROM Workouts WHERE name = 'Elite Performance Training')),

((SELECT id FROM Exercises WHERE name = 'Advanced Plank Complex'),
1, 3, 60, 45,
(SELECT id FROM Workouts WHERE name = 'Elite CrossFit Experience')),

((SELECT id FROM Exercises WHERE name = 'Standard Push-up'),
15, 3, 45, 60,
(SELECT id FROM Workouts WHERE name = 'Beginner Fitness Foundations')),

((SELECT id FROM Exercises WHERE name = 'Barbell Back Squat'),
8, 5, 60, 120,
(SELECT id FROM Workouts WHERE name = 'Pro Boxing Circuit')),

((SELECT id FROM Exercises WHERE name = 'Pull-up Progression'),
10, 4, 45, 90,
(SELECT id FROM Workouts WHERE name = 'Advanced HIIT Fusion')),

((SELECT id FROM Exercises WHERE name = 'Romanian Deadlift'),
10, 3, 45, 75,
(SELECT id FROM Workouts WHERE name = 'Intermediate Strength Builder')),

((SELECT id FROM Exercises WHERE name = 'Advanced Plank Complex'),
1, 4, 45, 60,
(SELECT id FROM Workouts WHERE name = 'HIIT Pro Challenge'));