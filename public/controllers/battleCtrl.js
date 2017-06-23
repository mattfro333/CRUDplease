angular.module('heroApp').controller('battleCtrl',
  function($scope, $rootScope, battleSrvc, heroSrvc) {
    $scope.chosen = battleSrvc.now
    console.log('battleCtrl')
    console.log(battleSrvc.now)

     $scope.getPowersBas1 = function(){
       battleSrvc.getPowersBas1().then(response => {
var showHide = response
console.log(showHide)
        if(showHide <= 0){
            showHide = 0
            console.log(showHide)
           return $scope.showHide = true
        } else {
          console.log(response)
          return  response
        }
       })
     }
     $scope.getPowersUlt1 = function(){
       battleSrvc.getPowersUlt1().then(response => {
         var showHide = response
         console.log(showHide)
                 if(showHide === 0){

                     console.log(showHide)
                    return $scope.showHide = true
                 } else {
                   console.log(response)
                   return  response
                 }
       })
     }
     $scope.getPowersBas2 = function(){
       battleSrvc.getPowersBas2().then(response => {
         console.log(response);
         var showHide = response
         console.log(showHide)
                 if(showHide === 0){

                     console.log(showHide)
                    return $scope.showHide = true
                 } else {
                   console.log(response)
                   return  response
                 }
       })
     }
     $scope.getPowersUlt2 = function(){
       battleSrvc.getPowersUlt2().then(response => {
         console.log(response);
         var showHide = response
         console.log(showHide)
                 if(showHide === 0){

                     console.log(showHide)
                    return $scope.showHide = true
                 } else {
                   console.log(response)
                   return  response
                 }
       })
     }

});
