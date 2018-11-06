let can,inp,inp2,inp3,inp4,inp5,x=47,y=133,l1=60,a1=135,py,px,pl,pa;
var n1=5,pn;
function begin(){
//n=10*(x+y-1);
 can=createCanvas(800, 500);//can.position(200,60);
 //can.style("border","double");
 can.class('test');can.parent('h1');
 can.style("border-width","20px");
inp=createInput(45);inp.position(20,72);
//inp.style("border","dashed");
 inp.style("width","25px");

inp2=createInput(123);inp2.position(20,110);
inp2.style("border","double");inp2.style("width","25px");
//inp.style("background","green");
 inp2.style("background-color","blue");
inp.changed(chg);inp2.changed(chg);
inp3=createInput(45);inp3.position(20,145);
inp3.style("border","dotted");inp3.style("width","25px");
inp4=createInput(135);inp4.position(20,180);
inp4.style("border","solid");inp4.style("width","25px");

 inp5=createInput(25);inp5.position(20,215);
//inp5.style("border","solid");
 inp5.style("width","25px");
//inp5.style("background","purple");
//inp3.style("background","green");inp4.style("background","blue");
inp3.changed(chg);inp4.changed(chg);inp5.changed(chg);

 inp.class('test');//inp2.class('test');
inp3.class('test');inp4.class('test');
inp5.class('test');


 py=createP('y-slope');py.position(60,45);py.style("font-size","25px");
py.style("border","dashed");py.style("height","25px");py.style("width","90px");
py.class('test2');
 px=createP('x-slope');px.position(60,80);px.style("font-size","25px");
px.style("border","dashed");px.style("height","25px");px.style("width","90px");
 pl=createP('length');pl.position(60,115);pl.style("font-size","25px");
pl.style("border","dashed");pl.style("height","25px");pl.style("width","90px");
py.style("height","25px");py.style("width","90px");
pa=createP('angle');pa.position(60,150);pa.style("font-size","25px");
pa.style("border","dashed");pa.style("height","25px");pa.style("width","90px");

pn=createP('number');pn.position(60,185);pn.style("font-size","25px");
pn.style("border","dashed");pn.style("height","25px");pn.style("width","90px");
px.class('test2');pl.class('test2');
pa.class('test');pn.class('test2');
pa.mouseOver(chgbckgrd);

}

function chg(){
 x=int(inp.value());
 y=int(inp2.value());
 l1=int(inp3.value());
 a1=int(inp4.value());
 n1=int(inp5.value());
}

function chgbckgrd(){
var col=floor(random(250));
 this.style('background-color',"RGB(250,col,0)");
}
