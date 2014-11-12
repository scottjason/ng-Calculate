;(function () {

    'use strict'

angular.module('calcApp')
    .service('Server', function ( $http, $q ) {

    return({
        requestAddition : requestAddition,
        requestSubtraction : requestSubtraction,
        requestMultiplication : requestMultiplication,
        requestDivision : requestDivision
    });

function requestAddition ( params ) {
  var request = $http({
      method : "POST",
      url : '/api/add',
      data : params
    });
   return( request.then( successHandler, errorHandler ) );
  }

function requestSubtraction ( params ) {
  var request = $http({
      method : "POST",
      url : '/api/subtract',
      data : params
    });
   return( request.then( successHandler, errorHandler ) );
  }

 function requestMultiplication ( params ) {
  var request = $http({
      method : "POST",
      url : '/api/multiply',
      data : params
    });
   return( request.then( successHandler, errorHandler ) );
  }

function requestDivision ( params ) {
  var request = $http({
      method : "POST",
      url : '/api/divide',
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