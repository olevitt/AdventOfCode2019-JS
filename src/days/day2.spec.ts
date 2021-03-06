import { part1, part2 } from "./day2";

describe("day1", function() {
  it("should return value at position 0", function() {
    expect(part1("src/data/input2.txt")).toEqual(3850704);
  });
});

describe("day2", function() {
  it("should find optimal noun / verb", function() {
    expect(part2("src/data/input2.txt", 19690720)).toEqual([67, 18]);
    // Real answer : 67 * 100 + 18 = 6718
  });
});
