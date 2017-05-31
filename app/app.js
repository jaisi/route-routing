"use strict";

//cannot use let?
var app = angular.module("HighwayApp", ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.
	when('/', {
		templateUrl:'partials/highway.html'
	}).
	when('/brp',{
		templateUrl:'partials/brp.html',
		controller:'BrpCtrl'
	}).
	when('/route66',{
		templateUrl:'partials/route66.html',
		controller:'Route66Ctrl'
	}).
	otherwise('/');
});