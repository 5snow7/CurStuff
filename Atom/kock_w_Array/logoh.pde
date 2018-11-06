class logo {
  float xs;float ys;float xf;float yf;float angle;
  logo(float x,float y, float as){xs=x;ys=y;angle=as;}
  logo(){xs=0;ys=0;xf=0;yf=0;angle=0;}

 void fd(float len) {xf=xs+len*cos(3.141592*angle/180);
  yf=ys+len*sin(3.141592*angle/180);
  line(xs,ys,xf,yf);
  xs=xf;ys=yf;
  }
void set1(float x,float y,float an){xs=x;ys=y;angle=an;}
 void  rt(float an){angle=angle+an;}
 void  lt(float an){angle=angle-an;}

}

void rectri(int level,float len,logo t)
{
  if (level==0) {t.fd(len);}
  else{
    rectri(level-1,len/3,t);t.lt(60);
    rectri(level-1,len/3,t);t.rt(120);
    rectri(level-1,len/3,t);t.lt(60);
    rectri(level-1,len/3,t);
  }
}

void poly(int n, int len, logo t)
{
  for(int j=1;j<=n;j++){t.fd(len);t.rt(360/n);}
}

void inspi(logo t,float len,float angle){
 do{ t.fd(len);t.rt(angle);
  angle=angle+angle;
}while(angle<2000);
}


/*class logo {
  float xs;float ys;float xf;float yf;float angle;
  logo(float x,float y, float as){xs=x;ys=y;angle=as;}
  logo(){xs=0;ys=0;xf=0;yf=0;angle=0;}

 void fd(float len) {xf=xs+len*cos(3.141592*angle/180);
  yf=ys+len*sin(3.141592*angle/180);
  line(xs,ys,xf,yf);
  xs=xf;ys=yf;
  }

 void  rt(float an){angle=angle+an;}
 void  lt(float an){angle=angle-an;}
void set1(float x,float y,float an){xs=x;ys=y;angle=an;}

}
void rectri(int level,float len,logo t)
{
  if (level==0) t.fd(len);
  else{
    rectri(level-1,len/3,t);t.lt(60);
    rectri(level-1,len/3,t);t.rt(120);
    rectri(level-1,len/3,t);t.lt(60);
    rectri(level-1,len/3,t);
  }}

void poly(int n, int len, logo t)
{
  for(int j=1;j<=n;j++){t.fd(len);t.rt(360/n);}
}

void inspi(float len,float angle,logo t){
  t.fd(len);t.rt(angle);
  angle=angle+angle;
}
float b;float beta;

void cpoly(int n, float len, logo t)
{
  b=len/(sqrt(2*(1-cos(radians(360/n)))));
  beta=(180-360/n)/2;
  t.fd(b);t.rt(180-beta);
  for(int k=1;k<=n;k++){t.fd(len);t.rt(360/n);}
  t.rt(beta);t.fd(b);t.rt(180);
}

void tran_rectri(int level, float len, logo t,float x,float y){
  pushMatrix();
translate(x,y);
rectri(level,len,t);
popMatrix();
}*/
