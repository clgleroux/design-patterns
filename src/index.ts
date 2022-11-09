import { EventManager } from './EventManager';
import { Observer } from './interfaces/eventManager';
import { SpaceShip } from './SpaceShip';
import { CreatorHeatSensor } from './Sensor';
import { Cockpit } from './Cockpit';
import { CommandActiveShield } from './command/command';
import { Shield } from './Shield';
import { Message } from './Message';
import { AdapterMessage } from './adapter/adapter';

const eventManager = EventManager.getInstance();

const cockpit = new Cockpit();

const observerHeatSensor: Observer = {
  update(data) {
    if (data.data.value > 35) {
      return eventManager.emit('cockpit', {
        info: { type: 'Heat', title: 'WARNING', object: 'Call 911' },
      });
    }
    return eventManager.emit('cockpit', {
      info: { type: 'Heat', title: 'COOL', object: "It's ok !" },
    });
  },
};

const observerRadarSensor: Observer = {
  update(data) {
    if (data.data.value < 100) {
      return eventManager.emit('cockpit', {
        info: { type: 'Radar FR', title: 'DANGER', object: 'Appelle le 18' },
      });
    }
    return eventManager.emit('cockpit', {
      info: { type: 'Radar FR', title: 'OK', object: 'Tout va bien !' },
    });
  },
};

const observerCockpit: Observer = {
  update(data) {
    if (data.info.type.includes('FR')) {
      cockpit.displayMessage(
        new AdapterMessage(data.info.title, data.info.object).sendMessage()
      );
    } else {
      cockpit.displayMessage(
        new Message(data.info.title, data.info.object).sendMessage()
      );
    }
  },
};

eventManager.on('heatSensor', observerHeatSensor);
eventManager.on('radarSensor', observerRadarSensor);
eventManager.on('cockpit', observerCockpit);

const heatSensor = new CreatorHeatSensor('Bosch');
const radarSensor = new CreatorHeatSensor('Bosch');

eventManager.emit('heatSensor', heatSensor.sendValue());
eventManager.emit('radarSensor', radarSensor.sendValue());

let shield = new Shield();
cockpit.setChangeShield(new CommandActiveShield(shield, true));
console.log(shield.active);
