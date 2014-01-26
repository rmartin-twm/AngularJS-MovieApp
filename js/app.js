'use strict';

/* App Module */
angular.module('entertainmentApp', []).
  config(['$routeProvider', function($routeProvider) {
	  $routeProvider.
  		when('/movie_now_playing', {
			templateUrl: 'pages/movie_now_playing.html',   
			controller: movieNowPlayingCtrl
		}).
		when('/movie_upcoming', {
			templateUrl: 'pages/movie_upcoming.html',   
			controller: movieUpcomingCtrl
		}).
		when('/movie_top_rated', {
			templateUrl: 'pages/movie_top_rated.html',   
			controller: movieTopRatedCtrl
		}).
		when('/movie_popular', {
			templateUrl: 'pages/movie_popular.html',   
			controller: moviePopularCtrl
		}).
		when('/tv_top_rated', {
			templateUrl: 'pages/tv_top_rated.html',   
			controller: tvTopRatedCtrl
		}).
		when('/tv_popular', {
			templateUrl: 'pages/tv_popular.html',   
			controller: tvPopularCtrl
		}).
		when('/person_popular', {
			templateUrl: 'pages/person_popular.html',   
			controller: personPopularCtrl
		}).
		when('/movies/:movieId', {
			templateUrl: 'pages/more_info.html',
			controller: movieDetailCtrl
		}).
		when('/tv/:showId', {
			templateUrl: 'pages/more_show_info.html',
			controller: showDetailCtrl
		}).
		when('/person/:personId', {
			templateUrl: 'pages/more_person_info.html',
			controller: personDetailCtrl
		}).
      	otherwise({redirectTo: '/movie_now_playing'});
		
	}])
	
.controller('bodyController', function bodyController($scope, $http) {
	$scope.movieLinks=[
        {name:'Now Playing', url:'#/movie_now_playing'},
		{name:'Upcoming', url:'#/movie_upcoming'},
		{name:'Top Rated', url:'#/movie_top_rated'},
		{name:'Popular', url:'#/movie_popular'}
	];
	
	$scope.tvLinks=[
		{name:'Popular', url:'#/tv_popular'},
		{name:'Top Rated', url:'#/tv_top_rated'}
	];
	
	$scope.actorLinks=[
		{name:'Popular', url:'#/person_popular'}
	];
})
