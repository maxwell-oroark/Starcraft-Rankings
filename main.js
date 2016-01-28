var myApp = angular.module('starcraft', [])

myApp.controller('masterController',['$scope','dataFactory', function($scope, dataFactory){

	console.log('controller working')

	$scope.greeting = 'hello'

	$scope.rankings = dataFactory.rankings;

	$scope.players = dataFactory.rankings.data

	console.log($scope.rankings.cols)

	$scope.userValue = 0

	$scope.userValuePlus = function(){
		$scope.userValue += 10;
	}
	$scope.userValueMinus = function(){
		$scope.userValue -= 10;
	}




}])