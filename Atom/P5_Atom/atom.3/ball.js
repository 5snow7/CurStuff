class ball{
  constructor(xs,ys,xstsp,ystsp){this.col=color(250,250,0);
   this.x=xs;this.y=ys;this.xsp=xstsp;this.ysp=ystsp;
  }
  move(){
   this.x=this.x+this.xsp;this.y=this.y+this.ysp;
  }
  show(){
   fill(this.col);strokeWeight(4);stroke(0,250,0);
    ellipse(this.x,this.y,20,20);
  }
  chbd(){
   if(this.x<0||this.x>width){this.xsp=-1*this.xsp;}
    if(this.y<0||this.y>height){this.ysp=-1*this.ysp;}
  }

  coll(blist){

    for(let j=blist.length-1;j>0;j--){
      let temp=dist(this.x,this.y,blist[j].x,blist[j].y);
      if(4<temp&&temp<10) {blist.splice(j,1);}

  }

  }
}
