
function setup() {
  // set the width & height of the sketch
  createCanvas(400, 400)

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())

}

function draw() {
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
//change the pattern color
  angleMode(DEGREES);
  var spacing=80;
  var r=50;
  var x=110+r/2;
  var y=110+r/2;
  noStroke();
  for(i=0;i<5;i++){
      if(now.season<2){
      fill(200);
      triangle(x-r/2,y+r/2,x+r/2,y+r/2,x,y+1.5*r);
      triangle(x-r/2+spacing,y+r/2,x+r/2+spacing,y+r/2,x+spacing,y+1.5*r);
      triangle(x-r/2,y+r/2+spacing,x+r/2,y+r/2+spacing,x,y+1.5*r+spacing);
      triangle(x-r/2+spacing,y+r/2+spacing,x+r/2+spacing,y+r/2+spacing,x+spacing,y+1.5*r+spacing);
      }
      else if (now.season<3){
      fill(230);
      ellipseMode(CORNER);
      rect(x,y,r,r);
      rect(x,y+spacing,r,r);
      rect(x+spacing,y,r,r);
      rect(x+spacing,y+spacing,r,r);
      }
      else if(now.season<4){
      fill(140);
      ellipseMode(CORNER);
      ellipse(x,y,r,r);
      ellipse(x,y+spacing,r,r);
      ellipse(x+spacing,y,r,r);
      ellipse(x+spacing,y+spacing,r,r);
      }
      else if(now.season<5){
      fill(5);
      triangle(x,y-r/2,x+r/2,y+r/2,x-r/2,y+r/2);
      triangle(x+spacing,y-r/2,x+r/2+spacing,y+r/2,x-r/2+spacing,y+r/2);
      triangle(x,y-r/2+spacing,x+r/2,y+r/2+spacing,x-r/2,y+r/2+spacing);
      triangle(x+spacing,y-r/2+spacing,x+r/2+spacing,y+r/2+spacing,x-r/2+spacing,y+r/2+spacing);
      }
  }

  //how to draw and keep previous lines
  var lineSpacing=10;
  var a=80;
  var b=290;
  for (i=0;i<now.day;i++){
    stroke(30);
    strokeWeight(2);
    var yEnd=map(now.moon,0,1,110,290)
    line(a+i*lineSpacing,b,a+i*lineSpacing,yEnd)
  }


}
