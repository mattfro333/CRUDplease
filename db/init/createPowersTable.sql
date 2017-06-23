DROP TABLE powers;

CREATE TABLE IF NOT EXISTS powers(
  Id SERIAL PRIMARY KEY,
  ultimate VARCHAR(50),
  ultDamage INTEGER,
  basic VARCHAR(50),
  basicDamage INTEGER
);

INSERT INTO powers(ultimate, ultDamage, basic, basicDamage)
VALUES
('Claw Fury', 20, 'Claw Swipe', 5),
('Drain Life', 30, 'Punch', 5),
('Spraying', 10, 'Meowing', 5)
