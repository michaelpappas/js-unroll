// define 4 functions that traverse either left, right, up, down the array
// define a coords array of two values that will be updated with  the location throughout
//   the array as it is traversing that will be modified in the for loops to push into the final array
// define a function (traverseFuncs()) that will continue to call these 4 function  the same number
//    times as the total number of items in the starting array
// continue to do traverseFuncs while total pushed (total) is less than the total numebr if items in
//    starter array
// at the end of each traverseFuncs() and offset will be incremented which will be used in each
//    traverse function to offset from the edge of the square to move the traverse function away
//    from the outer edge.

"use strict";
/** */
function unroll(squareArray) {
  let final = [];

  if (!Array.isArray(squareArray)) {
    return "not valid";
  }

  const height = squareArray.length;
  const width = squareArray[0].length;

  if (height === 1) {
    return squareArray[0];
  }

  let totalItems = height * width;
  let offset = 0;
  const coords = [0, 0];




  function travRight() {
    console.log("totalItems TR-", totalItems);
    console.log("start TR coords", coords);
    for (let i = 0; i < width - offset - 1; i++) {
      if (totalItems < 1) {
        break;
      }
      console.log("tr", [coords[0] + offset], [i]);
      final.push(squareArray[coords[0] + offset][i]);
      totalItems--;
      coords[1]++;
    }
  }

  function travDown() {
    console.log("totalItems TD-", totalItems);
    console.log("start TD coords", coords);

    for (let i = 0 + offset; i < height - offset; i++) {
      if (totalItems < 1) {
        break;
      }
      console.log("td", [i, coords[1]]);
      final.push(squareArray[i][coords[1]]);
      totalItems--;
      coords[0]++;
    }
  }


  function travLeft() {
    console.log("totalItems TL-", totalItems);
    console.log("start TL coords", coords);

    for (let i = coords[1]; i >= 0; i--) {
      // console.log(i);
      if (totalItems < 1) {
        break;
      }
      console.log("tl", [coords[0]], [i]);
      final.push(squareArray[coords[0]][i]);
      totalItems--;
      coords[1]--;
    }
    coords[1]++;
  };




  function travUp() {
    console.log("totalItems TU-", totalItems);
    console.log("start TU coords", coords);
    coords[0]--;
    for (let i = height - 1; i > 0 + offset; i--) {
      if (totalItems < 1) {
        break;
      }
      console.log("td", [i, coords[0]]);
      final.push(squareArray[i][coords[0]]);
      totalItems--;
      coords[0]--;
    }
    coords[0]++;
  }

  function traverseFuncs() {


    console.log("length in traverseFuncs", squareArray.length);
    travRight();
    console.log("in progress after TR", final);
    travDown();
    coords[0]--;
    coords[1]--;
    console.log("in progress after TD", final);
    travLeft();
    console.log("in progres after TL", final);
    travUp();
    console.log("in progress after TU", final);
    offset++;
  }

  do {
    traverseFuncs();
  }
  while (totalItems);

  return final;
}







module.exports = unroll;

