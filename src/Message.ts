import { message, messageFR } from './interfaces/message';

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

export class MessageFR implements messageFR {
  titre: string;
  objet: string;

  constructor(titre: string, objet: string) {
    this.titre = titre;
    this.objet = objet;
  }

  envoyerChristineCompta() {
    console.log('Coucou Christine');
  }
}
