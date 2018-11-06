class planet{
constructor(m,s){
this.pos=createVector(-150,-200,0);
this.vel=createVector(17,3,0);
this.acc=createVector(0,0,0);
this.mass=m;this.size=s;
}
move(){
//this.pos.add(this.vel);
this.vel.add(this.acc);
this.pos.add(this.vel);
  this.acc.mult(0);
}
display(){
push();stroke(0,250,0);
//ellipse(this.pos.x,this.pos.y,floor(this.mass/this.size),floor(this.mass/this.size));
//line(this.pos.x,this.pos.y,this.pos.x+5*cos(this.vel.heading()),this.pos.y+5*sin(this.vel.heading()));
  //push();rotate(radians(120));
translate(this.pos.x,this.pos.y,this.pos.z);sphere(this.size);pop();

}
chbd(){
if(this.pos.x<0||this.pos.x>width||this.pos.y<0||this.pos.y>height||this.z<-200||this.z>200)
{this.vel.mult(-1);}
}

attr(attractor){
let new_force=p5.Vector.sub(attractor.pos,this.pos);
let d_squared=new_force.magSq();
let G=5;
d_squared=constrain(d_squared,10,150);

let force=(G*this.mass*attractor.mass)/d_squared;//text(G,random(width),random(height));
//sun_force.setMag(force);
new_force.normalize();new_force.mult(force);
  this.acc.add(new_force);

}
repul(attractor){
let new_force=p5.Vector.sub(attractor.pos,this.pos);
let d_squared=new_force.magSq();
let G=0.10;
d_squared=constrain(d_squared,20,150);

let force=(-1*G*this.mass*attractor.mass)/d_squared;//text(G,random(width),random(height));
//sun_force.setMag(force);
new_force.normalize();new_force.mult(force);
  this.acc.add(new_force);
}

}
class sun{
constructor(x,y,z,ms){
this.pos=createVector(x,y,z);
this.mass=ms;
}
display(){
  push();stroke(250,0,250);strokeWeight(10);
 // fill(0,0,250);
translate(this.pos.x,this.pos.y,this.pos.z);
  sphere(30);pop();
}
}

class dark_Sun{
constructor(x,y,z,ms){
this.pos=createVector(x,y,z);
this.mass=ms;
}
display(){
push();stroke(250,0,0);strokeWeight(5);
  //fill(0,250,0);
 translate(this.pos.x,this.pos.y,this.pos.z);
  sphere(50);pop();
}
}
