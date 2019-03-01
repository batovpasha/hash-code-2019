'use strict';

const _ = require('lodash');

const verticalGrouping = (arrayOfImages) => {
  arrayOfImages.forEach(image => image.visited = false);
  let resultingArray = [];
  for (let i = 0; i < arrayOfImages.length; i++) {
    let imageWithMaxTagsLength = { tags: [] };
    for (let j = i + 1; j < arrayOfImages.length; j++) {
      const tagsUnion = _.union(arrayOfImages[i].tags, arrayOfImages[j].tags);
      if (tagsUnion.length > imageWithMaxTagsLength.tags.length && 
          !arrayOfImages[j].visited &&
          !arrayOfImages[j].visited) {
        imageWithMaxTagsLength.tags = tagsUnion;
        imageWithMaxTagsLength.index = `${arrayOfImages[i].index} ${arrayOfImages[j].index}`;
        arrayOfImages[j].visited = true;
      }
    }
    if (!imageWithMaxTagsLength.tags.length) continue;
    resultingArray.push(imageWithMaxTagsLength);
  }
  return resultingArray;
};

module.exports = {
  verticalGrouping
};
