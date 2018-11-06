class Box{

 constructor( x, y, z, r_)
 {
  this.pos=createVector(x,y,z);this.r=r_;
 }

   generate(){
 let boxes=[];
    for(let x=-1;x<2;x++){
   for(let y=-1;y<2;y++){
   for(let z=-1;z<2;z++){
   let sum=abs(x)+abs(y)+abs(z);
   if(choice_Value==1&&sum<=1){
     let newR=this.r/3;
    let b=new Box(this.pos.x+x*newR,this.pos.y+y*newR,this.pos.z+z*newR,newR);
    boxes.push(b);}
    if(choice_Value==2&&sum>1){
      let newR=this.r/3;
     let b=new Box(this.pos.x+x*newR,this.pos.y+y*newR,this.pos.z+z*newR,newR);
     boxes.push(b);}

  }}}
    return boxes;
  }

   show(){
   push();

    translate(this.pos.x,this.pos.y,this.pos.z);
  fill(250,250,0);
  box(this.r);// noStroke();sphere(r);
  pop();
  }

}
