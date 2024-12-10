import { readFile } from '../utils.ts'

const lines = await readFile('./test_input.txt');

const left: number[] = [];
const right: number[] = [];

for (const line of lines) {
  const [l, r] = line.split('   ').map(Number);
  left.push(l);
  right.push(r);
}

console.log(left, right);
