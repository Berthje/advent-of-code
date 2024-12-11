import { readFile } from "../../utils.ts";

const lines = await readFile("../data/input.txt");
let answer: number = 0;

lines.forEach((line) => {
  const pattern = /mul\(\s*\d+(\.\d+)?\s*,\s*\d+(\.\d+)?\s*\)/g;
  const foundValidMultiplies: RegExpMatchArray | null = line.match(pattern);

  if (foundValidMultiplies) {
    const splitPattern = /mul\(\s*(\d+(\.\d+)?)\s*,\s*(\d+(\.\d+)?)\s*\)/;
    foundValidMultiplies.forEach(validMul => {
        const test = validMul.match(splitPattern);
        answer += test[1] * test[3];
    })
  }
});

console.log(answer)