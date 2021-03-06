
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
  background(230,67,84)

  //draw the month progress
  fill(255);
  noStroke();
  var monthProgress=map(now.progress.month,0,1,0,400)
  rect(0,0,400,400-monthProgress)

  //season change
  var x=100;
  var y=100;
  var seasonWidth=10;
  var seasonHeight=80;
  var spacing=40;
  var a=color(190,195,249);
  var b=color(80,143,90);
  var c=color(255,220,34);
  var d=color(57,65,13);
  var springColor=lerpColor(a,b,now.progress.season);
  var summerColor=lerpColor(b,c,now.progress.season);
  var fallColor=lerpColor(c,d,now.progress.season);
  var winterColor=lerpColor(d,a,now.progress.season);

  // for (i=0;i<now.season+1;i++){
  //   if(i<2){
  //     fill(a)
  //     rect(width/2-10/2,y,seasonWidth,seasonHeight);
  //   }
  //   else if(i<3){
  //     fill(a)
  //     rect(width/2-10/2,y,seasonWidth,seasonHeight);
  //     fill(b)
  //     rect(x+seasonHeight+spacing,height/2-10/2,seasonHeight,seasonWidth);
  //   }
  //   else if(i<4){
  //     fill(a)
  //     rect(width/2-10/2,y,seasonWidth,seasonHeight);
  //     fill(b)
  //     rect(width/2-10/2,y+seasonHeight+spacing,seasonWidth,seasonHeight);
  //     fill(c)
  //     rect(x+seasonHeight+spacing,height/2-10/2,seasonHeight,seasonWidth);
  //   }
  //   else if(i<5){
  //}}
  for (i=0;i<now.season;i++){
    if(i<1){
      fill(springColor)
      rect(width/2-10/2,y,seasonWidth,seasonHeight);
      rect(width/2-10/2,y+seasonHeight+spacing,seasonWidth,seasonHeight);
      rect(x,height/2-10/2,seasonHeight,seasonWidth);
      rect(x+seasonHeight+spacing,height/2-10/2,seasonHeight,seasonWidth);
    }
    else if(i<2){
      fill(summerColor)
      rect(width/2-10/2,y,seasonWidth,seasonHeight);
      rect(width/2-10/2,y+seasonHeight+spacing,seasonWidth,seasonHeight);
      rect(x,height/2-10/2,seasonHeight,seasonWidth);
      rect(x+seasonHeight+spacing,height/2-10/2,seasonHeight,seasonWidth);
    }
    else if(i<3){
      fill(fallColor)
      rect(width/2-10/2,y,seasonWidth,seasonHeight);
      rect(width/2-10/2,y+seasonHeight+spacing,seasonWidth,seasonHeight);
      rect(x,height/2-10/2,seasonHeight,seasonWidth);
      rect(x+seasonHeight+spacing,height/2-10/2,seasonHeight,seasonWidth);
    }
    else if(i<4){
      fill(winterColor)
      rect(width/2-10/2,y,seasonWidth,seasonHeight);
      rect(width/2-10/2,y+seasonHeight+spacing,seasonWidth,seasonHeight);
      rect(x,height/2-10/2,seasonHeight,seasonWidth);
      rect(x+seasonHeight+spacing,height/2-10/2,seasonHeight,seasonWidth);
    }
      }
  // set up typography & drawing-color
  textFont("Anonymous Pro") // ← check index.html to see how it was loaded from google-fonts
  textSize(42) // make it big
  fill(230,231,124)
  // draw the time string to the canvas
  text(now.text.date, 30, 50)
  text(now.text.time, 30, 100)


}
