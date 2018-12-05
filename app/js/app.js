var app = angular.module('app', ['ui.router', 'templates']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
	$stateProvider.state('home', {
		url: '/home',
		templateUrl: 'partials/home.html',
		controller: 'HomeController'
	});
	$urlRouterProvider.when('/', '/home');
	$urlRouterProvider.otherwise('/')
	$locationProvider.html5Mode(true);
}]);

app.run(['$transitions', function($transitions) {
	$transitions.onSuccess({}, function(trans) {
    //
	});
}]);
