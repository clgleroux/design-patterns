import { messageFR } from './interfaces/messageFR';

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