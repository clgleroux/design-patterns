import { messageFR, message } from '../interfaces/message';
import { Message } from '../Message';

export class AdapterMessage extends Message {
  private messageFR: messageFR;

  constructor(messageFR: messageFR) {
    super(messageFR.titre, messageFR.objet);
    this.messageFR = messageFR;
  }

  sendMessage(): message {
    switch (this.messageFR.titre) {
      case 'DANGER':
        this.subject = 'WARNING';
        this.object = 'Call 911';
        break;
      case 'OK':
        this.subject = 'COOL';
        this.object = "It's ok !";
        break;

      default:
        break;
    }
    console.log('NEW MESSAGE :');
    return this;
  }
}
