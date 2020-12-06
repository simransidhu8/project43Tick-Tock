function setup(){
  createCanvas(450, 450);
  angleMode(DEGREES);
}

function draw(){
  background(0);
  
  translate(200, 200);
  rotate(-90);
  let hr = hour();
  let mn = minute();
  let sc = second();

  strokeWeight(8);
  stroke("red");
  noFill();
  let end1 = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, end1);
  
  stroke("green");
  let end2 = map(mn, 0, 60, 0, 360);
  arc(0, 0, 250, 250, 0, end2);

  stroke("blue");
  let end3 = map(hr % 12, 0, 60, -0, 360);
  arc(0, 0, 200, 200, 0, end3);

  push();
  rotate(end1);
  stroke("red");
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(end2);
  stroke("green");
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(end3);
  stroke("blue");
  line(0, 0, 50, 0);
  pop();

  stroke("black");
  point(0, 0);
}