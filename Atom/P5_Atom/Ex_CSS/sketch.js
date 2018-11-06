let can;let p,c;let par;
let parr=[];let parag;
function setup() {
  // put setup code here
can=createCanvas(400,400);can.position(250,50);
p=new part(100,100);can.class("bord");
//can.mousePressed(chcolor);
parag=select("#p_id");parag.position(50,300);
par=createP("test again");par.position(30,400);
for(let j=0;j<10;j++){
parr[j]=new part(random(400),random(400));
}
frameRate(25);
}
let x=0;let y=0;
function draw() {
  // put drawing code here
background(200,0,0);
parag.position(x,y);
if(x>600){x=0;}if(y>500){y=0;}
fill(0,0,250);
ellipse(100,100,40,40);
fill(0,250,0);
rect(200,200,50,20);
ellipse(200,200,40,40);
fill(0,0,250);
ellipse(100,300,30,50);
move();
ellipse(200,100,600,60);
p.display();
p.move();
p.chbd();
for(let j=0;j<10;j++){
parr[j].move();
parr[j].display();
parr[j].chbd();

}
}

function move(){
rect(x,y,20,20);
x+=5;y+=3;
if(x>width-50){x=50;}
if(y>height){y=0;}
}
