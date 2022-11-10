import { describe, expect, test } from '@jest/globals';
import { Message } from './Message';

describe('Message', () => {
  let instance: Message;
  const subject = 'mock';
  const object = 'mock';

  beforeEach(() => {
    instance = new Message(subject, object);
  });

  it('should message', async () => {
    expect(instance).toBeInstanceOf(Message);
  });
});
