function setup() {
    // set the width & height of the sketch
  createCanvas(400, 600)

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())
}

function draw() {
  angleMode(DEGREES);
  var now = clock()

  // set the background to 'white' – you can also specify colors use integers, hex-color strings and more.
  // note that setting the background also clears the canvas from our previous round of drawing
  background(230)

  // set up typography & drawing-color
  /*textFont("Anonymous Pro") // ← check index.html to see how it was loaded from google-fonts
  textSize(42) // make it big
  fill(100, 50, 50)

  // draw the time string to the canvas
  text(now.text.date, 30, 50)
  text(now.text.time, 30, 100)*/

  //minute
  noFill();
  var a; var b;
  var secWidth=10; var secLength=6;
  var n=a+b*secWidth;
  var x1=100; var y1=250;
  var spacing=20;
  var secR=20;
  strokeWeight(2);
  var degreePerInterval=90;
  var rotation=-90;
  var startAngle=-90; var endAngle=0;

  var rotateStartAngle= rotation+90*now.min
  var rotateEndAngle = rotateStartAngle + 90;

  for(a=0;a<secWidth;a++){
    for(b=0;b<secLength;b++){
      if(a+b*secWidth<now.min){
        //draw the arc in 100%
        stroke(143,188,143);
        _.times(now.min,i=>{
          arc(x1+a*spacing,y1+b*spacing,secR,secR,rotateStartAngle,rotateEndAngle);
        })
      }
      else{
        stroke(150,175,140,60);
        arc(x1+a*spacing,y1+b*spacing,secR,secR,startAngle,endAngle);
      }
    }
  }

  //second
  noFill();
  var a; var b;
  var secWidth=10; var secLength=6;
  var n=a+b*secWidth;
  var x1=100; var y1=130;
  var spacing=20;
  var secR=20;
  strokeWeight(2);
  var degreePerInterval=90;
  var rotation=-90;
  var startAngle=-90; var endAngle=0;

  var rotateStartAngle= rotation+90*now.sec
  var rotateEndAngle = rotateStartAngle + 90;

  for(a=0;a<secWidth;a++){
    for(b=0;b<secLength;b++){
      if(a+b*secWidth<now.sec){
        //draw the arc in 100%
        stroke(219,112,147);
        _.times(now.sec,i=>{
          arc(x1+a*spacing,y1+b*spacing,secR,secR,rotateStartAngle,rotateEndAngle);
        })
      }
      else{
        stroke(200,50,140,60);
        arc(x1+a*spacing,y1+b*spacing,secR,secR,startAngle,endAngle);
      }
    }
  }
  //hour
  noFill();
  var a; var b;
  var secWidth=6; var secLength=4;
  var n=a+b*secWidth;
  var x1=100; var y1=370;
  var spacing=35;
  var secR=20;
  strokeWeight(2);
  var degreePerInterval=90;
  var rotation=-90;
  var startAngle=-90; var endAngle=0;

  var rotateStartAngle= rotation+90*now.hours
  var rotateEndAngle = rotateStartAngle + 90;

  for(a=0;a<secWidth;a++){
    for(b=0;b<secLength;b++){
      if(a+b*secWidth<now.hours){
        //draw the arc in 100%
        stroke(50,180,200);
        _.times(now.hours,i=>{
          arc(x1+a*spacing,y1+b*spacing,secR,secR,rotateStartAngle,rotateEndAngle);
        })
      }
      else{
        stroke(50,180,200,60);
        arc(x1+a*spacing,y1+b*spacing,secR,secR,startAngle,endAngle);
      }
    }
  }
}
