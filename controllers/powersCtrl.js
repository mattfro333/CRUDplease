let app = require('../index');
// Show functions added to the db
let db = app.get('db');
// console.log(Object.keys(db.init));
// console.log(Object.keys(db.powers));


// Init Table if doesn't exist
db.init.createPowersTable([], function(err, results){
  if (err){
    console.error(err);
  } else {
    console.log("Initialized Powers Table");
  }
})
// export Controller
module.exports = {
  create:function(req, res, next){
    db.powers.create_powers([
      req.body.ultimate,
      req.body.ultDamage,
      req.body.basic,
      req.body.basicDamage
    ], function(err, results){
      if (err){
        console.error(err);
        return res.send(err);
      }else{

        res.send(results)
      }
    })
  },
  getPowers:function(req, res){
    db.powers.read_powers([], function(err, results){
      if (err){
        console.error(err);
        return res.send(err);
      }
      return res.send(results);
    })
  },
  // getBasic1:function(req, res){
  //   db.powers.read_power([req.params.Id],
  //   function(err, results){
  //     if (err){
  //       console.error(err);
  //       return res.send(err);
  //     }
  //     if (results.length === 0){
  //       return res.status(404).send("No powers Found")
  //     }
  //     return res.send(results[0]);
  //   })
  // },
  getUlt1:function(req, res){
    db.powers.read_power([req.params.Id],
    function(err, results){
      if (err){
        console.error(err);
        return res.send(err);
      }
      if (results.length === 0){
        return res.status(404).send("No powers Found")
      }
      return res.send(results[0]);
    })
  },

  getBasic2:function(req, res){
    db.powers.read_power([req.params.Id],
    function(err, results){
      if (err){
        console.error(err);
        return res.send(err);
      }
      if (results.length === 0){
        return res.status(404).send("No powers Found")
      }
      return res.send(results[0]);
    })
  },
  getUlt2:function(req, res){
    db.powers.read_power([req.params.Id],
    function(err, results){
      if (err){
        console.error(err);
        return res.send(err);
      }
      if (results.length === 0){
        return res.status(404).send("No powers Found")
      }
      return res.send(results[0]);
    })
  },

  update:function(req, res){
    db.powers.update_Powers([
      req.params.Id,
      req.body.ultimate,
      req.body.ultDamage,
      req.body.basic,
      req.body.basicDamage
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
    db.powers.delete_powers([req.params.Id], function(err, results){
      if (err){
        console.error(err);
        return res.send(err);
      }
      if (results.length === 0){
        return res.status(404).send("powers Not Found");
      }
      res.send('powers are gone is dead.');
    })
  }
}
