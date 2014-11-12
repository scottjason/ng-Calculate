;(function () {

    'use strict'

angular.module('calcApp')
  .service('Operator', function ( RequestInterface ) {

    this.filterEvaluation = function( dataArr, callback ) {
      if( dataArr[2] === "+" ) {
        RequestInterface.makeAdditionRequest( dataArr, callback )
        return;
      }
      else if ( dataArr[2] === "-" ) {
        RequestInterface.makeSubtractionRequest( dataArr, callback )
        return;
      }
      else if ( dataArr[2] === "*" ) {
        RequestInterface.makeMultiplicationRequest( dataArr, callback )
        return;
      }
      else {
         RequestInterface.makeDivisionRequest( dataArr, callback )
        return;
      }
    }
 })
 })()
