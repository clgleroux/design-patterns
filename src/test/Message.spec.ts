import { describe, expect } from '@jest/globals';
import { Message } from '../Message';

describe('Message', () => {
  let instance: Message;
  const subject = 'mockSubject';
  const object = 'mockObject';

  beforeEach(() => {
    instance = new Message(subject, object);
  });

  it('should class message', async () => {
    expect(instance).toBeInstanceOf(Message);
    expect(instance.subject).toBe(subject);
    expect(instance.object).toBe(object);
  });

  it('should send message return this', async () => {
    expect(instance.sendMessage()).toBeInstanceOf(Message);
  });
});
