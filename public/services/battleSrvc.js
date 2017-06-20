angular.module('heroApp').service('battleSrvc', function($http){
this.now
console.log(this.now);
let powers

this.getBasic1 = function(req, res, next){
  console.log(this.now);
  console.log(typeof this.now[1].hp)
    return $http.get('/api/powers/1').then( (response) => {

      powers = response.data
      console.log(powers)
console.log(typeof this.now[1].hp + " " + typeof powers.basicdamage)
      this.now[1].hp -= powers.basicdamage

console.log(this.now[1].hp)
      return powers
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
