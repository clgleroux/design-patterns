import { describe, expect } from '@jest/globals';
import { MessageFR } from '../class/MessageFR';
import { Message } from '../class/Message';
import { AdapterMessage } from '../adapter/adapter';

describe('Message', () => {
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
