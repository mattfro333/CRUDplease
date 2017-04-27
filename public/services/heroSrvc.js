angular.module('heroApp').service('heroSrvc', function($http){

  this.getHeroes = function(){
    return $http.get('/api/heroes').then(function(response){
      console.log(response)
      return response.data
    }).catch(err => console.log(err))
  }

this.getHero = function(req, res, next){
    return $http.get('/api/heroes/1').then(function(response){
      return response.data
    }).catch(err => console.log(err))
}

 this.createHero = (req, res, next) => {
    return $http.post('/api/heroes').then(function(response){
      return response.data
    }).catch(err => console.log(err))
 }




})// end of module
