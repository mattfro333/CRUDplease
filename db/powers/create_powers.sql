INSERT INTO powers
(powersId, ultimate, ultDamage, basic, basicDamage)
VALUES
($1, $2, $3, $4)
RETURNING *;
