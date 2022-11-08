import { EventManager } from './EventManager';
import { Observer } from './interfaces/eventManager';
import { SpaceShip } from './SpaceShip';
import { CreatorHeatSensor } from './Sensor';

const eventManager = EventManager.getInstance();

const observerComptable: Observer = {
  update(data) {
    console.log('Je suis observer Comptable');
    if (data.resultat < 4) {
      eventManager.emit('reduction salaire', { salaire: 2 });
    }
  },
};

const testHeat = new CreatorHeatSensor("Bosch");
console.log(testHeat.sendValue());