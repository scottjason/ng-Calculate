;(function () {

    'use strict'

angular.module( 'calcApp' )
  .controller('HomeCtrl', function( $scope, $timeout, Operator ) {

$scope._hasClickedOperator = false;
$scope.numsLeft = [];
$scope.numsRight = [];
$scope.dataReady = [];

/* collect the numbers and verify whether the result and operator booleans needs to be reset */
$scope.collectNum = function ( num ) {
  if ( $scope._justGotResult ) {
      $scope.clearScreen();
      $scope._justGotResult = false;
  }

  if ( ! $scope._hasClickedOperator ) {
    $scope.numsLeft.push( num );
    $scope.renderLeftOnInput();
  }
  else {
    $scope.numsRight.push( num );
    $scope.renderRightOnInput();
  }
}

/* collect the operator and verify there's only been one submitted, otherwise render error and reset */
$scope.collectOperator = function ( operator ) {
  if ( $scope._hasClickedOperator ) {
    $scope.errorMessage = "Please try again using one expression.";
    $timeout( $scope.clearScreen, 1500 );
  }
  $scope.operator = operator;
  $scope._hasClickedOperator = true;
  $scope.renderOperatorOnInput();
}

$scope.renderLeftOnInput = function () {
  $scope.numsLeftOnInput = $scope.numsLeft.join('')
}

$scope.renderRightOnInput = function () {
  $scope.numsRightOnInput = $scope.numsRight.join('')
}

$scope.renderOperatorOnInput = function () {
  $scope.operatorOnInput = $scope.operator;
}

$scope.clearScreen = function () {
  $scope.numsLeft.splice( 0, $scope.numsLeft.length );
  $scope.numsRight.splice( 0, $scope.numsRight.length );
  $scope.dataReady.splice( 0, $scope.dataReady.length );
  $scope.operator = "";
  $scope._hasClickedOperator = false;
  $scope.errorMessage = "";
  $scope.numsRightOnInput = "";
  $scope.numsLeftOnInput = "";
  $scope.operatorOnInput = "";
  $scope.calculation = "";
}

/* when the equals sign is clicked, verify we have the data we need, push to an array and pass
  this and the callback into the Operator serivce
*/
$scope.calculationReady = function () {
  if ( $scope.numsLeft.length !== 0 && $scope.numsRight.length !== 0 && $scope._hasClickedOperator ) {
    $scope.dataReady.push( $scope.numsLeft, $scope.numsRight, $scope.operator );
    Operator.filterEvaluation( $scope.dataReady, $scope.calculationComplete );
  }
  else {
    $scope.errorMessage = "Unable to calculate. Please try again.";
    $timeout( $scope.clearScreen, 1500 );
  }
}

/* when the server has completed calculating */
$scope.calculationComplete = function ( result ) {
  $scope.numsRightOnInput = "";
  $scope.operatorOnInput = "";
  $scope.numsLeftOnInput = "";
  $scope.calculation = result;
  $scope._justGotResult = true;
}
})
})();