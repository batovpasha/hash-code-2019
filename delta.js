'use strict';

const _ = require('lodash');

function deltaAndInterest(firstSl, secondSl) {
    const tagsOfFirstSl = firstSl.tags;
    const tagsOfSecondSl = secondSl.tags;

    let diffFirstSl = _.difference(tagsOfFirstSl, tagsOfSecondSl).length;
    let diffSecondSl = _.difference(tagsOfSecondSl, tagsOfFirstSl).length;
    let intersec = _.intersection(tagsOfSecondSl, tagsOfFirstSl).length;

    // tagsOfFirstSl.forEach(element => tagsOfSecondSl.includes(element) ? intersec++ : diffFirstSl++);
    //
    // tagsOfSecondSl.forEach(element => {
    //     if(tagsOfFirstSl.includes(element))
    //         diffSecondSl++
    // });

    const interest = Math.min(diffFirstSl, intersec, diffSecondSl);
    const delta = Math.max(diffFirstSl, intersec, diffSecondSl) - interest;

    return {delta, interest};
}

module.exports = deltaAndInterest;
