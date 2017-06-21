SELECT * FROM hero h
JOIN powers p on h.Id = p.Id
WHERE p.ultDamage = $1;
