let can;let p,c;let par;
function setup() {
  // put setup code here
can=createCanvas(400,400);can.position(50,50);
p=new part(100,100);
//can.mousePressed(chcolor);
par=createP("test again");par.position(30,400);

}
let x=0;
function draw() {
  // put drawing code here
background(200,0,0);
fill(0,0,250);
ellipse(100,100,40,40);
fill(0,250,0);
rect(200,200,50,20);
ellipse(200,200,40,40);
fill(0,0,250);
ellipse(100,300,30,50);
move();
p.display();
p.move();
p.chbd();
}

function move(){
rect(x,50,20,20);
x+=5;
if(x>width-50){x=50;}
}
