var now = clock()

var x=50;
var y=130;
var r=20;
var spacing=30;
var monthLength=7;

function setup() {
  // set the width & height of the sketch
  createCanvas(400, 400)

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())

}

function draw() {
  // check the clock for the current time and unpack some of its fields to generate a time-string

  // set the background to 'white' – you can also specify colors use integers, hex-color strings and more.
  // note that setting the background also clears the canvas from our previous round of drawing
  background(230)

  // set up typography & drawing-color
  textFont("Anonymous Pro") // ← check index.html to see how it was loaded from google-fonts
  textSize(42) // make it big
  fill(100, 50, 50)

  // draw the time string to the canvas
  text(now.text.date, 30, 50)
  text(now.text.time, 30, 100)

  let jan=color(38,45,76);
  let feb=color(123,168,198);
  let mar=color(224,224,146);
  let apr=color(237,171,189);
  let may=color(239,167,112);
  let jun=color(95,193,242);
  let jul=color(173,234,92);
  let aug=color(244,212,55);
  let sep=color(244,103,33);
  let oct=color(188,94,53);
  let nov=color(160,186,54);
  let dec=color(57,91,60);

  let colorArray=[jan,feb,mar,apr,may,jun,jul,aug,sep,oct,nov,dec];
  let decToJan=lerpColor(colorArray[11],
                              colorArray[0],now.progress.month)
  let monthFillColor=lerpColor(colorArray[now.month-1],
                              colorArray[now.month],now.progress.month)
//find a way to get around the color with Jan/Dec
    for (a=0;a<8;a++){
      for(b=0;b<6;b++){
        /*if(a+b*monthLength<31){
            noFill();
            stroke(150);
            strokeWeight(1);
            rect(x+a*spacing,y+b*spacing,r,r);
          }*/
        if(a+b*monthLength<now.day){
          if(now.month<12){
          stroke(monthFillColor);
          fill(monthFillColor);
          rect(x+a*spacing,y+b*spacing,r,r);
          }
          else if(now.month=12){
            stroke(decToJan);
            fill(decToJan);
            rect(x+a*spacing,y+b*spacing,r,r);
          }
        }
      }
    }

    for (i=0;i<13;i++){
      noStroke();
      fill(colorArray[i]);
      rect(20+i*spacing,300,r,r);
    }

}
