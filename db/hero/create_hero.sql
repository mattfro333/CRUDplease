/*Insert a new hero into the hero Table*/
INSERT INTO hero
(name, origin, hp, imageurl)
VALUES
($1, $2, $3, $4)
RETURNING *;
