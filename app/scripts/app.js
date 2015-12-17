'use strict';

/**
 * @ngdoc overview
 * @name projectsApp
 * @description
 * # projectsApp
 *
 * Main module of the application.
 */
angular
  .module('projectsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])

var frenzyApp = angular.module('frenzyApp', ['ngRoute']);

  frenzyApp.config(function($routeProvider) {
    $routeProvider

      .when('/', {
        templateUrl : 'pages/contact.html',
        controller  : 'mainController'
      })

      .when('/shop', {
        templateUrl : 'pages/shop.html',
        controller : 'storeController'
      })  

      .when('/contact', {
        templateUrl : 'pages/home.html',
        controller  : 'contactController'
      });


  });

  frenzyApp.controller('mainController', function($scope) {
    $scope.photo = "images/open.jpg"
    
  });

  frenzyApp.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
  });

  frenzyApp.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
  });


  frenzyApp.controller('storeController', function($scope){
    $scope.products = gems;
  });

   frenzyApp.controller("TabController", function($scope) {
    $scope.tab = 1;

    $scope.isSet = function(checkTab) {
      return $scope.tab === checkTab;
    };

    $scope.setTab = function(setTab) {
      $scope.tab = setTab;
    };
  });

  frenzyApp.controller('GalleryController', function($scope){
    $scope.current = 0;

    $scope.setCurrent = function(imageNumber){
      $scope.current = imageNumber || 0;
    };
  });

  frenzyApp.controller("ReviewController", function($scope){

    $scope.review = {};

    $scope.addReview = function(product){
      $scope.review.createdOn = Date.now();
      product.reviews.push($scope.review);
      $scope.review = {};
    };
  });

   