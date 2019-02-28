'use strict';
const fs = require('fs');

function output(slides_array){
  let data = slides_array.length + '\n';

  slides_array.forEach(item => {
    data += (item.index + '\n');
  })

  let o_file  = fs.writeFileSync('result.txt', data);
}

module.exports = output;
