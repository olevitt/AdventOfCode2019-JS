import { EOL } from "os";
import { readFile } from "../common/readFile";

const fillData = (
  line: String,
  data: Map<String, Number>,
  indicator: number
) => {
  var x = 0;
  var y = 0;
  return line.split(",").reduce((acc, value) => {
    const way = value[0];
    const howMuch = Number(value.substring(1));
    for (var i = 0; i < howMuch; i++) {
      if (way === "R") x += 1;
      if (way === "D") y += 1;
      if (way === "U") y -= 1;
      if (way === "L") x -= 1;

      const key = String(x) + "/" + String(y);
      acc.set(key, acc.has(key) && acc.get(key) !== indicator ? -1 : indicator);
    }

    return acc;
  }, data);
};

const distance = (x: number, y: number) => Math.abs(x) + Math.abs(y);

export const part1 = (input: string) => {
  const input1 = readFile(input);
  var data = new Map<String, Number>();
  const lignes = input1.split(EOL);
  const data1 = fillData(lignes[0], data, 1);
  const data2 = fillData(lignes[1], data1, 2);

  var min = 99999999;
  data2.forEach((v, k) => {
    if (v === -1) {
      min = Math.min(
        distance(Number(k.split("/")[0]), Number(k.split("/")[1])),
        min
      );
    }
  });
  return min;
};

export const part2 = (input: string) => {
  const input1 = readFile(input);
  return part1(input);
};
