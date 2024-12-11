import { readFile } from "../../utils.ts";

const lines = await readFile("../data/input.txt");
let reportsSafe = lines.length;

lines.forEach((line) => {
  const numbers = line.split(" ").map(Number);

  if (
    (!isAscending(numbers) && !isDescending(numbers)) ||
    !isValidLevelAdjacentDifference(numbers)
  ) {
    let canBeMadeSafe = false;

    for (let i = 0; i < numbers.length; i++) {
      const modifiedArray = numbers.slice(0, i).concat(numbers.slice(i + 1));

      if (
        (isAscending(modifiedArray) || isDescending(modifiedArray)) &&
        isValidLevelAdjacentDifference(modifiedArray)
      ) {
        canBeMadeSafe = true;
        break;
      }
    }

    if (!canBeMadeSafe) reportsSafe--;
  }
});

console.log(reportsSafe);

// Helpers

function isAscending(array: Array<number>): boolean {
  return array.every((x, i) => i === 0 || x >= array[i - 1]);
}

function isDescending(array: Array<number>): boolean {
  return array.every((x, i) => i === 0 || x <= array[i - 1]);
}

function isValidLevelAdjacentDifference(array: Array<number>): boolean {
  return array.every((x, i) => {
    if (i === 0) return true;
    const difference = Math.abs(x - array[i - 1]);
    return difference >= 1 && difference <= 3;
  });
}
