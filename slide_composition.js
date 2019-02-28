'use strict';

function slide_composition(slides_array){
  let result = [].push(slides_array.pop());

  while(slides_array.length != 0){
    let best_index = 0;
    let best_slide = delta(result[result.length - 1], slides_array[0]);

    for (let i = 0; i < slides_array.length; i++){
      let curr_slide = delta(result[result.length - 1], slides_array[i]);

      if (curr_slide.delta < best_slide.delta) {
        best_slide = curr_slide;
        best_index = i;

      } else if (curr_slide.delta === best_slide.delta && curr_slide.interes > best_slide.interes) {
        best_slide = curr_slide;
        best_index = i;
      }
    }
    result.push(best_slide);
    slides_array.splice(best_index, 1);
  }
}

module.exports = slide_composition;
