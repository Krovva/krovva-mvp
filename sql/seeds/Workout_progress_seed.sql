INSERT INTO Workout_progress (user_id, workout_id, completed_at) VALUES
('087a3ead-bd85-4eb0-b33c-6e6cb7ef7e4e',
(SELECT id FROM Workouts WHERE name = 'Full Body Power Hour'),
'08:30:00'),

('131395ac-5b47-4094-9b40-de541d74b0fa',
(SELECT id FROM Workouts WHERE name = 'Beginner Fitness Foundations'),
'07:15:00'),

('51755474-32b8-4d9f-ae6d-1761b0c6cd4c',
(SELECT id FROM Workouts WHERE name = 'HIIT Pro Challenge'),
'17:45:00'),

('71d522bc-9c7c-40b6-a7a0-54d27362a5aa',
(SELECT id FROM Workouts WHERE name = 'Elite CrossFit Experience'),
'19:30:00'),

('7bdc3c10-1ffd-4e4f-aa03-dfd0369c1131',
(SELECT id FROM Workouts WHERE name = 'Advanced Power Yoga'),
'06:00:00'),

('9375dbe4-5d07-4b87-be04-e2def5ace753',
(SELECT id FROM Workouts WHERE name = 'Beginner Cardio Kickstart'),
'16:20:00'),

('a9aa6cbb-58bc-4c25-9f42-e4baaecbc30e',
(SELECT id FROM Workouts WHERE name = 'Intermediate Strength Builder'),
'12:45:00'),

('ca905ca4-bdc8-4a3b-a32b-a583adfc01c3',
(SELECT id FROM Workouts WHERE name = 'Pro Boxing Circuit'),
'15:00:00'),

('dc91fba9-5c4d-4364-8730-daf53a7b962a',
(SELECT id FROM Workouts WHERE name = 'Advanced HIIT Fusion'),
'20:15:00'),

('fc52a005-e88f-465c-8933-6bdfa750a42b',
(SELECT id FROM Workouts WHERE name = 'Elite Performance Training'),
'18:30:00');