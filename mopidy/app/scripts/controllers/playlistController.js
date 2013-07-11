'use strict';

angular.module('mopidyApp').controller('playlistController',
	function ($scope, $playlists) {
		var showPlaylists = function() {
			//  get playlists without tracks
			mopidy.playlists.getPlaylists(false).then(function(data){
				$playlists.updatePlaylists(data, 'playlistController::showPlaylists');
			});
		}

		mopidy.on('state:online', function() {
			showPlaylists();
		});	

		$scope.$on('updatePlaylists', function() {
			console.log('Received [updatePlaylist]');
			$scope.playlists = $playlists.playlists;
			$scope.$apply();
		});
	});