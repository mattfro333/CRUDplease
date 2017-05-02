angular.module('heroApp',['ui.router']).config(function($stateProvider, $urlRouterProvider){

            $stateProvider
            .state('home', {
              url: '/',
              templateUrl: '../views/home.html',
              controller: 'heroCtrl'
            })
            .state('birth', {
              url: '/birth',
              templateUrl: '../views/heroCreate.html',
              controller: 'heroCtrl'
            })
            $urlRouterProvider.otherwise('/')
});
