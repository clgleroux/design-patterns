import { message } from './interfaces';

export class Message implements message {
  subject: string;
  object: string;

  constructor(subject: string, object: string) {
    this.subject = subject;
    this.object = object;
  }

  sendMessage(): message {
    console.log('NEW MESSAGE :');
    return this;
  }
}
