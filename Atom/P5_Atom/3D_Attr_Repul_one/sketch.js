let sl,val,bg_0nOff,plsize;
let p1,sun1,sun2,darksun1,darksun2;

let can;
function setup() { bg_OnOff=1;plsize=20;
  can=createCanvas(0.8*windowWidth,0.8*windowHeight,WEBGL);can.position(20,20);
  can.class('bad');
	 setup1();
  start1();
  //start2();
frameRate(5);
}

function draw() {
 if(bg_OnOff==1){background(220,0,0,100);}
  else{background(0,250,250,50);}
  //sphere(50);
sun1.display();sun2.display();darksun1.display();
  //darksun2.display();p1.repul(darksun2);
p1.repul(darksun1);
  p1.attr(sun1);p1.attr(sun2);//t1.chbd();
 p1.move(); p1.display();
//val=sl.value();
}

let ch=0;
function mousePressed(){
  if(ch%2==0){loop();}
  if(ch%2==1){noLoop();}
ch++;
             }
