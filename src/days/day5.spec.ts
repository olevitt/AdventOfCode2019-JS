import { part1, part2 } from "./day5";

describe("day1", function() {
  it("should have only zeroes except the last one", function() {
    const result = part1("src/data/input5.txt");
    expect(result.outputs.length).toEqual(10);
    expect(result.outputs.filter(e => e > 0).length).toEqual(1);
    expect(result.outputs[result.outputs.length - 1] !== 0).toBeTruthy();
  });
});

/*
describe("day2", function() {
  it("should find optimal noun / verb", function() {
    expect(part2("src/data/input5.txt", 19690720)).toEqual([67, 18]);
    // Real answer : 67 * 100 + 18 = 6718
  });
});
*/
