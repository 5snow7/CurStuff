let can;let bRight;
let a,b,br;let tree=[];
function setup() {
  // put setup code here
can=createCanvas(400,400);can.position(250,50);
a=createVector(width/2,height);
b=createVector(width/2,height-100);
br=new branch(a,b);
tree[0]=br;
fill(25,250,250);
//rect(50,50,20,40);
}

function draw() {
  background(200,200,250);
for(let j=0;j<tree.length;j++){
  tree[j].show();
  tree[j].jitter();
}
}

function mousePressed(){
  for(let j=tree.length-1;j>=0;j--){
    tree.push(tree[j].branchR());
    tree.push(tree[j].branchL());
    tree.push(tree[j].branchM());
    tree.push(tree[j].branchRr());
    tree.push(tree[j].branchLl());

  }


}
