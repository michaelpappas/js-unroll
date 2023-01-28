"use strict";

/** */
function unroll(squareArray) {
  let final = [];
  const height = squareArray.length;
  const width = squareArray[0].length;
  let totalItems = height * width;
  let xAxis = 0;
  let yAxis = 0;
  let offset = 0;
  let coords = [0, 0];

  if (height <= 1) {
    return squareArray;
  }

  function travRight() {
    if (totalItems) {
      for (let i = 0; i < width - offset - 1; i++) {
        final.push(squareArray[coords[1]][i]);
        totalItems--;
        coords[0]++;
      }
    }

  }



  function travLeft() {
    if (totalItems) {
      for (let i = width - 1; i >= 0 + offset; i--) {
        console.log("tl", [coords[1] - 1], [i]);
        final.push(squareArray[coords[1] - 1][i]);
        totalItems--;
        coords[0]--;
      }
    }


  };

  function travDown() { //[0,0]
    if (totalItems) {
      for (let i = 0 + offset; i < height - offset; i++) {
        console.log("td", [i, coords[0] - 1]);
        final.push(squareArray[i][coords[0] - 1]);
        totalItems--;
        coords[1]++;
      }
    }

  }

  function travUp() { //[0,0]
    if (totalItems) {
      for (let i = height - 1; i > 0 + offset; i--) {
        console.log("td", [i, coords[0]]);
        final.push(squareArray[i][coords[0]]);
        totalItems--;
        coords[1]--;
      }
    }


  };



  function traverseFuncs() {
    console.log("start totalItems", totalItems);
    travRight();
    travDown();
    travLeft();
    console.log("afterTD", coords);
    travUp();
    offset++;
    console.log("in progress", final);
    console.log("totalItems", totalItems);
  }


  do {
    traverseFuncs();
  }
  while (totalItems - 1);

  return final;
}






const square = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const results = [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];
unroll(square);
module.exports = unroll;

//traverse left across array
//traverse down right side of array
//traverse right across bottom of array
//traverse up left side of array until the first row
//repeat