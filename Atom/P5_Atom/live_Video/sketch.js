let can, video,par;
function setup() {
	can=createCanvas(200,200);
	can.position(500,50);
par=createP("test one");
video=createCapture(VIDEO);
video.size(300,300);
video.position(20,10);video.class('vid');
par.position(600,400);
}

function draw() {
background(200,0,0,50);
ellipse(mouseX,mouseY,30,30);
}
