  var now=clock();
  var spacing=8;

  function setup() {
  // set the width & height of the sketch
  createCanvas(500, 500)

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())
  background(240,238,234);
    //var b=now.sec;
  //fill(20);
    //for (var i=0;i<b;i++){
    //ellipse(random(10,390),random(10,390),10,10);
    //}
}

function draw() {
  angleMode(DEGREES);
  noStroke();
  //second
  // var numbers=_.range(now.min);
  // numbers.forEach(i=>{
  //   circle(random(0,400),random(0,400),20);
  // })
  fill(120,140,209);
  for (i=0;i<now.sec;i++){
    if(i%2==0){
    circle(10,15+spacing*i,5);
    }
    else{
      circle(15+spacing*i,10,5);
    }
  }
  //minute
  fill(211,125,94);
  var y2 = map(now.min, 0,60,-90,270);
  arc(250, 250, 80, 80, -90, y2);

  //hour
  fill(218,197,165);
  for (var i=0;i<15*now.hours;i+=15){
    ellipse(cos(i-90)*50+250,sin(i-90)*50+250,10,10);
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
