angular.module('heroApp').controller('heroCtrl', function($scope, heroSrvc){



$scope.getHeroes = function(){
  heroSrvc.getHeroes().then(response => {
    $scope.heroes = response
  })
}






})//end of module
