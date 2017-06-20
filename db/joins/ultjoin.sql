SELECT * FROM hero h
JOIN powers p on h.heroid = p.powersid
WHERE p.ultDamage = $1;
