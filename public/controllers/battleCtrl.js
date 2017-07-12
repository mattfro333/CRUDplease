angular.module('heroApp').controller('battleCtrl',
  function($scope, $rootScope, battleSrvc, heroSrvc) {
    $scope.chosen = battleSrvc.now
    console.log('battleCtrl')
    console.log(battleSrvc.now)

     $scope.getPowersBas1 = function(){
       battleSrvc.getPowersBas1().then(response => {

         document.getElementById("shake").style.animationName = "shake"
         document.getElementById("shake2").style.animationName = ""
showHide = response

        if(showHide === battleSrvc.now[1].name + " has been defeated!"){
                  $scope.showHide = true
            // console.log(showHide)
            $scope.attack = showHide

           return showHide
        } else {
          $scope.attack = response + "!!"
          let showHide = $scope.attack
          $scope.butBlock = true
          $scope.butBlock2 = false

          return  showHide
        }
       })
     }
     $scope.getPowersUlt1 = function(){
       battleSrvc.getPowersUlt1().then(response => {
  document.getElementById("shake").style.animationName = "shake"
  document.getElementById("shake2").style.animationName = ""
showHide = response
        //  console.log(showHide)
        if(showHide === battleSrvc.now[1].name + " has been defeated!"){
                  $scope.showHide = true

            $scope.attack = showHide

           return showHide
                 } else {
                   $scope.butBlock = true
                   $scope.butBlock2 = false
                   $scope.attack = $scope.chosen[0].name + " Attacks With " +  response + "!!"
                   let showHide = $scope.attack
                  //  console.log(response)
                   return  showHide
                 }
       })
     }
     $scope.getPowersBas2 = function(){
       battleSrvc.getPowersBas2().then(response => {
    document.getElementById("shake2").style.animationName = "shake"
    document.getElementById("shake").style.animationName = ""
showHide = response
if(showHide === battleSrvc.now[0].name + " has been defeated!"){
          $scope.showHide = true

    $scope.attack = showHide

   return showHide
                 } else {
                   $scope.butBlock = false
                   $scope.butBlock2 = true
                   $scope.attack = response + "!!"
                   let showHide = $scope.attack

                   return  showHide
                 }
       })
     }
     $scope.getPowersUlt2 = function(){
       battleSrvc.getPowersUlt2().then(response => {
      document.getElementById("shake2").style.animationName = "shake"
      document.getElementById("shake").style.animationName = ""
showHide = response
        //  console.log(showHide)
        if(showHide === battleSrvc.now[0].name + " has been defeated!"){
                  $scope.showHide = true
            console.log(showHide)
            $scope.attack = showHide

           return showHide
                 } else {
                   $scope.butBlock = false
                   $scope.butBlock2 = true
                   $scope.attack = $scope.chosen[1].name + " Attacks With " +  response + "!!"
                   let showHide = $scope.attack
              
                   return  showHide
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
