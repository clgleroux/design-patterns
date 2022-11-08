import { EventManager } from './EventManager';
import { Observer } from './interfaces/eventManager';
import { SpaceShip } from './SpaceShip';

const eventManager = EventManager.getInstance();

const observerComptable: Observer = {
  update(data) {
    console.log('Je suis observer Comptable');
    if (data.resultat < 4) {
      eventManager.emit('reduction salaire', { salaire: 2 });
    }
  },
};
