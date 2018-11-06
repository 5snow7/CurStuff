let can,col,test=0;
function setup() {
	can=createCanvas(900,400);
can.position(300,120);textSize(25);
start();col=color(200,0,200);
}
let x=0;
function draw() {
background(0,200,200);
fill(250,0,0);stroke(0,0,250);
strokeWeight(6);
switch(radioValue){
	case 1:test="1";col=color(250,0,0);break;
	case 2:test="2";col=color(0,250,0);break;
	case 3:test="3";col=color(0,0,250);break;
	default:test="4";col=color(200,0,200);break;}
text(test,30,30);

poly(100,150,50,inpValue,col);
//poly(400,100,50,6);
spinPoly(spinspeed+x,col);
x+=spinspeed;
}
