CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE Users (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_name varchar(25) NOT NULL, 
  world_id text UNIQUE,
  profile_image varchar(100) NOT NULL,
  current_streak int NOT NULL,
  gender boolean NOT NULL,
  weight int NOT NULL,
  height int NOT NULL,
  created_at timestamp DEFAULT current_timestamp,
  updated_at timestamp DEFAULT current_timestamp
);

create table Resources  (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name varchar(25) not null,
  type varchar(25) not null,
  description varchar(50) not null
);

CREATE TABLE Custom_theme (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid references Users(id) on delete cascade,
  font_size int DEFAULT 12
);

CREATE TABLE Error_log (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  resource_id uuid references Resources(id) on delete cascade,
  error varchar(50) not null,
  date timestamp DEFAULT current_timestamp,
  error_code int not null,
  description varchar(150) not null,
  module varchar(50) not null,
  error_level varchar(15) not null
);

create table User_activity (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid references Users(id) on delete cascade,
  action_type varchar(50) not null,
  ip_address varchar(135) not null,
  created_at timestamp DEFAULT current_timestamp not null,
  updated_at timestamp DEFAULT current_timestamp not null
);

create table Categories (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name varchar(15) NOT NULL,
  image varchar(100) NOT NULL
);

CREATE TABLE Exercise_type (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name varchar(25) NOT NULL,
  description varchar(50) NOT NULL
);

create table Levels (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name varchar(25) NOT NULL,
  description varchar(100) NOT NULL
);

create table Workouts (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name varchar(35) NOT NULL,
  level_id uuid references Levels(id) on delete cascade,
  category_id uuid references Categories(id) on delete cascade,
  image varchar(100) NOT NULL,
  description varchar(150) NOT NULL,
  coach varchar(50)
);

CREATE TABLE Exercises (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name varchar(35) not null,
  type_id uuid references Exercise_type(id) on delete cascade,
  image varchar(100) not null,
  instructions varchar(255) not null,
  calories int NOT NULL DEFAULT 0,
  level_id uuid references Levels(id) on delete cascade,
  created_at timestamp DEFAULT current_timestamp,
  updated_at timestamp DEFAULT current_timestamp
);

CREATE TABLE Workout_x_exercises(
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  exercise_id uuid references Exercises(id) on delete cascade,
  repetitions int not null,
  sets int not null,
  duration int not null,
  rest_time int not null,
  workout_id uuid references Workouts(id) on delete cascade,
  completed boolean DEFAULT false
);

CREATE TABLE Workout_progress (
  user_id uuid references Users(id) on delete cascade,
  workout_id uuid references Workouts(id) on delete cascade,
  completed_at time,
  PRIMARY KEY (user_id, workout_id)
);