'use strict';

var app = angular
  .module('HipTips', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'firebase',
    'toaster',
    'angularMoment',
    'angular-filepicker'
  ])
  .constant('FURL', 'https://tiptap.firebaseio.com/')
  .run(function($rootScope, $location) {
    $rootScope.$on("$routeChangeError", function(event, next, previous, error){
      if (error === "AUTH_REQUIRED") {
        $location.path("/login");
      }
    });
  })

  .config(function ($routeProvider, filepickerProvider) {
    filepickerProvider.setKey('AiJepKVnnS26nusA9yOpaz');

    $routeProvider
      .when('/', {
        templateUrl: 'views/browse.html',
        controller: 'BrowseController'
      })
      .when('/browse/:taskId', {
        templateUrl: 'views/browse.html',
        controller: 'BrowseController'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'AuthController'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthController'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardController',
        resolve: {
          currentAuth: function(Auth) {
            return Auth.requireAuth();
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
