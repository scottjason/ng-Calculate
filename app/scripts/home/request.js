;(function () {

    'use strict'

angular.module('calcApp')
  .service('HomeRequest', function ( Server ) {

this.requestEvaluation = function( params, callback ) {
    Server.requestCalculation( params )
      .then(
        function( data ){
         callback( data.result )
      })
   }
 })
 })()
