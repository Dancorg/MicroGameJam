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
var tickCounter = 0;

var platforms = [];

function init() {
	canvas = document.getElementById("canvas");
	stage = new Stage(canvas);
	canvas.addEventListener("click", function(event) { playerJump(); });

	player = newPlayer();
	platform = newPlatform(50,150,400,22);

	Ticker.setFPS(60);
	Ticker.on("tick", tick);
	document.onkeyup = handleKeyUp;
}


function tick(e) {
	playerUpdate();
	stage.update(e);
	tickCounter++;
	generatePlataform();
	updatePlataforms();
}

function handleKeyUp(e)
{
	playerJump();
}



