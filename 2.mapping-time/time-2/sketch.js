  var now=clock();

  function setup() {
  // set the width & height of the sketch
  createCanvas(400, 400)

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())
  background(240);
  var b=now.sec;
  fill(20);
  for (var i=0;i<b;i++){
    ellipse(random(10,390),random(10,390),10,10);
  }
}

function draw() {
  angleMode(DEGREES);
  noStroke();
  //second
  //minute
  fill(110);
  var y2 = map(now.min, 0,60,-90,270);
  arc(200, 200, 80, 80, -90, y2);

  //hour
  var a=now.hours;
  // for(int i=0; i<361; i+=15){
  //   ellipse(cos(i)*50+200,sin(i)*50+200,10,10);
  // }
  // var degreeCircle=[0,15,30,45,60,75,90,105,120,135,150,175];
  for (var i=0;i<15*a;i+=15){
    ellipse(cos(i-90)*50+200,sin(i-90)*50+200,10,10);
  }


  // // check the clock for the current time and unpack some of its fields to generate a time-string
  // var now = clock()
  //
  // // set the background to 'white' – you can also specify colors use integers, hex-color strings and more.
  // // note that setting the background also clears the canvas from our previous round of drawing
  // background('white')
  //
  // // set up typography & drawing-color
  // textFont("Anonymous Pro") // ← check index.html to see how it was loaded from google-fonts
  // textSize(42) // make it big
  // fill(100, 50, 50)
  //
  // // draw the time string to the canvas
  // text(now.text.date, 30, 50)
  // text(now.text.time, 30, 100)

}
