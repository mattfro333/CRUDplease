/* Create Table It does Not Exist */

CREATE TABLE IF NOT EXISTS hero(
  heroId SERIAL PRIMARY KEY,
  name VARCHAR(50),
  origin VARCHAR(50),
  hometown VARCHAR(50),
  imageurl VARCHAR(400)
);
-- INSERT INTO Hero(name, origin, hometown, imageurl)values('Wolverine','Funky Genes','Unknown','null')
