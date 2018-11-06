let sl,p,inp,inpValue=12;
let parInp,radio,radioValue=0;
function start(){
can.class("canvas");
sl=createSlider(0,10,5,1);
//sl.position(50,100);
p=createP('Use slider for spin speed');
p.position(30,100);sl.parent(p);
p.class('objects');parInp=createP('Enter #   ');
parInp.position(30,250);parInp.class('objects');
sl.mousePressed(()=>{spinspeed=sl.value();});
inp=createInput(15);inp.parent(parInp);inp.class('inpStyle');
//inp.position(30,250);inp.class('objects');
inp.changed(()=>{inpValue=int(inp.value());});
radio = createRadio();
  radio.option('red',1);radio.position(30,400);
  radio.option('green',2);
  radio.option('blue',3);
  radio.class('objects');
  radio.changed(()=>{radioValue=int(radio.value());});
}
