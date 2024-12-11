/*
- The levels are either all increasing or all decreasing.
- Any two adjacent levels differ by at least one and at most three.
*/
/*
[ "7", "6", "4", "2", "1" ]
[ "1", "2", "7", "8", "9" ]
[ "9", "7", "6", "2", "1" ]
[ "1", "3", "2", "4", "5" ]
[ "8", "6", "4", "4", "1" ]
[ "1", "3", "6", "7", "9" ]
 */

import { readFile } from "../../utils.ts";

const lines = await readFile("./input.txt");
let reportsSafe = lines.length;

lines.forEach((line) => {
  const numbers = line.split(" ").map(Number);

  if (
    !isAscending(numbers) && !isDescending(numbers) ||
    !isValidLevelAdjacentDifference(numbers)
  ) {
    reportsSafe--;
  }
});

console.log(reportsSafe);

//Helpers

function isAscending(array: Array<number>): boolean {
  return array.every(function (x: number, i: number) {
    return i === 0 || x >= array[i - 1];
  });
}

function isDescending(array: Array<number>): boolean {
  return array.every(function (x: number, i: number) {
    return i === 0 || x <= array[i - 1];
  });
}

function isValidLevelAdjacentDifference(array: Array<number>): boolean {
  return array.every(function (x: number, i: number) {
    if (i === 0) return true;
    const difference = Math.abs(x - array[i - 1]);
    return difference >= 1 && difference <= 3;
  });
}
