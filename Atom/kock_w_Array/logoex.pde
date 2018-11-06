logo t;

void setup(){
  size(1000,800);textSize(24);
  t=new logo(width/2,height/2,0);
t.fd(100);
frameRate(10);
}

void draw(){
  background(200,0,0);
  t.fd(25);t.rt(random(180));
}



/*class Timer(){
  float asktime,starttime;

  Timer(float time1){asktime=time1;}

  void st_Timer(){starttime=millis();}

  boolean chtime(float atime){
    if(millis()-starttime>atime){return true;}
    else{return false;}
  }

}
*/
