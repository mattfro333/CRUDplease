/* Update Heroe by Id */
UPDATE Hero
SET
  name = COALESCE($2, name),
  origin = COALESCE($3, origin),
  hometown = COALESCE($4, hometown),
  imageurl = COALESCE($5, imageurl) 

WHERE heroId = $1
RETURNING *;

/* Show how to return modified object */
/* Show how to handle partial Updates */
