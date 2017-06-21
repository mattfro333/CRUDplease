INSERT INTO powers
(Id, ultimate, ultDamage, basic, basicDamage)
VALUES
($1, $2, $3, $4)
RETURNING *;
