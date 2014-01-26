'use strict';

/* Movie Controllers */

// Movie Details Controller
function movieDetailCtrl($scope, $http, $routeParams){
	$http.jsonp('http://api.themoviedb.org/3/movie/'+$routeParams.movieId+'?api_key=0489b927ac5c6a2411284c40a5dbc46b&callback=JSON_CALLBACK').success(function(data){
		$scope.movie = data;
	});
};

// Movie Now Playing Controller
function movieNowPlayingCtrl($scope, $http) {
  $http.jsonp('http://api.themoviedb.org/3/movie/now_playing?api_key=0489b927ac5c6a2411284c40a5dbc46b&callback=JSON_CALLBACK').success(function(data) {
  	$scope.movies = data.results;
	console.log(data);
	
	$scope.movies.forEach(function (movie) {
		var background = movie.backdrop_path;
		if (background == false) {
			movie.backdrop_path = 'images/no-poster.jpg';
		}
		var poster = movie.poster_path;
		if (background == false) {
			movie.poster_path = 'images/no-poster.jpg';
		}
		
	});
  });
}

// Movie Upcoming Controller
function movieUpcomingCtrl($scope, $http) {
  $http.jsonp('http://api.themoviedb.org/3/movie/upcoming?api_key=0489b927ac5c6a2411284c40a5dbc46b&callback=JSON_CALLBACK').success(function(data) {
  	$scope.movies = data.results;
	console.log(data);
  });
}

// Movie Top Rated Controller
function movieTopRatedCtrl($scope, $http) {
  $http.jsonp('http://api.themoviedb.org/3/movie/top_rated?api_key=0489b927ac5c6a2411284c40a5dbc46b&callback=JSON_CALLBACK').success(function(data) {
  	$scope.movies = data.results;
	console.log(data);
  });
}

// Movie Popular Controller
function moviePopularCtrl($scope, $http) {
  $http.jsonp('http://api.themoviedb.org/3/movie/popular?api_key=0489b927ac5c6a2411284c40a5dbc46b&callback=JSON_CALLBACK').success(function(data) {
  	$scope.movies = data.results;
	console.log(data);
  });
}

/* ---------------------------------------------------------------------------------------------------------------- */

/* TV Controllers */

// TV Details Controller
function showDetailCtrl($scope, $http, $routeParams){
	$http.jsonp('http://api.themoviedb.org/3/tv/'+$routeParams.showId+'?api_key=0489b927ac5c6a2411284c40a5dbc46b&callback=JSON_CALLBACK').success(function(data){
		$scope.show = data;
	});
};

// TV Popular Controller
function tvPopularCtrl($scope, $http) {
  $http.jsonp('http://api.themoviedb.org/3/tv/popular?api_key=0489b927ac5c6a2411284c40a5dbc46b&callback=JSON_CALLBACK').success(function(data) {
  	$scope.shows = data.results;
	console.log(data);
  });
}

// TV Top Rated Controller
function tvTopRatedCtrl($scope, $http) {
  $http.jsonp('http://api.themoviedb.org/3/tv/top_rated?api_key=0489b927ac5c6a2411284c40a5dbc46b&callback=JSON_CALLBACK').success(function(data) {
  	$scope.shows = data.results;
	console.log(data);
  });
}

/* ---------------------------------------------------------------------------------------------------------------- */

/* People Controllers */

// Person Details Controller
function personDetailCtrl($scope, $http, $routeParams){
	$http.jsonp('http://api.themoviedb.org/3/person/'+$routeParams.personId+'?api_key=0489b927ac5c6a2411284c40a5dbc46b&callback=JSON_CALLBACK').success(function(data){
		$scope.actor = data;
	});
};

// Person Popular Controller
function personPopularCtrl($scope, $http) {
  $http.jsonp('http://api.themoviedb.org/3/person/popular?api_key=0489b927ac5c6a2411284c40a5dbc46b&callback=JSON_CALLBACK').success(function(data) {
  	$scope.actors = data.results;
	console.log(data);
  });
}