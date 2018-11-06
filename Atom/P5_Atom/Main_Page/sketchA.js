let can;let p,c;let par;
let parr=[];let parag;
function setup() {
startup();
can=createCanvas(.4*screen.width,.5*screen.width);
can.position(.4*screen.width,.15*screen.height);
can.style('background','green');
p=new part(100,100);can.class("bord");

//can.mousePressed(chcolor);
parag=select("#p_id");parag.position(50,300);
par=createP("testy333 again");par.position(30,400);
for(let j=0;j<10;j++){
parr[j]=new part(random(400),random(400));
}
frameRate(60);
}
let xp=0;let yp=0;
let x,y;
function draw() {
  // put drawing code here
background(200,0,0);
parag.position(xp,yp);xp++;yp++;
if(xp>screen.width){xp=0;}if(yp>screen.height){yp=0;}

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
fill(200,200,200);
rect(x,y,20,20);
x+=5;y+=3;
if(x>width-50){x=50;}
if(y>height){y=0;}
}
