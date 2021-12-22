'use strict';

const { expect } = require('chai');

const puzzleInput = require('./input');

const { partOne, partTwo } = require('./index');

describe('Day 20: Trench Map', () => {
  /** @type {{ image: Array<Array<'#'|'.'>>, imageEnhancementAlgorithm: Array<'#'|'.'> }} */
  const testInput = {
    image: [
      ['#', '.', '.', '#', '.'],
      ['#', '.', '.', '.', '.'],
      ['#', '#', '.', '.', '#'],
      ['.', '.', '#', '.', '.'],
      ['.', '.', '#', '#', '#'],
    ],
    // @ts-expect-error
    imageEnhancementAlgorithm:
      '..#.#..#####.#.#.#.###.##.....###.##.#..###.####..#####..#....#..#..##..###..######.###...####..#..#####..##..#.#####...##.#.#..#.##..#.#......#.###.######.###.####...#.##.##..#..#..#####.....#.#....###..#.##......#.....#..#..#..##..#...##.######.####.####.#.#...#.......#..#.#.#...####.##.#......#..#...##.#.##..#...##.#.##..###.#......#.#.......#.#.#.####.###.##...#.....####.#..#..#.##.#....##..#.####....##...##..#...#......#.#.......#.......##..####..#...#.#.#...##..#.#..###..#####........#..####......#..#'.split(
        ''
      ),
  };

  describe('Part 1', () => {
    it('should return input', () => {
      expect(partOne(testInput)).to.equal(35);

      console.log(partOne(puzzleInput));
    });
  });

  describe('Part 2', () => {
    it('should return input', () => {
      expect(partTwo(testInput)).to.equal(3351);

      console.log(partTwo(puzzleInput));
    });
  });
});