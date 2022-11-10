import { EventManager } from './EventManager';
import { Observer } from './interfaces/eventManager';
import { SpaceShip } from './SpaceShip';
import { CreatorHeatSensor, CreatorRadarSensor } from './Sensor';
import { Cockpit } from './Cockpit';
import { CommandActiveShield, CommandLaunchMissiles } from './command/command';
import { Shield } from './Shield';
import { Message } from './Message';
import { AdapterMessage } from './adapter/adapter';
import { Missiles } from './Missiles';
import { MessageFR } from './MessageFR';

const eventManager = EventManager.getInstance();

const cockpit = new Cockpit();
const heatSensor = new CreatorHeatSensor('Bosch');
const radarSensor = new CreatorRadarSensor('Bosch');
let shield = new Shield();
let missiles = new Missiles();

let magicCarpets = new SpaceShip(
  'The Magic Carpets',
  cockpit,
  shield,
  missiles,
  heatSensor,
  radarSensor
);

const observerHeatSensor: Observer = {
  update(data) {
    if (data.data.value > 35) {
      magicCarpets.missiles.launchMissiles(true);
      return eventManager.emit('cockpit', {
        info: { type: 'Heat', title: 'WARNING', object: 'Call 911' },
      });
    }
    magicCarpets.missiles.launchMissiles(false);
    return eventManager.emit('cockpit', {
      info: { type: 'Heat', title: 'COOL', object: "It's ok !" },
    });
  },
};

const observerRadarSensor: Observer = {
  update(data) {
    if (data.data.value < 100) {
      magicCarpets.shield.activeShield(true);
      return eventManager.emit('cockpit', {
        info: { type: 'Radar FR', titre: 'DANGER', objet: 'Appelle le 18' },
      });
    }
    magicCarpets.shield.activeShield(false);
    return eventManager.emit('cockpit', {
      info: { type: 'Radar FR', titre: 'OK', objet: 'Tout va bien !' },
    });
  },
};

const observerCockpit: Observer = {
  update(data) {
    if (data.info.type.includes('FR')) {
      magicCarpets.displayMessage(
        new AdapterMessage(
          new MessageFR(data.info.titre, data.info.objet)
        ).sendMessage()
      );
    } else {
      magicCarpets.displayMessage(
        new Message(data.info.title, data.info.object).sendMessage()
      );
    }
  },
};

eventManager.on('heatSensor', observerHeatSensor);
eventManager.on('radarSensor', observerRadarSensor);
eventManager.on('cockpit', observerCockpit);

eventManager.emit('heatSensor', magicCarpets.heatSensor.sendValue());
eventManager.emit('radarSensor', magicCarpets.radarSensor.sendValue());

magicCarpets.cockpit.setChangeShield(new CommandActiveShield(shield, true));
// console.log(shield.active);

magicCarpets.cockpit.setLaunchMissile(
  new CommandLaunchMissiles(missiles, true)
);
// console.log(missiles.pull);
