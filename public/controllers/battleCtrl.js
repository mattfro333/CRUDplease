angular.module('heroApp').controller('battleCtrl',
  function($scope, $rootScope, battleSrvc, heroSrvc) {
    $scope.chosen = battleSrvc.now
    console.log('battleCtrl')
    console.log(battleSrvc.now)

     // 'Some data'
     $scope.getPowers = function(){
       // $scope.showHide = !$scope.showHide;
       battleSrvc.getPowers().then(response => {
         console.log(response);
         $scope.powers = response
        //  return battleSrvc.pow
       })
     }
     $scope.getUlt1 = function(){
       // $scope.showHide = !$scope.showHide;
       battleSrvc.getUlt1().then(response => {
         console.log(response);
         $scope.powers = response
       })
     }
     $scope.getBasic2 = function(){
       // $scope.showHide = !$scope.showHide;
       battleSrvc.getBasic2().then(response => {
         console.log(response);
         $scope.powers = response
       })
     }
     $scope.getUlt2 = function(){
       // $scope.showHide = !$scope.showHide;
       battleSrvc.getUlt2().then(response => {
         console.log(response);
         $scope.powers = response
       })
     }

});
