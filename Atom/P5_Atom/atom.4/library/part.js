class part{
constructor(xs,ys){
  this.x=xs;this.y=ys;this.xsp=3;this.ysp=2;}

  display(size){
fill(250,100,0);
    ellipse(this.x,this.y,size,2*size);
  }
move(){
this.x+=this.xsp;
this.y+=this.ysp;
  }
chbd(){
if(this.x<0||this.x>width){this.xsp*=-1;}
if(this.y<0||this.y>height){this.ysp*=-1;}
  }
}
