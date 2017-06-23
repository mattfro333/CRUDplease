// Require DB
let app = require('../index');
// Show functions added to the db
let db = app.get('db');
// console.log(Object.keys(db.init));
// console.log(Object.keys(db.hero));


// Init Table if doesn't exist
db.init.createHeroTable([], function(err, results){
  if (err){
    console.error(err);
  } else {
    console.log("Initialized hero Table");
  }
})
// export Controller
module.exports = {
  create:function(req, res, next){
    db.hero.create_hero([
      req.body.name,
      req.body.origin,
      req.body.hp,
      req.body.imageurl
    ], function(err, results){
      if (err){
        console.error(err);
        return res.send(err);
      }else{

        res.send(results)
      }
    })
  },
  getHeroes:function(req, res){
    db.hero.read_heroes([], function(err, results){
      if (err){
        console.error(err);
        return res.send(err);
      }
      return res.send(results);
    })
  },
  getHero:function(req, res){
    db.hero.read_hero([req.params.Id],
    function(err, results){
      if (err){
        console.error(err);
        return res.send(err);
      }
      if (results.length === 0){
        return res.status(404).send("No hero Found")
      }
      return res.send(results[0]);
    })
  },
  update:function(req, res){
    db.hero.update_hero([
      req.params.Id,
      req.body.name,
      req.body.origin,
      req.body.hp,
      req.body.imageurl
    ],
    function(err, results){
      if(err){
        console.error(err);
        return res.send(err);
      }
      return res.send(results[0]);
    })
  },
  delete:function(req, res){
    db.hero.delete_hero([req.params.name], function(err, results){
      if (err){
        console.error(err);
        return res.send(err);
      }
      if (results.length === 0){
        return res.status(404).send("hero Not Found");
      }
      res.send('hero ' + results[0].name + ' is dead.');
    })
  }
}
