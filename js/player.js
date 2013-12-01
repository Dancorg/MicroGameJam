function newPlayer(){
	var square = new Graphics().beginFill("#F00").drawRect(0,0,22,22);
	var player = new Shape(square);
	player.x = 50;
	player.y = 50;


	stage.addChild(player);
	return player;
}

function playerUpdate(){
	player.y += 1;
}
function playerJump(){
	player.y -= 50;
}