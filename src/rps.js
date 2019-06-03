export const ROCK = '✊';
export const PAPER = '🖐️';
export const SCISSORS = '✌️';

export const P1WIN = 'Player 1 Wins';
export const P2WIN = 'Player 2 Wins';
export const DRAW = 'The game is tied';
export const IN_PROGRESS = 'Make your selection...';
export const NO_GAME = 'No game in progress';

/**
 * Returns the result of a round of rock, paper, scissors.
 * @param {string} p1
 * @param {string} p2
 * @returns A state of P1Wins, P2Wins, Draw or null if either input is null.
 */
export function determineResult(p1, p2) {
  if (p1 === null || p2 === null) {
    return null;
  }
  switch (p1) {
    case ROCK:
      return resolveRockVs(p2);
    case PAPER:
      return resolvePaperVs(p2);
    case SCISSORS:
      return resolveScissorsVs(p2);
    default:
      throw new Error('p1 must be ROCK, PAPER or SCISSORS.');
  }
}

/**
 * Returns the result of rock vs something else.
 * @param {string} p2
 */
function resolveRockVs(p2) {
  switch (p2) {
    case ROCK:
      return DRAW;
    case PAPER:
      return P2WIN;
    case SCISSORS:
      return P1WIN;
    default:
      throw new Error('p2 must be ROCK, PAPER or SCISSORS.');
  }
}

/**
 * Returns the result of paper vs something else.
 * @param {string} p2
 */
function resolvePaperVs(p2) {
  switch (p2) {
    case ROCK:
      return P1WIN;
    case PAPER:
      return DRAW;
    case SCISSORS:
      return P2WIN;
    default:
      throw new Error('p2 must be ROCK, PAPER or SCISSORS.');
  }
}

/**
 * Returns the result of scissors vs something else.
 * @param {string} p2
 */
function resolveScissorsVs(p2) {
  switch (p2) {
    case ROCK:
      return P2WIN;
    case PAPER:
      return P1WIN;
    case SCISSORS:
      return DRAW;
    default:
      throw new Error('p2 must be ROCK, PAPER or SCISSORS.');
  }
}