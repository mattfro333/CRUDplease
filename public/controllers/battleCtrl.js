angular.module('heroApp').controller('battleCtrl',
  function($scope, $rootScope, battleSrvc, heroSrvc) {
    $scope.chosen = battleSrvc.now
    console.log('battleCtrl')
    console.log(battleSrvc.now)

     $scope.getPowersBas1 = function(){
       battleSrvc.getPowersBas1().then(response => {
         console.log(response);
         $scope.powers = response

       })
     }
     $scope.getPowersUlt1 = function(){
       battleSrvc.getPowersUlt1().then(response => {
         console.log(response);
         $scope.powers = response
       })
     }
     $scope.getPowersBas2 = function(){
       battleSrvc.getPowersBas2().then(response => {
         console.log(response);
         $scope.powers = response
       })
     }
     $scope.getPowersUlt2 = function(){
       battleSrvc.getPowersUlt2().then(response => {
         console.log(response);
         $scope.powers = response
       })
     }

});
