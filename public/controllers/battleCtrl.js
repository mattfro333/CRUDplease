angular.module('heroApp').controller('battleCtrl',
  function($scope, $rootScope, battleSrvc, heroSrvc) {
    $scope.chosen = battleSrvc.now
    console.log('battleCtrl')
    console.log(battleSrvc.now)

     // 'Some data'
     $scope.getPower = function(){
       // $scope.showHide = !$scope.showHide;
       battleSrvc.getPower().then(response => {
         console.log(response);
         $scope.powers = response
       })
     }

});
