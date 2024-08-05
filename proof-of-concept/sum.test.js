//  import `test` and `expect` functions from Vitest
//  import the `sum` function from sum.js
//  create a bare bones test
//  run Vitest to check that it detects and passes the new test
//  inside the test:
//      call the sum function with arguments: 5 and 7
//      assert that the value returned is 12

import { expect, test } from 'vitest'
import { sum } from './sum.js'

test('wicked wicked', () => {
  expect(sum(5, 7)).toBe(12)
})