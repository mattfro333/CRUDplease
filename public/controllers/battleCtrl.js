angular.module('heroApp').controller('battleCtrl',
  function($scope, $rootScope, battleSrvc, heroSrvc) {
    $scope.chosen = battleSrvc.now
    console.log('battleCtrl')
    console.log(battleSrvc.now)

     // 'Some data'
     $scope.getPowersBas1 = function(){
       // $scope.showHide = !$scope.showHide;
       battleSrvc.getPowersBas1().then(response => {
         console.log(response);
         $scope.powers = response
        //  return battleSrvc.pow
       })
     }
     $scope.getPowersUlt1 = function(){
       // $scope.showHide = !$scope.showHide;
       battleSrvc.getPowersUlt1().then(response => {
         console.log(response);
         $scope.powers = response
       })
     }
     $scope.getPowersBas2 = function(){
       // $scope.showHide = !$scope.showHide;
       battleSrvc.getPowersBas2().then(response => {
         console.log(response);
         $scope.powers = response
       })
     }
     $scope.getPowersUlt2 = function(){
       // $scope.showHide = !$scope.showHide;
       battleSrvc.getPowersUlt2().then(response => {
         console.log(response);
         $scope.powers = response
       })
     }

});
