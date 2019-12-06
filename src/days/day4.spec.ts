import { part1, part2 } from './day4'

describe('part1', function () {
  it('should work on real data', function () {
    expect(part1('src/data/input4.txt')).toEqual(1665);
  });

});

describe('part2', function () {
  it('should work on real data', function () {
    expect(part2('src/data/input4.txt')).toEqual(1131);
  });
});