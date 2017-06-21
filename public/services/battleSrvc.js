angular.module('heroApp').service('battleSrvc', function($http){
this.now
console.log(this.now);
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

this.getPowers = function(req, res, next){
  console.log(this.now);
  console.log(typeof this.now[1].hp)
    return $http.get('/api/powers').then( (response) => {
let hero = this.now
var results_all = []
      powers = response.data
      console.log(powers)
      var results_all = hero.joinWith(powers, 'id');
var P2HP = results_all[1].hp
console.log(results_all)
      P2HP -= results_all[0].basicdamage
//
// console.log(results_all[0].ultdamage)
// console.log(P2HP)
P2HP
      return P2HP
    }).catch(err => console.log(err))
}
this.getBasic2 = function(req, res, next){
  console.log(this.now);
  console.log(typeof this.now[1].hp)
    return $http.get('/api/powers/2').then( (response) => {

      powers = response.data
      console.log(powers)
console.log(typeof this.now[1].hp + " " + typeof powers.basicdamage)
      this.now[0].hp -= powers.basicdamage

console.log(this.now[1].hp)
      return powers
    }).catch(err => console.log(err))
}
this.getUlt1 = function(req, res, next){
  console.log(this.now);
  console.log(typeof this.now[1].hp)
    return $http.get('/api/powers/1').then( (response) => {

      powers = response.data
      console.log(powers)
console.log(typeof this.now[1].hp + " " + typeof powers.basicdamage)
      this.now[1].hp -= powers.ultdamage

console.log(this.now[1].hp)
      return powers
    }).catch(err => console.log(err))
}
this.getUlt2 = function(req, res, next){
  console.log(this.now);
  console.log(typeof this.now[1].hp)
    return $http.get('/api/powers/2').then( (response) => {

      powers = response.data
      console.log(powers)
console.log(typeof this.now[1].hp + " " + typeof powers.basicdamage)
      this.now[0].hp -= powers.ultdamage

console.log(this.now[1].hp)
      return powers
    }).catch(err => console.log(err))
}


})
