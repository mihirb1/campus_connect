INSERT INTO users (name, email, profile_pic, bio) VALUES
('Rajiv', 'rooldacool@gmail.com', 'https://media.licdn.com/dms/image/v2/D5603AQEfJ4CC-zrvmA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1724148333968?e=2147483647&v=beta&t=4CeMzd4hEnfvvjI3AOp9E5z-kGChz9lCInSQv8LgIKw', 'Yo this is rooldacool'),
('Manas', 'manas.chougule@gmail.com', 'https://media.licdn.com/dms/image/v2/D5603AQEnn6Nfn_JHDw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1692739476382?e=2147483647&v=beta&t=ta6FzJOvbXTnQn83IB8OJU2v2LZHHjOF6-ANoGPL-cQ', 'This is Manas Chougule.'),
('Justin', 'trickyjustin123@gmail.com', 'https://media.licdn.com/dms/image/v2/D5603AQEKMhAp6rWZ9A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1714355529903?e=2147483647&v=beta&t=1LC8wPeKvPZiFEqMFO6jL643DnK96ufCNknwjg-1PAI', 'Sheeeeeeeesh.'),
('Hemanth', 'hkarnati@sjsu.edu', 'https://media.licdn.com/dms/image/v2/C4E03AQF6__Xb9Y6ZDw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1662497216487?e=2147483647&v=beta&t=1tHM-dOfvx3ALRaRrBKwrFaQ8wYthgBrV9NVlAgzjJg', 'Hey this is Heyyyymanth'),
('Mihir', 'mihirborkar2004@gmail.com', 'https://media.licdn.com/dms/image/v2/C5603AQEgoBPHl5qVJg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1615788489391?e=2147483647&v=beta&t=tQIUe9S9vJBXEI4-q8XKhyLr882A6Hq6jXgQI94dBI4', 'Big bork in the house.'),
('Sawyer', 'soysaucewaso@gmail.com', 'https://media.licdn.com/dms/image/v2/D5603AQFyN2bOykSsHQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1692770529450?e=2147483647&v=beta&t=HliBCSZdzNId2booluloWohPU1CK9uQ_1j82X0OVmHs', 'Wassup its soysaucwaso'),
('Atharva', 'athber@gmail.com', 'https://media.licdn.com/dms/image/v2/D5603AQHM6bX6xh087A/profile-displayphoto-shrink_400_400/B56ZPt98MBG4Ag-/0/1734864258411?e=1749081600&v=beta&t=PsoXrSKlqzZARtJa5Av9cpl8vDoJiofY97rotsKaUdU', 'Was good its atharva'),
('Arav', 'apanchmatia@sjsu.edu', 'https://media.licdn.com/dms/image/v2/D5635AQG9pKuQc4cgVg/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1725302103787?e=1744491600&v=beta&t=eYyQhlTI6CRS8n0MwtPJbPRKhojbDC6rYxwMrqMswTU', 'Call me Ari');

INSERT INTO events (owner_id, start_date, end_date, start_time, end_time, event_type, description, links, organization, event_capacity, location) VALUES 
(1, '2025-04-05', '2025-04-05', '19:00:00', '22:00:00', 'Social', 'Watch Warriors game in the lounge', ARRAY['http://example.com/stream'], 'SJSU', null, 'CVC Lounge'),
(2, '2025-04-07', null, '9:00:00', '21:00:00', 'Hobby', 'Code', ARRAY['https://www.khanacademy.org'], 'ACM SJSU', 1, 'Engineering Building'),
(3, '2025-04-10', '2025-04-10', '17:00:00', '19:00:00', 'Workshop', 'IIA Meeting - Resume Review', ARRAY['https://wwww.theiia.org/e/chapters/united-states/california/san-jose'], 'IIA SJSU', 50, 'BBC'),
(4, '2025-05-01', null, '18:00:00', '20:00:00', 'Hobby', 'Play football', ARRAY['http://nfl.com'], 'SJSU', null, 'Tower Lawn'),
(5, '2025-05-15', null, '20:00:00', '21:00:00', 'Fitness', 'Hit the Gym', ARRAY['http://24hourfitness.com'], 'SJSU', 3, 'SRAC');

INSERT INTO saved_events(user_id, event_id) VALUES (2, 3), (3, 4), (4, 5), (5, 1);

INSERT INTO event_attendees(user_id, event_id) VALUES (1, 1), (4, 1), (5, 1), (6, 1), (7, 1), (2, 2), (3, 3), (4, 3), (4, 4), (1, 4), (3, 4), (5, 4), (6, 4), (7, 4), (8, 4), (5, 5), (1, 5), (6, 5);

