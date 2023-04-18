noseX="";
noseY="";

function preload() {
	world_start = loadSound("world_start.wav");
	mario_gameover=loadSound("gameover.wav");
	mario_jump=loadSound("jump.wav");
	mario_coin=loadSound("coin.wav");
	mario_kick=loadSound("kick.wav");
	mario_die=loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas')
	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');

	instializeInSetup(mario);
	poseNet=ml5.poseNet(video, modalLoaded);
	poseNet.on('pose',gotPoses);
	
}

function modalLoaded(){
	console.log('modalLoaded');
}

function draw() {
	game()
}

function gotPoses(results){
	if (results.length>0)
	{
		console.log(results);
		noseX=results[0].pose.nose.x;
		noseY=results[0].pose.nose.y;
	}
}




