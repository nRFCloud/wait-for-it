import assert from 'node:assert'
import { describe, it, mock } from 'node:test'
import { waitForIt } from './waitForIt.ts'

describe('waitForIt()', () => {
	it('returns the result of a successful promise', async () => {
		const expectedResult = 'success'
		const succeeding = mock.fn(() => Promise.resolve(expectedResult))

		const result = await waitForIt(succeeding)

		assert.strictEqual(result, expectedResult)
		assert.equal(succeeding.mock.calls.length, 1)
	})

	it('returns the error of a failing promise', async () => {
		const expectedTries = 2
		const expectedError = new Error('failure')
		const failing = mock.fn(() => Promise.reject(expectedError))

		try {
			await waitForIt(failing, expectedTries)
			assert.fail('Expected waitForIt to throw an error')
		} catch (error) {
			assert.strictEqual(error, expectedError)
		}
		assert.equal(failing.mock.calls.length, expectedTries)
	})

	it('returns the result after failing twice and succeeding on the third try', async () => {
		const expectedResult = 'success'
		const expectedTries = 3
		let callCount = 0
		const fn = mock.fn(() => {
			callCount++
			if (callCount < expectedTries) {
				return Promise.reject(new Error('failure'))
			}
			return Promise.resolve(expectedResult)
		})

		const result = await waitForIt(fn, expectedTries)

		assert.strictEqual(result, expectedResult)
		assert.equal(fn.mock.calls.length, expectedTries)
	})
})
