angular.module('heroApp').service('heroSrvc', function($http){

  this.getHeroes = function(){
    return $http.get('/api/heroes').then(function(response){
      console.log(response)
      return response.data
    }).catch(err => console.log(err))
  }








})// end of module
