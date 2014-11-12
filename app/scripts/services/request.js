;(function () {

    'use strict'

/*
  adding this interface as a way to decouple the services that are
  injected into the controller from any activity happening on the server
*/

angular.module('calcApp')
  .service('RequestInterface', function ( Server ) {

this.makeAdditionRequest = function( params, callback ) {
    Server.requestAddition( params )
      .then(
        function( data ){
         callback( data.result )
      })
   }

this.makeSubtractionRequest = function( params, callback ) {
    Server.requestSubtraction( params )
      .then(
        function( data ){
         callback( data.result )
      })
   }

this.makeMultiplicationRequest = function( params, callback ) {
    Server.requestMultiplication( params )
      .then(
        function( data ){
         callback( data.result )
      })
   }

this.makeDivisionRequest = function( params, callback ) {
    Server.requestDivision( params )
      .then(
        function( data ){
         callback( data.result )
      })
   }
 })
 })()
