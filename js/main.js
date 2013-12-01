var stage;
var canvas;

var keyup = 38;
var keydown = 40;
var keyleft = 37;
var keyright = 39;
var keyj = 74;
var keyk = 75;
var keyl = 76;
var keyw = 87;
var keys = 83;
var keya = 65;
var keyd = 68;
var keyp = 80;

document.onkeydown = handleKeyDown;
document.onkeyup = handleKeyUp;

function init() {
	canvas = document.getElementById("canvas");
	stage = new Stage(canvas);

	Ticker.setFPS(60);
	Ticker.addListener(window);
}

function tick() {

}

function handleKeyDown(e) {
	switch(e.keyCode) {
		case keyj:
			return false;
		case keyk:
			return false;
		case keyl:
			return false;

		case keyp:
			return false;

		case keyup:
		case keyw:
			return false;
		case keyleft:
		case keya:
			return false;
		case keyright:
		case keyd:
			return false;
		case keydown:
		case keys:
			break;
	}
}

function handleKeyUp(e) {
	switch(e.keyCode) {
		case keyup:
		case keyw:
			return false;
		case keyleft:
		case keya:
			return false;
		case keyright:
		case keyd:
			return false;
		case keydown:
		case keys:
			break;
	}
}