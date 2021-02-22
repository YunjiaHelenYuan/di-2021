

function setup() {
  // set the width & height of the sketch
  createCanvas(400, 400)

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())

}

function draw() {
  var startA;
  var startB;
  // check the clock for the current time and unpack some of its fields to generate a time-string
  var now = clock()

  // set the background to 'white' – you can also specify colors use integers, hex-color strings and more.
  // note that setting the background also clears the canvas from our previous round of drawing
  background('white')

  // set up typography & drawing-color
  textFont("Anonymous Pro") // ← check index.html to see how it was loaded from google-fonts
  textSize(42) // make it big
  fill(100, 50, 50)

  // draw the time string to the canvas
  text(now.text.date, 30, 50)
  text(now.text.time, 30, 100)

  //second
  noFill();
  stroke(4);
  arc(50, 200, 60, 60, -PI/2,0);
  arc(150, 200, 60, 60, 0,HALF_PI);
  arc(250, 200, 60, 60, HALF_PI, PI);
  arc(350, 200, 60, 60, PI, PI+HALF_PI);
  arc(50, 260, 60, 60, startA,startB);
  if(now.sec/5==0){
    startA=startA+PI/2;
    startB=startB+PI/2;
  }
  //minute
  //hour
}
