angular.module('heroApp',['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider){

      $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './views/home.html',
        controller: 'heroCtrl'
      })
      .state('birth', {
        url: '/birth',
        templateUrl: './views/heroCreate.html',
        controller: 'heroCtrl'
      })
      .state('select', {
        url: '/select',
        templateUrl: './views/heroSelect.html',
        controller: 'heroCtrl'
      })
      .state('death', {
        url: '/death',
        templateUrl: './views/heroDeath.html',
        controller: 'heroCtrl'
      })
      $urlRouterProvider.otherwise('/')
  })
