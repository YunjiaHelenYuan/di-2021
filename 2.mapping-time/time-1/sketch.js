var now = clock()
function setup() {
  // set the width & height of the sketch
  createCanvas(300, 300)

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())

}

function draw() {
  background(230);
  //second
  let m=map(now.progress.min, 0,1,0,255);
  fill(m,100,100);
  noStroke();
  rect(0,0,300,300);
  //minute
  strokeWeight(2);
  stroke(255);
  line(0,150,300,150);
  strokeWeight(0);
  angleMode(DEGREES);
  let x1=map(now.min,0,60,0,width);
  let y1= map(now.min,0,60,0,360);
  fill(160);
  ellipse(x1,cos(y1)*50+150,10,10);
  //hour
  strokeWeight(2);
  stroke(255);
  line(150,0,150,300);
  strokeWeight(0);
  let y2=map(now.hours,0,24,0,height);
  let x2= map(now.hours,0,24,90,450);
  fill(180,236,100);
  ellipse(cos(x2)*50+150,y2,10,10);
  // check the clock for the current time and unpack some of its fields to generate a time-string

  // set the background to 'white' – you can also specify colors use integers, hex-color strings and more.
  // note that setting the background also clears the canvas from our previous round of drawing

  // set up typography & drawing-color
  noStroke();
  textFont("Anonymous Pro") // ← check index.html to see how it was loaded from google-fonts
  textSize(42) // make it big
  fill(100, 50, 50)

  // draw the time string to the canvas
  text(now.text.date, 30, 50)
  text(now.text.time, 30, 100)

}
