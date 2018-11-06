function set_Up(){

col=color(100,300,100);//background color;

  //create some toys
can= createCanvas(400, 400);sl=createSlider(0,6,3);
inp=createInput("");par_color=createP("Change color of ball");
inprem=createInput("remove ball");sel=createSelect();

  //style setups
can.textSize(24);  can.class("bord");sl.class("bord");par_color.class("bord");
inp.class("input");inprem.class("input");sel.class("bord");

  //Positioning
  can.position(40,100);sl.position(150,20);sel.position(30,20);
  //inp.position(350,20);
  inprem.position(100,60);par_color.position(350,20);

 inp.parent(par_color);
  sel.option('red');sel.option('blue');sel.option('green');

  b=new ball(width/2,height/2,3,4);

for(let j=0;j<15;j++){
let btemp=new ball(random(width),random(height),-4+random(8),-5+random(10));
  bs.push(btemp);
}

for(let j=0;j<15;j++){
let stemp=new sqs(random(width),random(height),-4+random(8),-5+random(10));
  qs.push(stemp);
}


  sel.changed(chgbk);
  inp.changed(chgcol);
  inprem.changed(remball);
  sl.mousePressed(chgspd);
}

function chgspd(){
 newx=sl.value();
  b.xsp=newx;
  for(let j=0;j<bs.length;j++){
bs[j].xsp=newx;
  }
}

function chgbk(){
 let tem=sel.value();
  if(tem=='red'){col=color(250,0,0);}
  if(tem=='blue'){col=color(0,0,250);}
 if(tem=='green'){col=color(0,250,0);}
 }

function chgcol(){
 let tempint=0;
  for(let j=0;j<bs.length;j++){
   if(inp.value()==j){bs[j].col=sel.value();}
  }

}

function remball(){
  for(let j=0;j<bs.length;j++){
if(inprem.value()==j){bs.splice(j,1);}
  }
}
