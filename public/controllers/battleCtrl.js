angular.module('heroApp').controller('battleCtrl',
  function($scope, $rootScope, battleSrvc, heroSrvc) {
    $scope.chosen = battleSrvc.now
    console.log('battleCtrl')
    console.log(battleSrvc.now)

     $scope.getPowersBas1 = function(){
       battleSrvc.getPowersBas1().then(response => {

document.getElementById("shake").style.animationName = "shake"
document.getElementById("shake2").style.animationName = ""
$scope.response = response
var showHide = $scope.response

        if(showHide === 0){

            // console.log(showHide)
           return $scope.showHide = true
        } else {
console.log($scope.response)
          return  $scope.response
        }
       })
     }
     $scope.getPowersUlt1 = function(){
       battleSrvc.getPowersUlt1().then(response => {
  document.getElementById("shake").style.animationName = "shake"
  document.getElementById("shake2").style.animationName = ""
         var showHide = response
        //  console.log(showHide)
                 if(showHide === 0){

                     console.log(showHide)
                    return $scope.showHide = true
                 } else {
                  //  console.log(response)
                   return  response
                 }
       })
     }
     $scope.getPowersBas2 = function(){
       battleSrvc.getPowersBas2().then(response => {
    document.getElementById("shake2").style.animationName = "shake"
    document.getElementById("shake").style.animationName = ""
         console.log(response);
         var showHide = response
         console.log(showHide)
                 if(showHide === 0){

                    //  console.log(showHide)
                    return $scope.showHide = true
                 } else {
                  //  console.log(response)
                   return  response
                 }
       })
     }
     $scope.getPowersUlt2 = function(){
       battleSrvc.getPowersUlt2().then(response => {
      document.getElementById("shake2").style.animationName = "shake"
      document.getElementById("shake").style.animationName = ""
         console.log(response);
         var showHide = response
        //  console.log(showHide)
                 if(showHide === 0){

                    //  console.log(showHide)
                    return $scope.showHide = true
                 } else {
                  //  console.log(response)
                   return  response
                 }
       })
     }
     $scope.die = function () {

for(var i = 0; i < battleSrvc.now.length; i++){
  // console.log(battleSrvc.now.length);
if (battleSrvc.now[0].hp === 0) {
  battleSrvc.now.pop()
  // console.log(battleSrvc.now);
  return battleSrvc.now

} else if (battleSrvc.now[1].hp === 0){
  battleSrvc.now.shift()
  // console.log(battleSrvc.now);
  return battleSrvc.now
}


}
}

});
