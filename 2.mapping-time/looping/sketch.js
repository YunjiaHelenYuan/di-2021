
function setup() {
  // set the width & height of the sketch
  createCanvas(400, 500)

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

  var now = clock()
  var spacing = 30

  // draw as many circles as the current `now.hours` value
  // using _.times. The first circle's y position should be at 100
  // and each circle below it should be `spacing` pixels below it
  noFill();
  strokeWeight(1);
  stroke(0);
  //fill(0)
  //circle(100, 100, 20)
  //let hourArray=[];
  _.times(now.hours, i =>{
    //hourArray.push(i);
    circle(100,250,20+i*spacing);
  })
  // hourArray.forEach(x=>{
  //   circle(100,100+x*spacing,20)
  // })
  // draw as many circles as the current now.min value
  // by creating a list from 0 .. `now.min` using _.range
  // and then stepping through that list using _.each or .forEach
  //fill(100)
  //circle(200, 100, 20)
  stroke(150);
  var numbers=_.range(now.min);
  numbers.forEach(i=>{
  circle(200,250,20+i*spacing/2)
  })


  // draw as many circles as the current `now.sec` value
  // using `for (;;){...}` syntax
  //fill(200)
  //circle(300, 100, 20)
  stroke(200);
  for(i=0;i<now.sec;i++){
    circle(300,250,20+i*spacing/5);
  }


  // Phase 2:
  // Once you've successfully drawn vertical stacks of dots, modify
  // your loops to draw concentric circles whose diameters are
  // multiples of the `spacing` variable. Switch from using fill()
  // colors to stroke() colors so we can see all the nested circles

}
