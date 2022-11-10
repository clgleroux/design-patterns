import { describe, expect } from '@jest/globals';
import { EventManager } from '../class/EventManager';
import { Observer } from '../interfaces';

describe('EventManager', () => {
  let instance: EventManager;
  const mockObserver: Observer = {
    update(data) {
      return data + 3;
    },
  };

  beforeEach(() => {
    instance = EventManager.getInstance();
  });

  it('should class eventManager instance', async () => {
    expect(instance).toBeInstanceOf(EventManager);
  });

  it('should emit', async () => {
    instance.on('jest', mockObserver);
    expect(instance.emit('jest', 4)).toBe(4);
  });
});
