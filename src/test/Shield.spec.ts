import { describe, expect } from '@jest/globals';
import { Shield } from '../Shield';

describe('Message', () => {
  let instance: Shield;

  beforeEach(() => {
    instance = new Shield();
  });

  it('should class shield', async () => {
    expect(instance).toBeInstanceOf(Shield);
  });

  it('should return pull of shield', async () => {
    expect(instance.activeShield(true)).toBe(true);
    expect(instance.activeShield(false)).toBe(false);
  });
});
