/* Create Table It does Not Exist */
DROP TABLE IF EXISTS Hero;
CREATE TABLE IF NOT EXISTS Hero(
  heroId SERIAL PRIMARY KEY,
  name VARCHAR(50),
  origin VARCHAR(50),
  hometown VARCHAR(50),
  imageUrl VARCHAR(400)
);
INSERT INTO Hero(name, origin, hometown, imageUrl)values('Wolverine','Funky Genes','Unknown','null')
