WITH level_ids AS (
  SELECT id, name FROM Levels
)
INSERT INTO Workouts (name, level_id, category_id, image, description, coach) VALUES
('Full Body Power Hour', 
(SELECT id FROM level_ids WHERE name = 'Intermediate'),
(SELECT id FROM Categories WHERE name = 'Strength'),
'workouts/power-hour.jpg',
'Complete full body workout combining compound movements and isolation exercises for maximum muscle engagement and strength gains.',
'Mike Johnson'),

('Beginner Fitness Foundations', 
(SELECT id FROM level_ids WHERE name = 'Beginner'),
(SELECT id FROM Categories WHERE name = 'Strength'),
'workouts/fitness-foundations.jpg',
'Introduction to basic strength movements with focus on form, technique, and building confidence.',
'Sarah Martinez'),

('HIIT Pro Challenge', 
(SELECT id FROM level_ids WHERE name = 'Pro'),
(SELECT id FROM Categories WHERE name = 'HIIT'),
'workouts/hiit-pro.jpg',
'Advanced high-intensity intervals designed for maximum calorie burn and athletic performance enhancement.',
'Alex Thompson'),

('Elite CrossFit Experience', 
(SELECT id FROM level_ids WHERE name = 'Elite'),
(SELECT id FROM Categories WHERE name = 'CrossFit'),
'workouts/elite-crossfit.jpg',
'Expert-level CrossFit session combining complex gymnastics, heavy lifts, and intense conditioning.',
'Chris Davis'),

('Advanced Power Yoga', 
(SELECT id FROM level_ids WHERE name = 'Advanced'),
(SELECT id FROM Categories WHERE name = 'Yoga'),
'workouts/power-yoga.jpg',
'Challenging yoga flow combining strength, balance, and advanced postures for experienced practitioners.',
'Emma Wilson'),

('Beginner Cardio Kickstart', 
(SELECT id FROM level_ids WHERE name = 'Beginner'),
(SELECT id FROM Categories WHERE name = 'Cardio'),
'workouts/cardio-start.jpg',
'Entry-level cardio session focusing on building endurance and proper breathing techniques.',
'David Park'),

('Intermediate Strength Builder', 
(SELECT id FROM level_ids WHERE name = 'Intermediate'),
(SELECT id FROM Categories WHERE name = 'Strength'),
'workouts/strength-builder.jpg',
'Progressive strength training workout with emphasis on proper form and controlled movements.',
'Lisa Chen'),

('Pro Boxing Circuit', 
(SELECT id FROM level_ids WHERE name = 'Pro'),
(SELECT id FROM Categories WHERE name = 'Boxing'),
'workouts/boxing-pro.jpg',
'High-level boxing combinations and conditioning drills for experienced fighters.',
'James Foster'),

('Advanced HIIT Fusion', 
(SELECT id FROM level_ids WHERE name = 'Advanced'),
(SELECT id FROM Categories WHERE name = 'HIIT'),
'workouts/hiit-fusion.jpg',
'Intense fusion of strength and cardio intervals designed for seasoned fitness enthusiasts.',
'Maria Rodriguez'),

('Elite Performance Training', 
(SELECT id FROM level_ids WHERE name = 'Elite'),
(SELECT id FROM Categories WHERE name = 'CrossFit'),
'workouts/elite-performance.jpg',
'Peak performance workout combining Olympic lifting, advanced gymnastics, and elite conditioning.',
'Robert King');
