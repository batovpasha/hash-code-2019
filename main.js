'use strict';
const parse = require('./parse.js');
const VG = require('./verticalGrouping.js');
const slideComposing = require('./slide_composition.js');
const output = require('./output.js');

let data = parse.parseFile('d_pet_pictures.txt');
let arrayOfVerticalImages = VG.verticalGrouping(data.V);
let arrayOfHorizontalImages = data.H;
let allSlides = arrayOfVerticalImages.concat(arrayOfHorizontalImages);
let result = slideComposing(allSlides);
output(result);
