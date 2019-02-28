'use strict';

function deltaAndInterest(firstSl, secondSl) {
    const tagsOfFirstSl = firstSl.tags;
    const tagsOfSecondSl = secondSl.tags;

    let diffFirstSl = 0;
    let diffSecondSl = 0;
    let intersec = 0;

    tagsOfFirstSl.forEach(element => tagsOfSecondSl.includes(element) ? intersec++ : diffFirstSl++);
    
    tagsOfSecondSl.forEach(element => { 
        if(tagsOfFirstSl.includes(element)) 
            diffSecondSl++
    });

    const interest = Math.min(diffFirstSl, intersec, diffSecondSl);
    const delta = Math.max(diffFirstSl, intersec, diffSecondSl) - interest;

    return {delta, interest};
}

module.exports = deltaAndInterest;