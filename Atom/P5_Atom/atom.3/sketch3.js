let b,can,sl,p,sel,col,inp,inprem,newx,par_color;
let bs=[];let qs=[];

function setup() {
  set_Up();
}

function draw() {
background(col);text(bs.length,20,20);
//b.move();b.chbd();b.show();
for(let j=bs.length-1;j>0;j--){
 bs[j].move();bs[j].chbd();bs[j].show();//bs[j].coll(qs);
//}
//for(let j=qs.length-1;j>0;j--){
 qs[j].move();qs[j].chbd();qs[j].show();qs[j].coll(bs);bs[j].coll(qs);
}


}
