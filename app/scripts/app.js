;(function(){

angular.module('calcApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ngRoute',
  ])
  .config( function ( $routeProvider, $locationProvider ) {

  $routeProvider
    .when('/', {
      templateUrl : 'scripts/home/home.html',
      controller: 'HomeCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });

    $locationProvider.html5Mode( true );
});
})();