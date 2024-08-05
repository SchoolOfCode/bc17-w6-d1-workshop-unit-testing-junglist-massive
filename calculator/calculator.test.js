import {expect, test} from 'vitest'
import { calculate } from './calculator.js'

test('calcultor',() => {
    expect(calculate("+",2 ,3 )).toBe(5)
})