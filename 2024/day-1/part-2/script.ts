import { readFile } from "../../utils.ts";

const lines = await readFile("./input.txt");

const left: number[] = [];
const right: number[] = [];
let sum: number = 0;

for (const line of lines) {
  const [l, r] = line.split("   ").map(Number);
  left.push(l);
  right.push(r);
}

left.forEach(number => {
    const occurence = right.filter((x) => x == number).length;
    sum += (number * occurence)
});

console.log(sum);