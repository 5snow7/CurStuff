class part{
constructor(xs,ys){
  this.x=xs;this.y=ys;this.xsp=random(5);this.ysp=2;}

  display(){
fill(250,100,0);
    rect(this.x,this.y,40,40);
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
