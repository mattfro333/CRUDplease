const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const app = module.exports = express();

app.set('port', (process.env.PORT || 3000));

app.use(bodyParser.json());
app.use(express.static('./public'));

let db = massive.connectSync({
  connectionString: 'postgres://dlkimwkg:qHMDCysRuB3mKFcPmRv2ZwxU6ZhilOYr@stampy.db.elephantsql.com:5432/dlkimwkg'
});

app.set('db', db);
const heroCtrl = require('./controllers/heroCtrl');
const powersCtrl = require('./controllers/powersCtrl');

app.get('/api/heroes', heroCtrl.getHeroes);
app.get('/api/heroes/:name', heroCtrl.getHero);
app.post('/api/heroes', heroCtrl.create);
app.put('/api/heroes/:name', heroCtrl.update);
app.delete('/api/heroes/:name', heroCtrl.delete);
app.get('/api/powers', powersCtrl.getPowersBas1);
app.get('/api/powers', powersCtrl.getPowersUlt1);
app.get('/api/powers', powersCtrl.getPowersBas2);
app.get('/api/powers', powersCtrl.getPowersUlt2);
app.post('/api/powers', powersCtrl.createPowers);

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
