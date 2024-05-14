import { describe, it, expect } from 'bun:test'
import calculateEmission from './calculator';

describe('Calculator', () => {
  it('should not be 0', async () => {
    const res = await calculateEmission();
    expect(res).not.toBe(0)
  })
});
