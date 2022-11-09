import { EventManager } from './EventManager';
import { Observer } from './interfaces/eventManager';
import { SpaceShip } from './SpaceShip';
import { CreatorHeatSensor } from './Sensor';
import { Cockpit } from './Cockpit';
import { CommandActiveShield } from './command/command';
import { Shield } from './Shield';

const eventManager = EventManager.getInstance();

const observerHeatSensor: Observer = {
  update(data) {
    if (data.data.value > 35) {
      return eventManager.emit('cockpit', { danger: true });
    }
    return eventManager.emit('cockpit', { danger: false });
  },
};

const observerRadarSensor: Observer = {
  update(data) {
    if (data.data.value < 100) {
      return eventManager.emit('cockpit', { danger: true });
    }
    return eventManager.emit('cockpit', { danger: false });
  },
};

const observerCockpit: Observer = {
  update(data) {
    if (data.danger) {
      return console.log('CALL 911');
    }
    return console.log("IT'S OK");
  },
};

eventManager.on('heatSensor', observerHeatSensor);
eventManager.on('radarSensor', observerRadarSensor);
eventManager.on('cockpit', observerCockpit);

const testHeat = new CreatorHeatSensor('Bosch');

eventManager.emit('heatSensor', testHeat.sendValue());

// eventManager.on("mauvais resultat", observerComptable);
// eventManager.on("reduction salaire", observerComptable);
// eventManager.on("reduction salaire", observerDev);
// eventManager.on("demission", observerPatron);

// eventManager.emit("mauvais resultat", {resultat: 3});



let cockpit = new Cockpit();
let shield = new Shield();
cockpit.setChangeShield(new CommandActiveShield(shield, true));
console.log(shield.active);
