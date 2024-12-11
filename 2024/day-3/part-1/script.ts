import { readFile } from "../../utils.ts";

const lines = await readFile("../data/input.txt");
let answer: number = 0;

//xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))

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