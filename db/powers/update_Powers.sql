UPDATE powers
SET
  ultimate = COALESCE($2, ultimate),
  ultDamage = COALESCE($3, ultDamage),
  basic = COALESCE($4, basic)
  basicDamage = COALESCE($5, basicDamage)
WHERE Id = $1
RETURNING *;
