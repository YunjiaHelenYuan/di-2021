// Things to try:
//
// - draw the 'current' second in a different color/size
// - draw the first and last dots in each row differently
// -1 pick each dot's size by map'ing its cell/row/col number
// - use the pointAt function to draw the rows radially
// - draw each 'row' as a number of concentric circles
// - use lerpColor as a replacement for the grey fill color
// - use lerpColor for a gradient in each row of dots
// - 3 use lerpColor for a gradient that runs from cell 1–60
//

function setup() {
  createCanvas(600, 600)
}

function draw(){
  var now = clock()
  translate(100,100)
  background('white')
  noStroke()
  fill(0)


  // choose the spacing parameters for the grid
  var colSpacing = 30
  var rowSpacing = 45
  var cellRadius = 10


  // determine the layout of the grid
  var totalCells = 60
  var numColumns = 10
  var numRows = ceil(totalCells/numColumns)


  _.times(numRows, r => {

    _.times(numColumns, c => {
      var cellNumber = r*numColumns + c
      var x = c * colSpacing
      var y = r * rowSpacing

      //var grey = map(r, 0, numRows, 0, 255)
      //fill(grey)

      var cellNumberPosition= map(cellNumber,0,60,0,100);
      var colorPosition=map(cellNumberPosition,0,100,0,1);
      var colorstart = color('#DEDEDE');
      var colorend = color('#FF0000');
      let fillColor= lerpColor(colorstart,colorend,colorPosition);
      fill(fillColor);

      if (cellNumber < now.sec){
        circle(x, y, cellRadius)
      }else if (cellNumber < totalCells){
        circle(x, y, 4)
      }

    })

  })

}
