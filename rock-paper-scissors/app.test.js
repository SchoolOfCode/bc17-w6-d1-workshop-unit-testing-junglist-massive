import { expect, test } from 'vitest'
import { calculateRoundResult, DRAW, WIN, LOSS, ROCK, PAPER, SCISSORS } from './app.js'

test('draws', () => {
  expect.soft(calculateRoundResult("rock", "rock")).toBe({
    outcome: DRAW,
    message: "Both players chose rock. It's a draw.",
  })
  expect.soft(calculateRoundResult("scissors", "scissors")).toBe({
    outcome: DRAW,
    message: "Both players chose scissors. It's a draw.",
  })
  expect.soft(calculateRoundResult("paper", "paper")).toBe({
    outcome: DRAW,
    message: "Both players chose paper. It's a draw.",
  })
})