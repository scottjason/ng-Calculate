;(function () {

    'use strict'

angular.module( 'calcApp' )
  .controller('HomeCtrl', function( $scope, $timeout, HomeRequest ) {

$scope._hasClickedOperator = false
$scope.numsLeft = [];
$scope.numsRight = [];
$scope.dataReady = [];

$scope.collectNum = function ( num ) {
  if ( ! $scope._hasClickedOperator ) {
    $scope.numsLeft.push( num )
    $scope.renderLeftOnInput();
  }
  else {
     $scope.numsRight.push( num )
    $scope.renderRightOnInput();
  }
}

$scope.collectOperator = function ( operator ) {
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
}

$scope.calculationReady = function () {
  if ( $scope.numsLeft.length !== 0 && $scope.numsRight.length !== 0 && $scope._hasClickedOperator ) {
    $scope.dataReady.push( $scope.numsLeft, $scope.numsRight, $scope.operator );
    HomeRequest.requestEvaluation( $scope.dataReady, $scope.calculationComplete );
    $timeout( $scope.clearScreen, 500 );
  }
  else {
    $scope.errorMessage = "Unable to calculate. Please try again.";
    $timeout( $scope.clearScreen, 1500 );
  }
}
$scope.calculationComplete = function ( result ) {
  $scope.isEqualTo = "="
  $scope.calculation = result;
}

})
})();