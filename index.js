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
const powersCtrl = require('./controllers/powersCtrl');

app.get('/api/heroes', heroCtrl.getHeroes);
app.get('/api/heroes/:Id', heroCtrl.getHero);
// app.get('/api/heroes', heroCtrl.fight);
app.post('/api/heroes', heroCtrl.create);
// app.put('/api/heroes/:Id', heroCtrl.update);
app.delete('/api/heroes/:name', heroCtrl.delete);
// app.get('/api/powers/:Id', powersCtrl.getBasic1);
app.get('/api/powers', powersCtrl.getPowersBas1);
app.get('/api/powers/:Id', powersCtrl.getPowersUlt1);
app.get('/api/powers/:Id', powersCtrl.getPowersBas2);
app.get('/api/powers/:Id', powersCtrl.getPowersUlt2);
app.post('/api/powers', powersCtrl.createPowers);
app.listen(3000, function(){
  console.log('listening on port', this.address().port)
})
