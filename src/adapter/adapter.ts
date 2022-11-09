import { message } from '../interfaces/message';
import { Message } from '../Message';

export class AdapterMessage extends Message {
  public subject: string;
  public object: string;

  constructor(subject: string, object: string) {
    super(subject, object);
  }

  sendMessage(): message {
    switch (this.subject) {
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
