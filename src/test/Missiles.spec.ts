import { describe, expect } from '@jest/globals';
import { Missiles } from '../class/Missiles';

describe('Missiles', () => {
  let instance: Missiles;

  beforeEach(() => {
    instance = new Missiles();
  });

  it('should class missiles', async () => {
    expect(instance).toBeInstanceOf(Missiles);
  });

  it('should return pull of missiles', async () => {
    expect(instance.launchMissiles(true)).toBe(true);
    expect(instance.launchMissiles(false)).toBe(false);
  });
});
