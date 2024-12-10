import { readFile } from '../utils.ts'

const lines = await readFile('./test_input.txt');

const left: number[] = [];
const right: number[] = [];
let sum = 0;

for (const line of lines) {
  const [l, r] = line.split('   ').map(Number);
  left.push(l);
  right.push(r);
}

left.sort((a, b) => a - b);
right.sort((a, b) => a - b);

left.forEach((number, index) => {
  console.log(right[index] - number)
  sum += right[index] - number;
});

console.log(sum);