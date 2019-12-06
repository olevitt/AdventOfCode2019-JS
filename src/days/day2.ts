import { readFile } from "../common/readFile";

export const part1 = (fileName: string): number => {
  const input = readFile(fileName);
  const data = input.split(",").map(e => Number(e));
  const postProgram = runProgram(data, 12, 2);
  return postProgram[0];
};

export const part2 = (fileName: string, target: number): Array<number> => {
  const input = readFile(fileName);
  const data = input.split(",").map(e => Number(e));
  for (var i = 0; i < 100; i++) {
    for (var j = 0; j < 100; j++) {
      if (runProgram(data, i, j)[0] === target) {
        return [i, j];
      }
    }
  }
  return [0, 0];
};

const runProgram = (
  input: Array<number>,
  noun: number,
  verb: number
): Array<number> => {
  const data = [...input];
  var position = 0;
  data[1] = noun;
  data[2] = verb;
  while (data[position] != 99) {
    const opCode = data[position];
    const input1 = data[data[position + 1]];
    const input2 = data[data[position + 2]];
    const newValue = opCode === 1 ? input1 + input2 : input1 * input2;
    data[data[position + 3]] = newValue;
    position += 4;
  }
  return data;
};
