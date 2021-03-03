let arcunit1;
let arcunit2;
  var now = clock()
class Arcs{
  //object setup, data
  constructor(){
    this.x=200;
    this.y=200;
    this.r=300;
    this.startAngle=-90;
    this.endAngle=0;
    this.timeInterval = 5 // number of seconds before stepping to next angle
    this.currentInterval = floor(now.sec/this.timeInterval) // figure out which step the current time is on
    this.degreesPerInterval = 90
    this.rotation = - 90
  }
  //object function
  show(){
    stroke(30);
    strokeWeight(1);
    arc(this.x, this.y,this.r,this.r,this.startAngle,this.endAngle)
  }
  move(){
    this.x=this.x+random(-1,1);
    this.y=this.y+random(-1,1);
  }
  rotate(){
    this.startAngle= this.currentInterval * this.degreesPerInterval - this.rotation;
    this.endAngle = this.startAngle + this.degreesPerInterval;
  }
}
function setup() {
  angleMode(DEGREES);
  // set the width & height of the sketch
  createCanvas(400, 400)
  arcunit1=new Arcs();
  arcunit2=new Arcs();

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())
}

function draw() {

  // check the clock for the current time and unpack some of its fields to generate a time-string

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

  arcunit1.show();
  arcunit1.rotate();
  //second
  //minute
  //hour
}
