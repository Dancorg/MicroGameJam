function newPlatform(x,y,w,h){
	var square = new Graphics().beginFill("#00F").drawRect(0,0,w,h);
	var platform = new Shape(square);
	platform.x = x;
	platform.y = y;
	platform.w = w;
	platform.h = h;
	platforms.push(platform);
	stage.addChild(platform);

	return platform;
}

function generatePlataform(){
	if( tickCounter % randPlatformTick === 0)
	{
		randPlatformTick = Math.floor(Math.random()*30+20+randPlatformTick);
		var y = Math.random()* 200 + 125;
		newPlatform(800, y, 150, 25);
		if (Math.floor(Math.random()*3) == 0) {
			newBird(Math.random()*150+800,y-75);
		}
	}

}

function updatePlataforms()
{
	for (i=0; i < platforms.length; i++)
	{
		platforms[i].x -= 6;
	}	
}


