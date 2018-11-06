let can,gr,gr1;
let x=0;

function setup() {
  pixelDensity(1);
can=createCanvas(400,400);
can.position(50,50);
gr=createGraphics(100,100);
gr1=createGraphics(50,50);
can.style('border','double');
gr.position(50,50);
//gr.style('border','dashed');
gr.background(100,0,0);
imageMode(CENTER);
}

function draw() {
  gr1.background(100,0,250);
  image(gr1,50,50);

  gr.background(100,0,0);
ellipse(100,100,30);
gr.ellipse(x,30,10);x+=2;
if(x>100){x=0;}
image(gr,150,150);
push();translate(200,200);
rotate(radians(45));
image(gr,0,0);
pop();

}
