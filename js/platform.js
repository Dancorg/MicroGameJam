function newPlatform(x,y,w,h){
	var square = new Graphics().beginFill("#00F").drawRect(0,0,w,h);
	var platform = new Shape(square);
	platform.x = x;
	platform.y = y;

	stage.addChild(platform);
	return platform;
}


