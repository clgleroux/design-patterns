import { describe, expect } from '@jest/globals';
import { AdapterMessage } from '../adapter/adapter';
import { Message } from '../class/Message';
import { MessageFR } from '../class/MessageFR';

describe('MessageFR', () => {
  let instance: MessageFR;
  let instanceAdapter: Message;
  const titre = 'mockSubject';
  const objet = 'mockObject';

  beforeEach(() => {
    instance = new MessageFR(titre, objet);
    instanceAdapter = new AdapterMessage(instance);
  });

  it('should class messageFR', async () => {
    expect(instance).toBeInstanceOf(MessageFR);
    expect(instance.titre).toBe(titre);
    expect(instance.objet).toBe(objet);
  });

  it('should become message class', async () => {
    expect(instanceAdapter.sendMessage()).toBeInstanceOf(Message);
  });
});
