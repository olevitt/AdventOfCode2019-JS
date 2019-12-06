import { part1, part2 } from "./day6";

describe("part1", function() {
  it("should work on test data", function() {
    expect(part1("src/data/input6-ex1.txt")).toEqual(42);
  });
  it("should work on real data", function() {
    expect(part1("src/data/input6.txt")).toEqual(135690);
  });
});

describe("part2", function() {
  it("should work on real data", function() {
    expect(part2("src/data/input6-ex2.txt")).toEqual(4);
  });
  it("should work on real data", function() {
    expect(part2("src/data/input6.txt")).toEqual(298);
  });
});
