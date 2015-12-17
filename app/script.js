  var frenzyApp = angular.module('frenzyApp', ['ngRoute']);

  // configure routes
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

  // created the controller and injected Angular's $scope
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

   

    var gems = [
    {
      name: "ALEXANDER MCQUEEN",
      price: 1295,
      shine: 4,
      faces: "Fits to size, take your normal size",
      rarity:"Cut for a slightly loose fit",
      color: "Mustard",
      description: "Alexander McQueen's ruffled dress is made from cascading layers of wispy silk-chiffon. Emblazoned with a watercolor-like print of cherry blossoms, this design will make you feel ultra feminine. Wear it to your next event with a metallic clutch.",
      canPurchase: true,
      images: [
        "images/mc.png",
        "images/top.jpg",
        "images/candle.jpg"
      ]
  },
  {
    name: "CELINE",
    price: 3325,
    description: "Alexander McQueen's ruffled dress is made from cascading layers of wispy silk-chiffon. Emblazoned with a watercolor-like print of cherry blossoms, this design will make you feel ultra feminine. Wear it to your next event with a metallic clutch.",
    canPurchase: true,
    images: [
        "images/celine1.png",
        "images/dress.jpg",
        "images/candle.jpg"
    ]
  },
     {
      name: "CHANEL",
      price: 2295,
      shine: 4,
      faces: "Fits to size, take your normal size",
      rarity:"Cut for a slightly loose fit",
      color: "Mustard",
      description: "Alexander McQueen's ruffled dress is made from cascading layers of wispy silk-chiffon. Emblazoned with a watercolor-like print of cherry blossoms, this design will make you feel ultra feminine. Wear it to your next event with a metallic clutch.",
      canPurchase: true,
      images: [
        "images/backpack.png",
        "images/top.jpg",
        "images/candle.jpg"
      ]
  },
     {
      name: "VALENTINO",
      price: 875,
      shine: 4,
      faces: "Fits to size, take your normal size",
      rarity:"Cut for a slightly loose fit",
      color: "Mustard",
      description: "Alexander McQueen's ruffled dress is made from cascading layers of wispy silk-chiffon. Emblazoned with a watercolor-like print of cherry blossoms, this design will make you feel ultra feminine. Wear it to your next event with a metallic clutch.",
      canPurchase: true,
      images: [
        "images/val.png",
        "images/top.jpg",
        "images/candle.jpg"
      ]
  },
     {
      name: "GUCCI",
      price: 495,
      shine: 4,
      faces: "Fits to size, take your normal size",
      rarity:"Cut for a slightly loose fit",
      color: "Mustard",
      description: "Alexander McQueen's ruffled dress is made from cascading layers of wispy silk-chiffon. Emblazoned with a watercolor-like print of cherry blossoms, this design will make you feel ultra feminine. Wear it to your next event with a metallic clutch.",
      canPurchase: true,
      images: [
        "images/gucci.png",
        "images/top.jpg",
        "images/candle.jpg"
      ]
  },
];
    



  