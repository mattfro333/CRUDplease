angular.module('heroApp').controller('heroCtrl', function($scope, heroSrvc){
var list2 = [];
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


   $scope.create = function(hero) {
        heroSrvc.create(hero).then(response => {
          console.log(hero);

    })
}
   $scope.delete = function(name){
     console.log(name);
       heroSrvc.delete(name).then(response => {
console.log(name);
       });
     };

  $scope.fight = function(list2){
    console.log(list2);
    if(list2){
      $scope.list2 = response;
    }
  }


})//end of module
