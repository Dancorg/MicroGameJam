function newPlayer(){
	var square = new Graphics().beginFill("#F00").drawRect(0,0,22,22);
	var player = new Shape(square);
	player.x = 50;
	player.y = 50;
	player.yVel = 0;

	stage.addChild(player);
	return player;
}

function playerUpdate(){
	player.yVel += 0.1;
	player.y += player.yVel;

	for(var index = 0; platforms.length-1; index++){
		var platform = platforms[index];
		
		if(player.x < platform.x+platform.w && player.x+player.w > platform.x && player.y<platform.y+platform.h && player.y+player.h>platform.y ){
			console.log("coliision");
			player.yVel = 0;
			player.y = platform.y;
		}
	}
}
function playerJump(){
	player.yVel -= 10;
}
