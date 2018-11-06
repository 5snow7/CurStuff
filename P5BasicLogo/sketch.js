let can;
let t;
function setup() {
can=createCanvas(windowWidth,windowHeight);
can.position(10,10);
can.class("bdd");
t=new logo(200,200,0);
}

let a=0;
function draw() {
//clear();
background(250,0,0);
rect(40,40,20,50);
fill(0,250,0);
ellipse(80,80,100,30);
for(let j=3;j<12;j++){t.poly(50,j);}
t.set1(200,100,0);t.fd(50);
t.sketch(40,45,"A-B-B++AABB");
}

