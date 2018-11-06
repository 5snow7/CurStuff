
let a=0,b; let sponge=[];
let can;let p;
let choice,choice_Value=1;

function setup(){
 can=createCanvas(500,500,WEBGL);
 can.style('border-style','double');
 can.style('border-width','10px');
 can.style('border-color','red');
 can.position(50,10);
 can.mousePressed(addboxes);
 p=createP("text");

 b=new Box(0,0,0,200);
 sponge.push(b);
//innerOuter();
 p.html(sponge.length);
}

let col=20;

function draw(){
background(col);//noStroke();
noFill();
//innerOuter();
 rotateX(a);rotateY(0.4*a);rotateZ(0.6*a);
 for(let j=0;j<sponge.length;j++){
 sponge[j].show();
 }
 p.html(sponge.length);
a+=0.01;
}

 function addboxes(){
   col+=150;
   next=[];testsponge=[];
   for(let j=0;j<sponge.length;j++){
   next=sponge[j].generate();
   testsponge=testsponge.concat(next);
   }
sponge=testsponge;
}

function innerOuter(){

  choice=createRadio();
  choice.option('Inner',1);
  choice.option('Outer',2);
  choice.position(650,100);
  choice.style('border','dashed');
  choice_Value=choice.value();
}
