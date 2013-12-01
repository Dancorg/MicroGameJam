function newPlayer(){
	var square = new Graphics().beginFill("#F00").drawRect(0,0,22,22);
	var player = new Shape(square);
	player.x = 50;
	player.y = 50;
	player.w = 22;
	player.h = 22;
	player.yVel = 0;
	player.onGround = false;

	stage.addChild(player);
	return player;
}

function playerUpdate(){
	player.yVel += 0.2;
	player.y += player.yVel;
	playerCollision();
}

function playerCollision(){
	player.onGround = false;
	console.log(platforms.length-1);
	for(var index = 0; index <= platforms.length-1; index+=1){
		var platform = platforms[index];

		if(player.x < platform.x+platform.w && player.x+player.w > platform.x && player.y<platform.y+platform.h && player.y+player.h>platform.y ){
			player.onGround = true;
			player.yVel = 0;
			player.y = platform.y-22;
		}
	}
}

function playerJump(){
	if(player.onGround == true){
		player.yVel -= 7;
		player.onGround = false;
	}
}
