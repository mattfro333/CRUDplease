angular.module('heroApp').controller('heroCtrl', function($scope, heroSrvc){

$scope.showHide = false;

$scope.getHeroes = function(){
  $scope.showHide = !$scope.showHide;
  heroSrvc.getHeroes().then(response => {
    if($scope.oneHero){
       $scope.oneHero = false;
    }
    $scope.heroes = response
  })
}

  $scope.getHero = function(){
    $scope.showHide = !$scope.showHide;
    heroSrvc.getHero().then(response => {
      console.log(response);
      $scope.oneHero = response
    })
  }

  // $scope.heroC = null;

$scope.createHero = function(){
  var heroC = {
    name: $scope.name,
    origin: $scope.origin,
    hometown: $scope.hometown,
    imageurl: $scope.imageurl
  }
  var hero = $scope.hero
  heroSrvc.createHero().then(response =>{
    if(hero.name !== $scope.name){
    hero.push(heroC)
  }

  })
}



})//end of module
