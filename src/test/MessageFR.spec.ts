import { describe, expect } from '@jest/globals';
import { MessageFR } from '../MessageFR';

describe('Message', () => {
  let instance: MessageFR;
  const titre = 'mockSubject';
  const objet = 'mockObject';

  beforeEach(() => {
    instance = new MessageFR(titre, objet);
  });

  it('should class message', async () => {
    expect(instance).toBeInstanceOf(MessageFR);
    expect(instance.titre).toBe(titre);
    expect(instance.objet).toBe(objet);
  });
});
