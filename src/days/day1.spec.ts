import { part1, part2 } from './day1'

describe('part1', function () {
  it('should calculate total fuel required', function () {
    expect(part1('src/data/input1.txt')).toEqual(3348909);
  });
});

describe('part2', function () {
  it('should calculate total fuel required including additional fuel', function () {
    expect(part2('src/data/input1.txt')).toEqual(5020494);
  });

});