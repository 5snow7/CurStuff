let can,r=5;
let p, p1, c,i=0;
let par;
let t;

function setup() {
  // put setup code here
  can = createCanvas(400, 400);
  can.position(50, 50);can.mouseClicked(chgrate);
  p = new part(100, 100);
  p1 = new part(120, 30);
  frameRate(5);
  //can.mousePressed(chcolor);
  par = createP("test again w atom.4");
  par.position(30, 100);can.style('border','double');
  can.style('border-width','30pt');
  t = new logo(100, 100, 0);
}
let x = 0;
let y = 0;
let an = 1;

function draw() {
  // put drawing code here
  background(r, 0, 0);
  fill(0, 0, 250);
  ellipse(100, 100, 40, 400);
  fill(0, 250, 0);
  rect(200, 200, 50, 600);
  ellipse(200, 200, 40, 40);
  fill(0, 0, 250);
  ellipse(100, 300, 30, 50);
  move(30); //test(t,50);
  //t.fd(100);t.rt(90);
  //t.fd(50);t.rt(90);t.fd(50);t.rt(90);
  //t.fd(50);t.rt(90);t.fd(50);t.rt(90);
  //if(t.an>360){t.an=0;}
  t.rt(10);
  t.fd(5);
  sq1(t, 100);
  p.display(20);
  p1.display(30)
  p.move();
  p1.move();
  p.chbd();
  p1.chbd()
}
//let len;
function move(len) {
  rect(x, y, len, len);
  x += 5;
  y += 3;
  if (x > width - 50) {
    x = 50;
  }
  if (y > height) {
    y = 0;
  }
}

function sq1(t, l) {
  t.fd(l);
  t.rt(90);
  t.fd(l);
  t.rt(90);
  t.fd(l);
  t.rt(90);
  t.fd(l);
  t.rt(90);
}

function test(t, l) {
  t.fd(l);
  t.rt(90);
}

function chgrate(){
  if(i==0 % 2){r=25;i++;}
  else{r=250;i++;}
}
