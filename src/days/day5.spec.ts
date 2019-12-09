import { part1, part2 } from "./day5";

describe("part1", function() {
  it("should have only zeroes except the last one", function() {
    const result = part1("src/data/input5.txt");
    expect(result.outputs.length).toEqual(10);
    expect(result.outputs.filter(e => e > 0).length).toEqual(1);
    expect(result.outputs[result.outputs.length - 1]).toEqual(8332629);
  });
});

describe("part2", function() {
  it("should check input equals 8", function() {
    const result = part2("src/data/input5-2-1.txt", 8);
    expect(result.outputs.length).toEqual(1);
    expect(result.outputs[0]).toEqual(1);
  });

  it("should check input different from 8", function() {
    const result = part2("src/data/input5-2-1.txt", 9);
    expect(result.outputs.length).toEqual(1);
    expect(result.outputs[0]).toEqual(0);
  });

  it("should work on real data", function() {
    const result = part2("src/data/input5-part2.txt", 5);
    expect(result.outputs.length).toEqual(1);
    expect(result.outputs[0]).toEqual(8805067);
  });
});
