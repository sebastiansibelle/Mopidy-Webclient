'use strict';

var app = angular.module('mopidyApp', [])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'libraryController'
			})
		.otherwise({
			redirectTo: '/'
		});
	});

var mopidy = Mopidy();
var online = false;

mopidy.on(console.log.bind(console));
mopidy.on('state:online', function() {
	online = true;

});

var consoleError = console.error.bind(console);

var mkTlTrack = function(track) {
	delete track['$$hashKey'];
	var tl_track = {
		'__model__': 'TlTrack',
		'track': track
	};
	return tl_track;
};