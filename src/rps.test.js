import { determineResult, ROCK, PAPER, SCISSORS, P1WIN, P2WIN, DRAW } from './rps';

test('rock beats scissors', () => {
  expect(determineResult(ROCK, SCISSORS)).toBe(P1WIN);
});

test('rock loses to paper', () => {
  expect(determineResult(ROCK, PAPER)).toBe(P2WIN);
});

test('paper beats rock', () => {
  expect(determineResult(PAPER, ROCK)).toBe(P1WIN);
});

test('paper loses to scissors', () => {
  expect(determineResult(PAPER, SCISSORS)).toBe(P2WIN);
});

test('scissors beat paper', () => {
  expect(determineResult(SCISSORS, PAPER)).toBe(P1WIN);
});

test('scissors lose to rock', () => {
  expect(determineResult(SCISSORS, ROCK)).toBe(P2WIN);
});

test('rock draws with rock', () => {
  expect(determineResult(ROCK, ROCK)).toBe(DRAW);
});

test('paper draws with paper', () => {
  expect(determineResult(PAPER, PAPER)).toBe(DRAW);
});

test('scissors draw with scissors', () => {
  expect(determineResult(SCISSORS, SCISSORS)).toBe(DRAW);
});

test('nonsense throws an error', () => {
  expect(() => {
    determineResult('badgers', 'mushroom');
  }).toThrowError();
});

test('null input produces null output', () => {
  expect(determineResult(null, SCISSORS)).toBe(null);
  expect(determineResult(PAPER, null)).toBe(null);
  expect(determineResult(null, null)).toBe(null);
});