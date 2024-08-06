import { expect, test } from 'vitest'
import { calculateRoundResult, DRAW, WIN, LOSS, ROCK, PAPER, SCISSORS, calculateNewScores } from './app.js'

test('draws', () => {
  expect.soft(calculateRoundResult("rock", "rock")).toEqual({
    outcome: DRAW,
    message: "Both players chose rock. It's a draw.",
  })
  expect.soft(calculateRoundResult("scissors", "scissors")).toEqual({
    outcome: DRAW,
    message: "Both players chose scissors. It's a draw.",
  })
  expect.soft(calculateRoundResult("paper", "paper")).toEqual({
    outcome: DRAW,
    message: "Both players chose paper. It's a draw.",
  })
})

test('win', () => {
  expect.soft(calculateRoundResult("rock","scissors")).toEqual({
    outcome: WIN,
    message: "Player chose rock and computer chose scissors. Player wins.",
  })
  expect.soft(calculateRoundResult("scissors","paper")).toEqual({
    outcome: WIN,
    message: "Player chose scissors and computer chose paper. Player wins.",
  })
  expect.soft(calculateRoundResult("paper","rock")).toEqual({
    outcome: WIN,
    message: "Player chose paper and computer chose rock. Player wins.",
  })
})

test('loss', () => {
  expect.soft(calculateRoundResult("scissors","rock")).toEqual({
    outcome: LOSS,
    message: "Player chose scissors and computer chose rock. Computer wins.",
  })
  expect.soft(calculateRoundResult("paper","scissors")).toEqual({
    outcome: LOSS,
    message: "Player chose paper and computer chose scissors. Computer wins.",
  })
  expect.soft(calculateRoundResult("rock","paper")).toEqual({
    outcome: LOSS,
    message: "Player chose rock and computer chose paper. Computer wins.",
  })
})

test('errors', () => {
  expect.soft(() => calculateRoundResult("sfdljkasdhfjh","rock")).toThrowError(
    'Invalid player move (sfdljkasdhfjh) or computer move rock',
  )
  expect.soft(() => calculateRoundResult("rock","sdkjfhadjfh")).toThrowError(
    'Invalid player move (rock) or computer move sdkjfhadjfh',
  )
})

test("score", ()=>{
  expect.soft( calculateNewScores({playerScoreCounter: 0,
    computerScoreCounter: 0,
    drawCounter: 0,
}))

})

calculateNewScores({
playerScoreCounter: 0,
computerScoreCounter: 0,
drawCounter: 0,
    }, 'win')