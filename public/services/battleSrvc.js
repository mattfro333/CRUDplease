angular.module('heroApp').service('battleSrvc', function($http){
this.now
// console.log(this.now);
let powers
if (!Array.prototype.joinWith) {
    +function () {
        Array.prototype.joinWith = function(that, by, select, omit) {
            var together = [], length = 0;
            if (select) select.map(function(x){select[x] = 1;});
            function fields(it) {
                var f = {}, k;
                for (k in it) {
                    if (!select) { f[k] = 1; continue; }
                    if (omit ? !select[k] : select[k]) f[k] = 1;
                }
                return f;
            }
            function add(it) {
                var pkey = '.'+it[by], pobj = {};
                if (!together[pkey]) together[pkey] = pobj,
                    together[length++] = pobj;
                pobj = together[pkey];
                for (var k in fields(it))
                    pobj[k] = it[k];
            }
            this.map(add);
            that.map(add);
            return together;
        }
    }();
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

this.getPowersBas1 = function(req, res, next){
  // console.log(this.now);
  // console.log(typeof this.now[1].hp)
    return $http.get('/api/powers').then( (response) => {
var hero = this.now
var results_all = []
      powers = response.data
      // console.log(powers)
      var results_all = hero.joinWith(powers, 'id');
results_all[1].hp
// console.log(results_all)
if(document.getElementById("shake").style.animationName !== "shake"){
      this.now[1].hp -= Math.round(getRandomArbitrary(results_all[0].basicdamage, 15))

    }
  if(this.now[1].hp <= 0){
    this.now[1].hp = 0
    return this.now[1].name + " has been defeated!"

  }
console.log(results_all[0].basic)
// console.log(P2HP)

  return results_all[0].basic
    }).catch(err => console.log(err))
}
this.getPowersBas2 = function(req, res, next){
  // console.log(this.now);
  // console.log(typeof this.now[1].hp)
    return $http.get('/api/powers').then( (response) => {
var hero = this.now
var results_all = []
      powers = response.data
      // console.log(powers)
      var results_all = hero.joinWith(powers, 'id');
results_all[1].hp
// console.log(results_all)
if(document.getElementById("shake2").style.animationName !== "shake"){
      this.now[0].hp -= Math.round(getRandomArbitrary(results_all[1].basicdamage, 15))
}
      if(this.now[0].hp <= 0){
      this.now[0].hp = 0
          return this.now[0].name + " has been defeated!"
      }

      return results_all[1].basic
    }).catch(err => console.log(err))
}
this.getPowersUlt1 = function(req, res, next){
  // console.log(this.now);
  // console.log(typeof this.now[1].hp)
    return $http.get('/api/powers').then( (response) => {
var hero = this.now
var results_all = []
      powers = response.data
      // console.log(powers)
      var results_all = hero.joinWith(powers, 'id');
results_all[1].hp
// console.log(results_all)
if(document.getElementById("shake").style.animationName !== "shake"){
      this.now[1].hp -= Math.round(getRandomArbitrary(14, results_all[0].ultdamage))
}
      if(this.now[1].hp <= 0){
        this.now[1].hp = 0
        return this.now[1].name + " has been defeated!"
      }

      return results_all[0].ultimate
    }).catch(err => console.log(err))
}
this.getPowersUlt2 = function(req, res, next){
  // console.log(this.now);
  // console.log(typeof this.now[1].hp)
    return $http.get('/api/powers').then( (response) => {
var hero = this.now
var results_all = []
      powers = response.data
      // console.log(powers)
      var results_all = hero.joinWith(powers, 'id');
results_all[1].hp
console.log(results_all)
if(document.getElementById("shake2").style.animationName !== "shake"){
      this.now[0].hp -= Math.round(getRandomArbitrary(14, results_all[1].ultdamage))
}
      if(this.now[0].hp <= 0){
      this.now[0].hp = 0
      return this.now[0].name + " has been defeated!"
      }

      return results_all[1].ultimate
    }).catch(err => console.log(err))
}


})
