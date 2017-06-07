angular.module('heroApp').controller('battleCtrl',
  function($scope, $rootScope, battleSrvc) {
    $scope.chosen = battleSrvc.now
    console.log('battleCtrl')
    console.log(battleSrvc.now)

     // 'Some data'


});
