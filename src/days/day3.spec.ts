import { part1, part2 } from "./day3";

describe("part1", function() {
  it("should work on test data 1", () => {
    expect(part1("src/data/input3-ex1.txt")).toEqual(159);
  });
  it("should work on test data 2", () => {
    expect(part1("src/data/input3-ex2.txt")).toEqual(135);
  });
  it("should work on real data", function() {
    expect(part1("src/data/input3.txt")).toEqual(375);
  });
});

describe("part2", function() {
  it("should work on test data 1", () => {
    expect(part2("src/data/input3-ex1.txt")).toEqual(610);
  });
  it("should work on test data 2", () => {
    expect(part2("src/data/input3-ex2.txt")).toEqual(410);
  });
  it("should work on real data", function() {
    expect(part2("src/data/input3.txt")).toEqual(14746);
  });
});
