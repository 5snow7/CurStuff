
int[][] sandpile;

void setup(){
  size(300,300);background(250,0,0);
sandpile=new int[width][height];
sandpile[width/2][height/2]=12000000;
}

void draw(){
render();
for(int j=1;j<100;j++){
topple();
}
}


void render(){
  loadPixels();
  for(int x=0;x<width;x++){
    for(int y=0;y<height;y++){
      int num=sandpile[x][y];
      color col=color(0,100,0);
      if(num==0){col=color(250,0,0);}
      else if(num==1){col=color(0,250,0);}
      else if(num==2){col=color(0,0,250);}
      else if(num==3){col=color(100,100,100);}
      pixels[x+y*width]=col;
    }
  }
updatePixels();
}

void topple(){
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
