
function setup() {
  // set the width & height of the sketch
  createCanvas(500, 500)

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())

}

function draw() {
  // check the clock for the current time and unpack some of its fields to generate a time-string
  var now = clock()

  // set the background to 'white' – you can also specify colors use integers, hex-color strings and more.
  // note that setting the background also clears the canvas from our previous round of drawing
  //background('white')
  //month bg colors
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

  let colorArray=[jan,feb,mar,apr,may,jun,jul,aug,sep,oct,nov,dec,jan];
  let monthFillColor=lerpColor(colorArray[now.month-1],
                              colorArray[now.month],now.progress.month)
  background(monthFillColor);
  // set up typography & drawing-color
  textFont("Anonymous Pro") // ← check index.html to see how it was loaded from google-fonts
  textSize(42) // make it big
  fill(100, 50, 50)

  // draw the time string to the canvas
  text(now.text.date, 30, 50)
  text(now.text.time, 30, 100)

  angleMode(DEGREES);
  noStroke();

  //second
  var secCircle=[];
  var spacing=31;
  fill(130,150,209);
  for (i=0;i<61;i++){
    if(i<15){
      circle(15,15+spacing*i,5);
    }
    else if(i<30){
      circle(15+spacing*(i-15),485,5);
    }
    else if(i<45){
      circle(485,485-spacing*(i-30),5);
    }
    else if(i<59){
      circle(485-spacing*(i-45),15,5);
    }
  }
  //bigger darker circle every sec
  fill(51,61,149);
  for (i=0;i<now.sec;i++){
    if(i<15){
      circle(15,15+spacing*i,5);
    }
    else if(i<30){
      circle(15+spacing*(i-15),485,5);
    }
    else if(i<45){
      circle(485,485-spacing*(i-30),5);
    }
    else if(i<60){
      circle(485-spacing*(i-45),15,5);
    }
  }

  //minute
  fill(211,125,94);
  var y2 = map(now.min, 0,60,-90,270);
  arc(250, 250, 80, 80, -90, y2);

  //hour
  fill(218,197,165);
  for (var i=0;i<15*now.hours;i+=15){
    ellipse(cos(i-90)*150+250,sin(i-90)*150+250,10,10);
  }
  //season
  /*when it's runing through the summer, the second rectangle's color won't change to
  summercolor and still using the spring color*/
  var x=120;
  var y=120;
  var seasonWidth=10;
  var seasonHeight=map(now.progress.season,0,1,20,60);
  var spacing=40;
  var a1=color(190,195,249);
  var b1=color(80,143,90);
  var c1=color(255,220,34);
  var d1=color(57,65,13);
  var springColor=lerpColor(a1,b1,now.progress.season);
  var summerColor=lerpColor(b1,c1,now.progress.season);
  var fallColor=lerpColor(c1,d1,now.progress.season);
  var winterColor=lerpColor(d1,a1,now.progress.season);
  for (i=0;i<now.season;i++){
    if(i<1){
      fill(springColor)
      rect(width/2-10/2,y,seasonWidth,seasonHeight);
      rect(width/2-10/2,500-y-seasonHeight,seasonWidth,seasonHeight);
      rect(x,height/2-10/2,seasonHeight,seasonWidth);
      rect(500-x-seasonHeight,height/2-10/2,seasonHeight,seasonWidth);
      fill(springColor)
      rect(x,height/2-10/2,seasonHeight,seasonWidth);
    }
    else if(i<2){
      fill(summerColor)
      rect(width/2-10/2,y,seasonWidth,seasonHeight);
      rect(width/2-10/2,500-y-seasonHeight,seasonWidth,seasonHeight);
      rect(x,seasonHeight,seasonWidth);
      rect(500-x-seasonHeight,height/2-10/2,seasonHeight,seasonWidth);
    }
    else if(i<3){
      fill(fallColor)
      rect(width/2-10/2,y,seasonWidth,seasonHeight);
      fill(fallColor)
      rect(width/2-10/2,500-y-seasonHeight,seasonWidth,seasonHeight);
      fill(fallColor)
      rect(x,height/2-10/2,seasonHeight,seasonWidth);
      fill(fallColor)
      rect(500-x-seasonHeight,height/2-10/2,seasonHeight,seasonWidth);
    }
    else if(i<4){
      fill(winterColor)
      rect(width/2-10/2,y,seasonWidth,seasonHeight);
      rect(width/2-10/2,500-y-seasonHeight,seasonWidth,seasonHeight);
      rect(x,height/2-10/2,seasonHeight,seasonWidth);
      rect(500-x-seasonHeight,height/2-10/2,seasonHeight,seasonWidth);
    }
      }

}
