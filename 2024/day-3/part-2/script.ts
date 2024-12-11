import { readFile } from "../../utils.ts";

const lines = await readFile("../data/input.txt");
let answer: number = 0;
let mulEnabled = true;

lines.forEach((line) => {
  while (line.includes("don't()") || line.includes("do()")) {
    const dontIndex = line.indexOf("don't()");
    const doIndex = line.indexOf("do()");

    if (dontIndex !== -1 && (dontIndex < doIndex || doIndex === -1)) {
      mulEnabled = false;
      line = line.slice(0, dontIndex) + line.slice(dontIndex + 7);
    }
    else if (doIndex !== -1 && (doIndex < dontIndex || dontIndex === -1)) {
      mulEnabled = true;
      line = line.slice(0, doIndex) + line.slice(doIndex + 4);
    }
  }

  const pattern = /mul\(\s*\d+(\.\d+)?\s*,\s*\d+(\.\d+)?\s*\)/g;
  const foundValidMultiplies: RegExpMatchArray | null = line.match(pattern);

  if (foundValidMultiplies) {
    const splitPattern = /mul\(\s*(\d+(\.\d+)?)\s*,\s*(\d+(\.\d+)?)\s*\)/;
    foundValidMultiplies.forEach((validMul) => {
      if (mulEnabled) {
        const test = validMul.match(splitPattern);
        answer += parseFloat(test[1]) * parseFloat(test[3]);
      }
    });
  }
});

console.log(answer);