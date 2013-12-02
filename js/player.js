function newPlayer(){
	var square = new Graphics().beginFill("#F00").drawRect(0,0,22,22);
	var player = new Shape(square);
	player.x = 150;
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
	for(var index = 0; index <= platforms.length-1; index+=1){
		var platform = platforms[index];
		var colRight;
		var colUp;
		var colDown;

		/*if(player.x < platform.x+platform.w && player.x+player.w > platform.x && player.y<platform.y+platform.h && player.y+player.h>platform.y ){
			player.onGround = true;
			player.yVel = 0;
			player.y = platform.y-22;
		}*/
		
		colDown = pointCollision(player.x+11,player.y+22,platform);
		colUp = pointCollision(player.x+11,player.y-1,platform);
		colRight = pointCollision(player.x+23,player.y+11,platform);

		if (colDown) {
			player.onGround = true;
			player.yVel = 0;
			player.y = platform.y-22;
		}
		if (colUp) {

			player.yVel = 0;
			player.y = platform.y+platform.h+1;
		}
		if (colRight){
			player.x -= 6;
		}

	}
}

function pointCollision(x,y,platform){
	if(x > platform.x && x < platform.x+platform.w && y > platform.y && y < platform.y+platform.h){
		return true;
	}else{
		return false;
	}
}

function playerJump(){
	if(player.onGround == true){
		player.yVel -= 7;
		player.onGround = false;
	}
}
