function newPlatform(x,y,w,h){
	var square = new Graphics().beginFill("#00F").drawRect(0,0,w,h);
	var platform = new Shape(square);
	platform.x = x;
	platform.y = y;
	platform.w = w;
	platform.h = h;

	stage.addChild(platform);
	return platform;
}


