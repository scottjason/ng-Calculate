;(function () {

    'use strict'

angular.module('calcApp')
    .service('Server', function ( $http, $q ) {

    return({
        requestCalculation : requestCalculation
    });

function requestCalculation ( params ) {
  var request = $http({
      method : "POST",
      url : '/calculate',
      data : params
    });
   return( request.then( successHandler, errorHandler ) );
  }

function errorHandler( response ) {
  return( response.data )
  }

function successHandler( response ) {
  return( response.data );
  }
   })
})()