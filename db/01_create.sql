SELECT 'CREATE DATABASE campus_connect'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'campus_connect')\gexec

\c campus_connect;

create type event_type_enum as enum ('social', 'academic', 'workshop', 'fitness', 'hobby');

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  profile_pic TEXT NOT NULL,
  bio TEXT
);

CREATE TABLE events(
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
  owner_id INTEGER NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE,
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  event_type event_type_enum NOT NULL,
  description TEXT NOT NULL,
  links TEXT[] NOT NULL DEFAULT '{}'::TEXT[],
  organization TEXT NOT NULL,
  cost NUMERIC(10, 2),
  event_capacity INT,
  location TEXT NOT NULL,
  FOREIGN KEY (owner_id) REFERENCES users(id) ON UPDATE CASCADE
);

CREATE TABLE saved_events(
  user_id INTEGER NOT NULL,
  event_id INTEGER NOT NULL,
  PRIMARY KEY(user_id, event_id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE,
  FOREIGN KEY (event_id) REFERENCES events(id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE event_attendees(
  user_id INTEGER NOT NULL,
  event_id INTEGER NOT NULL,
  PRIMARY KEY(user_id, event_id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE,
  FOREIGN KEY (event_id) REFERENCES events(id) ON UPDATE CASCADE ON DELETE CASCADE
);
