var Loader = (function() {
	// Variables
	var body = document.getElementsByTagName('BODY')[0],
		video = document.getElementsByTagName('VIDEO')[0],
		loaderElement = document.getElementById('loader'),
		hiddenElements = document.getElementsByClassName('hidden');

	// Bind events
	window.addEventListener('load', function() {
		// Workaround for Safari
		if (video != null) {
			if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
				setTimeout(function() {					
					enableInlineVideo(video, {
						iPad: true
					});

					video.play();
				}, 50);
			}
		}

		loaderElement.classList.add('hidden');

		setTimeout(function() {
			loaderElement.remove();
			
			for (i = hiddenElements.length - 1; i >= 0; i--) {
				hiddenElements[i].classList.remove('hidden');
			}

			body.classList.remove('no_scroll');
		}, 750);
	}, false);
})();