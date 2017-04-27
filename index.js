const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const app = module.exports = express();

app.use(bodyParser.json());
app.use(express.static('./public'));

let db = massive.connectSync({
  connectionString: 'postgres://dlkimwkg:qHMDCysRuB3mKFcPmRv2ZwxU6ZhilOYr@stampy.db.elephantsql.com:5432/dlkimwkg'
});

app.set('db', db);
const heroCtrl = require('./controllers/heroCtrl');

app.get('/api/heroes', heroCtrl.getHeroes);
app.get('/api/heroes/:heroId', heroCtrl.getHero);
app.post('/api/heroes', function(req, res){ heroCtrl.createHero
});
// app.put('/api/heroes/:heroId', heroCtrl.update);
// app.delete('/api/heroes/:heroId', heroCtrl.delete);

app.listen(3000, function(){
  console.log('listening on port', this.address().port)
})
