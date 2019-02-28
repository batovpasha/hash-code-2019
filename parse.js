'use strict';

const fs = require('fs');
const path = require('path');


exports.parseFile = filename => {
    const sourcePath = path.join(__dirname, filename);
    
    let H = []; // horizontal slides
    let V = []; // vertical slides
    
    let data  = fs.readFileSync(sourcePath);        
    const rawLines = data.toString().split('\n').slice(1,-1);

    for (let lineIndex in rawLines) {
        let line = rawLines[lineIndex].split(' ');
        
        if (line[0] === 'H') {
            H.push({
                index: `${lineIndex}`,
                tags: line.slice(2)
            });
        } else V.push({
            index: lineIndex,
            tags: line.slice(2)
        });
    }

    return { H, V };

};
