import { readFile } from "../common/readFile";
import runProgram from "../intcode/runner";

export const part1 = (fileName: string): number => {
  const input = readFile(fileName);
  const data = input.split(",").map(e => Number(e));
  const postProgram = runProgram(data, 12, 2);
  return postProgram.data[0];
};

export const part2 = (fileName: string, target: number): Array<number> => {
  const input = readFile(fileName);
  const data = input.split(",").map(e => Number(e));
  for (var i = 0; i < 100; i++) {
    for (var j = 0; j < 100; j++) {
      if (runProgram(data, i, j).data[0] === target) {
        return [i, j];
      }
    }
  }
  return [0, 0];
};
