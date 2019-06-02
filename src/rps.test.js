import { resolveRound, ROCK, PAPER, SCISSORS, P1WIN, P2WIN, DRAW } from './rps';

test('rock beats scissors', () => {
  expect(resolveRound(ROCK, SCISSORS)).toBe(P1WIN);
});

test('rock loses to paper', () => {
  expect(resolveRound(ROCK, PAPER)).toBe(P2WIN);
});

test('paper beats rock', () => {
  expect(resolveRound(PAPER, ROCK)).toBe(P1WIN);
});

test('paper loses to scissors', () => {
  expect(resolveRound(PAPER, SCISSORS)).toBe(P2WIN);
});

test('scissors beat paper', () => {
  expect(resolveRound(SCISSORS, PAPER)).toBe(P1WIN);
});

test('scissors lose to rock', () => {
  expect(resolveRound(SCISSORS, ROCK)).toBe(P2WIN);
});

test('rock draws with rock', () => {
  expect(resolveRound(ROCK, ROCK)).toBe(DRAW);
});

test('paper draws with paper', () => {
  expect(resolveRound(PAPER, PAPER)).toBe(DRAW);
});

test('scissors draw with scissors', () => {
  expect(resolveRound(SCISSORS, SCISSORS)).toBe(DRAW);
});

test('nonsense throws an error', () => {
  expect(() => {
    resolveRound(null, 'badgers');
  }).toThrowError();
});