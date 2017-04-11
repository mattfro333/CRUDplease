angular.module('heroApp').controller('heroCtrl', function($scope, heroSrvc){

$scope.showHide = false;

$scope.getHeroes = function(){
  $scope.showHide = !$scope.showHide;
  heroSrvc.getHeroes().then(response => {
    $scope.heroes = response
  })
}






})//end of module
