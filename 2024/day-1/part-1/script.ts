import { readFile } from "../../utils.ts";

const lines = await readFile("../data/input.txt");

const left: number[] = [];
const right: number[] = [];
let sum: number = 0;

for (const line of lines) {
  const [l, r] = line.split("   ").map(Number);
  left.push(l);
  right.push(r);
}

left.sort((a, b) => a - b);
right.sort((a, b) => a - b);

left.forEach((number, index) => {
  sum += right[index] > number ? right[index] - number : number - right[index];
});