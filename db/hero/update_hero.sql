/* Update heroe by Id */
UPDATE hero
SET
  name = COALESCE($2, name),
  origin = COALESCE($3, origin),
  hp = COALESCE($4, hp),
  imageurl = COALESCE($5, imageurl) 

WHERE Id = $1
RETURNING *;

/* Show how to return modified object */
/* Show how to handle partial Updates */
