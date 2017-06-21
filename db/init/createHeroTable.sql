/* Create Table It does Not Exist */
DROP TABLE hero;

CREATE TABLE IF NOT EXISTS hero(
  Id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  origin VARCHAR(50),
  hp INTEGER,
  imageurl VARCHAR(400)
);

INSERT INTO hero(name, origin, hp, imageurl)
VALUES
('Wolverine','Funky Genes', 100,'https://s-media-cache-ak0.pinimg.com/736x/d5/51/01/d551017465a490bba582de2c63ae3a14.jpg'),
('Rogue',	'Funky Genes/ Stole Ms. Marvels Powers',	150,	'http://pa1.narvii.com/5705/9c2b27b08982b6bbd6990b7b69847f036896d8d8_hq.gif')
