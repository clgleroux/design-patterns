import { messageFR } from '../interfaces';

export class MessageFR implements messageFR {
  titre: string;
  objet: string;

  constructor(titre: string, objet: string) {
    this.titre = titre;
    this.objet = objet;
  }

  envoyerChristineCompta(): void {
    console.log('Coucou Christine');
  }
}
