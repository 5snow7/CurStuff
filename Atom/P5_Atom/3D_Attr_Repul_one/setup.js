setup2=function(){
  sl=createSlider(1,100,20);
  sl.position(100,60);
  }
let inpbg,inpsize,pbg,psize;

start1=function(){
 p1=new planet(20,10);
  sun1=new sun(-100,100,50,30);
  sun2=new sun(200,200,-200,40);
 darksun1=new dark_Sun(20,20,-500,50);
}

setup1=function(){
inpbg=createInput();inpsize=createInput();
  pbg=createP("bg ON/OFF");psize=createP("planetsize");

pbg.position(0.9*windowWidth,100);psize.position(0.90*windowWidth,300);
  inpbg.parent(pbg);inpsize.parent(psize);

pbg.class("bord");psize.class("bord");
inpbg.style("width: 20px");inpsize.style("width: 20px");
inpbg.changed(chgbg);inpsize.changed(chsize);
}

start2=function(){
 p1=new planet(50,50,0);
  sun1=new sun(300,200,0,30);
  sun2=new sun(900,200,0,40);
  darksun1=new dark_Sun(900,600,0,50);
  darksun2=new dark_Sun(200,200,0,40);
}


function chgbg(){
  bg_OnOff=inpbg.value();
  }

function chsize(){
 let plsize=inpsize.value();
  p1.size=plsize;
}
