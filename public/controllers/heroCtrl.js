angular.module('heroApp').controller('heroCtrl', function($scope, heroSrvc, $rootScope, battleSrvc){
var chosen = []
$scope.showHide = false;
var first

$scope.getHeroes = function(){
  // $scope.showHide = !$scope.showHide;
  heroSrvc.getHeroes().then(response => {
    if($scope.oneHero){
       $scope.oneHero = false;
    }
    $scope.heroes = response
    console.log($scope.heroes);

    console.log($scope.heroes[0].name)
    interact('.draggable', first).draggable({
          inertia: true,
          restrict: {
            restriction: "#visualizer-panel",
            endOnly: true,
            elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
          },
          onmove: function (event, first) {
            var target = event.target,
                // keep the dragged position in the data-x/data-y attributes
                x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
                y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

            // translate the element
            target.style.webkitTransform =
            target.style.transform =
              'translate(' + x + 'px, ' + y + 'px)';

            // update the posiion attributes
            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
          },
         onend: function(event) {
          //  console.log($scope.heroes[0].name)
          //  console.log(event)
          //  console.log(event.target.innerText.includes($scope.heroes[0].name))
          //  if(event.target.innerText.includes($scope.heroes[0].name)){
          //    event = $scope.heroes[0]
          //  } else if (event.target.innerText.includes($scope.heroes[1].name)){
          //    event = $scope.heroes[1]
          //    console.log($scope.heroes[1].name)
          //    console.log(event)
          //  }
           // prop type grab through innerHTML
   //         if(first === object.target.innerHTML)
   //     firstChild.style.textDecoration = "none"
   // secondChild.style.backgroundColor = "red"

          }
      });

      interact('.dropzone').dropzone({
          accept: '.draggable',
          overlap: 0.01,

          // add / remove dropzone feedback
          ondropactivate: function (event) {
              event.target.classList.add('drop-active');
          },
          ondropdeactivate: function (event) {
              event.target.classList.remove('drop-active');
          },

          // add / remove dropzone feedback
          ondragenter: function (event) {
              var draggableElement = event.relatedTarget,
                  dropzoneElement = event.target;
              dropzoneElement.classList.add('drop-target');
              draggableElement.classList.add('can-drop');
          },
          ondragleave: function (event) {
              event.target.classList.remove('drop-target');
              event.relatedTarget.classList.remove('can-drop');
          },

          // drop successful
         ondrop: function (event) {
           // let chosen = []
           console.log(event)
           console.log(event.dragEvent.target.innerText.includes($scope.heroes[0].name))
           if(event.dragEvent.target.innerText.includes($scope.heroes[0].name)){
             event = $scope.heroes[0]
             chosen.push(event)
           return  battleSrvc.now = chosen
             console.log(event)
           } else if (event.dragEvent.target.innerText.includes($scope.heroes[1].name)){
             event = $scope.heroes[1]
             chosen.push(event)
           return  battleSrvc.now = chosen
             console.log($scope.heroes[1].name)
             console.log(event)
           }
           chosen.push(event)
         return  battleSrvc.now = chosen

              console.log(chosen);
          },


      });
  })
}

  $scope.getHero = function(){
    // $scope.showHide = !$scope.showHide;
    heroSrvc.getHero().then(response => {
      console.log(response);
      $scope.oneHero = response
    })
  }


   $scope.create = function(hero) {
        heroSrvc.create(hero).then(response => {
          console.log(hero);

    })
}
   $scope.delete = function(name){
     console.log(name);
       heroSrvc.delete(name).then(response => {
console.log(name);
       });
     };

     $scope.fight = function () {

       console.log(chosen);
    }




})
