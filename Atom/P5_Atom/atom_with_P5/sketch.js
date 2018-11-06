// https://www.youtube.com/watch?v=sSQPLIHIzmg&list=PLRqwX-V7Uu6bI1SlcCRfLH79HZrFAtBvX&index=9

// This video examines how to select DOM elements from JavaScript using select() and selectAll()

// p5 DOM reference: http://p5js.org/reference/#/libraries...

var paragraphs;

function setup() {
  createCanvas(100, 100);
  background(0);
  // createP("This is a random number " + random(100));

  // paragraph = select('#unicorn');
  // paragraphs = selectAll('p');
  paragraphs = selectAll('.rainbow');

  for (var i = 0; i < paragraphs.length; i++) {
    // paragraph.mouseOver(changeBackground);
    paragraphs[i].style('font-size', "24pt");
    paragraphs[i].style('border','double');
    paragraphs[i].mouseOver(bgd);
    paragraphs[i].mouseOut(chgbgd);
  }
  //paragraph.style('background-color', '#F0F')

  var button = select('#button');
  button.mousePressed(canvasBg);
}

function canvasBg() {
  background(random(255));
}

function bgd() {
  this.style('background-color', "red")
}

function chgbgd() {
  this.style('background-color', "green")
}
