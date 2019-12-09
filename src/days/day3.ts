import { EOL } from "os";
import { readFile } from "../common/readFile";

class DejaVu {
  by: number;
  distance: number;

  constructor(by: number, distance: number) {
    this.by = by;
    this.distance = distance;
  }
}

const fillData = (
  line: String,
  data: Map<String, Array<DejaVu>>,
  indicator: number
) => {
  var x = 0;
  var y = 0;
  var distance = 0;
  return line.split(",").reduce((acc, value) => {
    const way = value[0];
    const howMuch = Number(value.substring(1));
    for (var i = 0; i < howMuch; i++) {
      if (way === "R") x += 1;
      if (way === "D") y += 1;
      if (way === "U") y -= 1;
      if (way === "L") x -= 1;

      distance++;
      const key = String(x) + "/" + String(y);
      const dejaVu = new DejaVu(indicator, distance);
      if (!acc.has(key)) {
        acc.set(key, [dejaVu]);
      } else {
        if (acc.get(key).filter(e => e.by === indicator).length === 0) {
          acc.set(key, [...acc.get(key), dejaVu]);
        }
      }
    }

    return acc;
  }, data);
};

const distance = (x: number, y: number) => Math.abs(x) + Math.abs(y);

export const part1 = (input: string) => {
  const input1 = readFile(input);
  var data = new Map<String, Array<DejaVu>>();
  const lignes = input1.split(EOL);
  const data1 = fillData(lignes[0], data, 1);
  const data2 = fillData(lignes[1], data1, 2);

  var min = 99999999;
  data2.forEach((v, k) => {
    if (v.length === 2) {
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
  var data = new Map<String, Array<DejaVu>>();
  const lignes = input1.split(EOL);
  const data1 = fillData(lignes[0], data, 1);
  const data2 = fillData(lignes[1], data1, 2);
  var min = 99999999;
  data2.forEach((v, k) => {
    if (v.length === 2) {
      min = Math.min(
        v.reduce((acc, e) => (acc += e.distance), 0),
        min
      );
    }
  });
  return min;
};
