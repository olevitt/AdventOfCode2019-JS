import { readFile } from "../common/readFile";
import runProgram from "../intcode/runner";
import Context from "../intcode/context";

export const part1 = (fileName: string): Context => {
  const input = readFile(fileName);
  const data = input.split(",").map(e => Number(e));
  const postProgram = runProgram(data, undefined, undefined, 1);
  return postProgram;
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
