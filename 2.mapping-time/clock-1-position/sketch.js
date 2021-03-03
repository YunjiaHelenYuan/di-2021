
function setup() {
  // set the width & height of the sketch
  createCanvas(300, 300)

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())

}

function draw() {
  var now = clock()
  background(230);
  angleMode(DEGREES);
  //second
  var a=color(243,136,75);
  var b=color(156,83,229);
  let secondColor=lerpColor(a,b,now.progress.min);
  fill(secondColor);
  noStroke();
  rect(0,0,300,300);
  //curve
  for(x=0;x<301;x++){
    let y3= map(x,0,300,0,360);
    fill(158,239,56);
    ellipse(x,cos(y3)*50+150,1,1);
    let y4= map(x,0,300,180,540);
    fill(56,118,239);
    ellipse(x,cos(y4)*50+150,1,1);
  }
  //hour
  line(0,150,300,150);
  //hour circle
  strokeWeight(0);
  let x1=map(now.hours,0,24,0,width);
  let y1= map(now.hours,0,24,0,360);
  fill(158,239,56);
  ellipse(x1,cos(y1)*50+150,10,10);
  //minute
  line(150,0,150,300);
  //minute circle
  strokeWeight(0);
  let x2=map(now.min,0,60,0,width);
  let y2= map(now.min,0,60,180,540);
  fill(56,118,239);
  ellipse(x2,cos(y2)*50+150,10,10);
  // check the clock for the current time and unpack some of its fields to generate a time-string

  // set the background to 'white' – you can also specify colors use integers, hex-color strings and more.
  // note that setting the background also clears the canvas from our previous round of drawing

  // set up typography & drawing-color
  /*noStroke();
  textFont("Anonymous Pro") // ← check index.html to see how it was loaded from google-fonts
  textSize(42) // make it big
  fill(100, 50, 50)

  // draw the time string to the canvas
  text(now.text.date, 30, 50)
  text(now.text.time, 30, 100)*/

}
