function poly(x,y,len,num,col){
 fill(col);
  beginShape();
   for(let j=0;j<num;j++){
    vertex(x+len*cos(radians(j*360/num)),y+len*sin(radians(j*360/num)));
  }
  endShape(CLOSE);

}
let spinspeed=6;
function spinPoly(spin){
translate(width/2,height/2);
rotate(radians(spin));
poly(0,0,100,8,col);
}
