'use strict';

angular.module('mopidyApp').controller('tracklistController',
	function ($scope, $tracklist) {
		var changeTlTrack = function(tl_track) {
			mopidy.playback.changeTrack(tl_track).then(function() {
			}, consoleError);
		};

		var showTracklist  = function() {
			mopidy.tracklist.getTracks().then(function(data) {
				console.log('Behold the magical tracklist');
				console.log(data);
				$tracklist.updateTracks(data, 'tracklistController::showTracklist');
			});
		};

		$scope.changeTrack = function(track) {
			return changeTlTrack(mkTlTrack(track));
		};

		$scope.resetTracklist = function(tracks) {
			mopidy.tracklist.clear().then(function() {
				// TODO: Replace hack (angular.fromJson(angular.toJson) to remove $$hashKey from tracks
				mopidy.tracklist.add(angular.fromJson(angular.toJson(tracks[0]))).then(function() {
					console.log('Tracklist sent');
					mopidy.playback.play();
				}, consoleError);
			}, consoleError);
		}

		$scope.addToPlaylist = function(track) {
			mopidy.tracklist.add(angular.fromJson(angular.toJson([track]))).then(function() {
				showTracklist();
			}, consoleError);
		};
		
		mopidy.on('state:online', function() {
			showTracklist();
		});	


		$scope.$on('updateTracklist', function() {
			console.log('tracklistController received broadcast [updateTracklist]');
			$scope.tracklist = $tracklist.tracks;
			$scope.$apply();
		});
	});