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
	if( tickCounter % 70 === 0)
	{
		var y = Math.random()* 200 + 125;
		platforms.push(newPlatform(800, y, 150, 25));
	}

}

function updatePlataforms()
{
	for (i=0; i < platforms.length; i++)
	{
		platforms[i].x -= 3;
	}	
}


