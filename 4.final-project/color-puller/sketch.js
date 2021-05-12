var imageColors

function preload(){
  imageColors = loadJSON('image-colors.json', [])
}

function setup(){
  createCanvas(1200, 9000, SVG)
  textSize(16)

  var x = 40
  var y = 60
  for (var i in imageColors){
    // grab the next image/colors pair from the json file and unpack them into variables
    var info = imageColors[i]
    var name = info['image']
    var colors = info['colors']

    // print out the image file name
    text(name, x, y)

    // slide over to the right of the name to draw swatches
    push()
    translate(160, y-12)
    for (var c=0; c<colors.length; c++){
      // draw one 16x16 swatch per color then slide over by 20px
      fill(colors[c])
      rect(0,0, 16,16)
      translate(20,0)
    }
    pop()

    // move down a bit for the next row
    y += 20
  }

  save('image-colors.svg')
}
