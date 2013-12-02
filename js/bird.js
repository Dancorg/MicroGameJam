function newBird(x, y) {
	var square = new Graphics().beginFill("#CCC").drawRect(0,0,15,15);
	var bird = new Shape(square);
	
	bird.x = x;
	bird.y = y;
	bird.h = 15;
	bird.w = 15;
	
	stage.addChild(bird);
	birds.push(bird);
	return bird;
}

function updateBirds() {
	for (i=0; i < birds.length; i++)
	{
		birds[i].x -= 6;
	}
}
