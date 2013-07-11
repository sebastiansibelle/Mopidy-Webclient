'use strict';

app.factory('$tracklist', function($rootScope) {
	var $tracklist = {};

	$tracklist.tracks = [];

	$tracklist.updateTracks = function(tracks, initiator) {
		this.tracks = tracks;
		this.broadcast(initiator);
		return this.tracks;
	};

	$tracklist.broadcast = function(initiator) {
		console.log('$tracklist broadcasting [updateTracklist] from', initiator);
		$rootScope.$broadcast('updateTracklist');
	};

	return $tracklist;
});

app.factory('$playback', function($rootScope) {
	var $playback;

	$playback.state = '';

	$playback.updateState = function(state, initiator) {
		this.state = state;
		this.broadcast(initiator);
		return this.state;
	};

	$playback.broadcast = function(initiator) {
		console.log('$playback broadcasting [updateState] from', initiator);
		$rootScope.$broadcast('updateState');
	};

	return $playback;
});


app.factory('$playlists', function($rootScope) {
	var $playlists = [];

	$playlists.updatePlaylists = function(playlists, initiator) {
		console.log('Update them playlists');

		this.playlists = playlists;
		this.broadcast(initiator);
		return this.playlists;
	};

	$playlists.broadcast = function(initiator) {
		console.log('$playlists broadcasting [updateState] from', initiator);
		$rootScope.$broadcast('updatePlaylists');
	};

	return $playlists;
});
