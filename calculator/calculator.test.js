import {expect, test} from 'vitest'
import { calculate } from './calculator.js'

test('plus',() => {
    expect(calculate("+", 9, 10)).toBe(19)
})

    // -  param1 minus param2
    // *  param1 multiplied by param2
    // /  param1 divided by param2
    // sq param1 * param1

test('minus',() => {
    expect(calculate('-', 4, 6)).toBe(-2)
})

test('multiply',() => {
    expect(calculate('*', -6, -8)).toBe(48)
})

test('divide',()=> {
    expect(calculate('/', 121, 11)).toBe(11)
})

test('sq1',()=> {
    expect(calculate('sq', 5)).toBe(25)
})

test('sq2',()=> {
    expect(calculate('sq', 3, 44)).toBe(9)
})

test('%',() => {
    expect(calculate('%', 124, 56)).toBe(10)
})

test('🍕',() => {
    expect(calculate('🍕', -41414, 2)).toBe(10)
})