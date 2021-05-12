#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const glob = require('glob').sync
const getPixels = require('get-pixels')
const getRgbaPalette = require('get-rgba-palette')
const chroma = require('chroma-js')

var NUM_COLORS = 1 // the number of colors per image you want to isolate
var OUTPUT_JSON = "image-colors.json" // the file to save the color lists to
var IMAGE_FOLDER = "onecolor" // the name of the folder to scan images in
var FILE_EXTENSIONS = ['jpg','png','gif'] // only scan files if they end with one of these

var imagePalettes = []
var imageFiles = glob(`${path.join(__dirname, IMAGE_FOLDER)}/*.{${FILE_EXTENSIONS.join(',')}}`, {nocase:true})
imageFiles.forEach(filename => {
  getPixels(filename, (err, pixels) => {
    console.log(filename)
    if (err) return console.error(err)
    let palette = getRgbaPalette(pixels.data, NUM_COLORS),
        hexColors = palette.map(rgba => chroma(rgba).hex())
    console.log(hexColors.join("/"))
    imagePalettes.push({image:path.basename(filename), colors:hexColors})

    // once we've decoded all the palettes, write the results out to a json file
    if (imagePalettes.length==imageFiles.length){
      var payload = JSON.stringify(imagePalettes, null, "  ")
      fs.writeFileSync(path.join(__dirname, OUTPUT_JSON), payload)
    }
  })
})
