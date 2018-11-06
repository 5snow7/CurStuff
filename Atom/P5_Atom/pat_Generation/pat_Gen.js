function slopexy( y, x){
  var a=y, b=x,cur="0";
  while(a!=b){
    if(a>b){cur=cur+"1";b=b+x;
    }
    else{
      cur=cur+"0";a=a+y;
    }}
    cur=cur+"1";
    return cur;
}

function slopexy_N( y, x, n){
 var cur=""; var k=0;
 while(k<n){
   cur+=slopexy(y,x);
k++;
 }
 //cur=cur+1;
  return cur;
}

function edit_Str( str){
  var state='1', n=0, ch='0', strout="A";
  for(var j=0;j<str.length;j++){
    ch=str.charAt(n);
    switch(state){
      case '1':
      if(state=='1'&&ch=='0'){strout+='A';state='4';}
      if(state=='1'&&ch=='1'){strout+='A';state='2';}
      break;
      case '2':
       if(state=='2'&&ch=='0'){strout+='+';strout+='A';state='1';}
       if(state=='2'&&ch=='1'){strout+='+';strout+='A';state='3';}
      break;
      case '3':
      if(state=='3'&&ch=='0'){strout+='-';strout+='A';state='4';}
      if(state=='3'&&ch=='1'){strout+='-';strout+='A';state='2';}
      break;
      case '4':
      if(state=='4'&&ch=='0'){strout+='A';state='1';}
      if(state=='4'&&ch=='1'){strout+='A';state='3';}
      break;
 }
n++;
  }//while(n<str.length());
return strout;
}
