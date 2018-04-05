function restart(){
	var video = document.getElementById("video");
	video.currentTime = 0;
	video.play();
}

function playpause(){
	var video = document.getElementById("video");
	if(video.paused)
		video.play();
	else
		video.pause();	
}

function fullscreen(){
	var elem = document.getElementById("video");
	if (elem.requestFullscreen) {
		elem.requestFullscreen();
	} else if (elem.msRequestFullscreen) {
		elem.msRequestFullscreen();
	} else if (elem.mozRequestFullScreen) {
		elem.mozRequestFullScreen();
	} else if (elem.webkitRequestFullscreen) {
		elem.webkitRequestFullscreen();
	}
}