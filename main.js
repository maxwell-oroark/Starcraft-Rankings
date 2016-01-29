var myApp = angular.module('starcraft', ['ngAnimate'])

myApp.controller('masterController',['$scope','dataFactory','$filter', function($scope, dataFactory, $filter){

	console.log('controller working')

	$scope.greeting = 'hello'

	$scope.rankings = dataFactory.rankings;

	$scope.players = dataFactory.rankings.data

	console.log($scope.rankings.cols)

	$scope.userValue = 0

	$scope.totalResults = 10;

	$scope.filter = {
		race : '',
		origin : ''
	}

	

	$scope.clicked = false;

	$scope.userValuePlus = function(){
		$scope.userValue += 10;
	}
	$scope.userValueMinus = function(){
		$scope.userValue -= 10;
	}

	$scope.slideOut = function () {
		$scope.clicked = !$scope.clicked;
		console.log($scope.clicked)
	}
	




}])