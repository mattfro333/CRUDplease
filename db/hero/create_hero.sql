/*Insert a new hero into the Hero Table*/
INSERT INTO Hero
(name, origin, hp, imageurl)
VALUES
($1, $2, $3, $4)
RETURNING *;
