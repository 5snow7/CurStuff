var t,sent="";

function setup() {
  begin();
  t=new Logo(400,300,0);
}

function draw() {
  background(220,0,0);t.set1(width/2,2.5*height/5,0);
 // text("this is angle, so use values like 45,60,90",50,130);
  sent=edit_Str(slopexy_N(y,x,n1));
  t.sketch(l1,a1,sent);
  textSize(18);
text(slopexy(y,x),200,50);
}
