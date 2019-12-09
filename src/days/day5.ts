import { readFile } from "../common/readFile";
import runProgram from "../intcode/runner";
import Context from "../intcode/context";

export const part1 = (fileName: string): Context => {
  const input = readFile(fileName);
  const data = input.split(",").map(e => Number(e));
  const postProgram = runProgram(data, undefined, undefined, 1);
  return postProgram;
};

export const part2 = (fileName: string, progInput: number = 1): Context => {
  const input = readFile(fileName);
  const data = input.split(",").map(e => Number(e));
  const postProgram = runProgram(data, undefined, undefined, progInput);
  return postProgram;
};
