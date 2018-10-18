import { vw } from './theme.util'

describe('theme.util', () => {
  describe('vw', () => {
    test('with default base', () => {
      expect(vw(10)).toBe('0.7143vw')
    })
    test('with custom base', () => {
      expect(vw(10, 100)).toBe('10.0000vw')
    })
  })
})
