import processing.core.*; 
import processing.data.*; 
import processing.event.*; 
import processing.opengl.*; 

import java.util.HashMap; 
import java.util.ArrayList; 
import java.io.File; 
import java.io.BufferedReader; 
import java.io.PrintWriter; 
import java.io.InputStream; 
import java.io.OutputStream; 
import java.io.IOException; 

public class sandpile extends PApplet {


int[][] sandpile;

public void setup(){
  background(250,0,0);
sandpile=new int[width][height];
sandpile[width/2][height/2]=12000000;
}

public void draw(){
render();
for(int j=1;j<100;j++){
topple();
}
}


public void render(){
  loadPixels();
  for(int x=0;x<width;x++){
    for(int y=0;y<height;y++){
      int num=sandpile[x][y];
      int col=color(0,100,0);
      if(num==0){col=color(250,0,0);}
      else if(num==1){col=color(0,250,0);}
      else if(num==2){col=color(0,0,250);}
      else if(num==3){col=color(100,100,100);}
      pixels[x+y*width]=col;
    }
  }
updatePixels();
}

public void topple(){
int[][] next=new int[width][height];
  for(int x=0;x<width;x++){
    for(int y=0;y<height;y++){
    int num=sandpile[x][y];
    if(num<4){next[x][y]=sandpile[x][y];}
    }
  }

  for(int x=0;x<width;x++){
    for(int y=0;y<height;y++){
    int num=sandpile[x][y];
    if(num>=4){next[x][y]+=(num-4);
    if(x>1)next[x-1][y]++;
    if(x<width-1)next[x+1][y]++;
    if(y>1)next[x][y-1]++;
    if(y<height-1)next[x][y+1]++;
    }
  }
}
sandpile=next;
}
class logo {
  float xs;float ys;float xf;float yf;float angle;
  logo(float x,float y, float as){xs=x;ys=y;angle=as;}
  logo(){xs=0;ys=0;xf=0;yf=0;angle=0;}

 public void fd(float len) {xf=xs+len*cos(PI*angle/180);
  yf=ys+len*sin(PI*angle/180);
  line(xs,ys,xf,yf);
  xs=xf;ys=yf;
  }

  public void bk(float len) {xf=xs-len*cos(PI*angle/180);
  yf=ys-len*sin(PI*angle/180);
  line(xs,ys,xf,yf);
  xs=xf;ys=yf;
  }

public void set1(float x,float y,float an){xs=x;ys=y;angle=an;}
 public void  rt(float an){angle=angle+an;}
 public void  lt(float an){angle=angle-an;}
public float xpos(){return xf;}
public float ypos(){return yf;}
public float dir(){return angle;}
}

public void rectri(int level,float len,logo t)
{
  if (level==0) {t.fd(len);}
  else{
    rectri(level-1,len/3,t);t.lt(60);
    rectri(level-1,len/3,t);t.rt(120);
    rectri(level-1,len/3,t);t.lt(60);
    rectri(level-1,len/3,t);
  }
}

public void poly(int n, int len, logo t)
{
  for(int j=1;j<=n;j++){t.fd(len);t.rt(360/n);}
}

public void inspi(float len,float angle,logo t){
  t.fd(len);t.rt(angle);
  angle=angle+3;
  if(angle>360){angle=0;}
}

public void linepoly(int n,float len,logo t){
  float[] xpts=new float[n+1];
  float[] ypts=new float[n+1];
  for(int j=1;j<=n;j++){
    t.fd(len);t.rt(360/n);xpts[j]=t.xpos();ypts[j]=t.ypos();}
for(int k=1;k<=n;k++){
  for(int p=1;p<=n;p++){
    line(xpts[k],ypts[k],xpts[p],ypts[p]);}}
}

//hil[n_,len_,p_]:=If[n==0,fd[0],{lt[p*90],hil[n-1,len,-1*p],fd[len],rt[p*90],hil[n-1,len,p],fd[len],hil[n-1,len,p],rt[p*90],fd[len],
//  hil[n-1,len,-1*p],lt[p*90]}]

public void hil(int n,float len, int p,logo t){
  if(n==0){}
  else{t.lt(p*90);hil(n-1,len,-1*p,t);t.fd(len);t.rt(p*90);
  hil(n-1,len,p,t);t.fd(len);hil(n-1,len,p,t);t.rt(p*90);
  t.fd(len);hil(n-1,len,-1*p,t);t.lt(p*90);
  }
}

public void v(int level,float len,float an,logo t){
if(level==1){}
else{
  t.rt(an/2);t.fd(len);v(level-1,len/2,an,t);t.bk(len);t.lt(an);
t.fd(len);v(level-1,len/2,an,t);t.bk(len);t.rt(an/2);}
}
  public void settings() {  size(300,300); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "sandpile" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
