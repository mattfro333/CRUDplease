CREATE TABLE IF NOT EXISTS powers(
  powersId SERIAL PRIMARY KEY,
  ultimate VARCHAR(50),
  ultDamage INTEGER,
  basic VARCHAR(50),
  basicDamage INTEGER
);
