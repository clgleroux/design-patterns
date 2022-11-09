import { cockpit } from './interfaces/cockpit';
import { missiles } from './interfaces/missiles';
import { sensor, createSensor } from './interfaces/sensor';
import { shield } from './interfaces/shield';
import { interfaceSpaceShip } from './interfaces/spaceship';
import { message } from './interfaces/message';

export class SpaceShip implements interfaceSpaceShip {
  name: string;
  cockpit: cockpit;
  shield: shield;
  missiles: missiles;
  heatSensor: createSensor;
  radarSensor: createSensor;

  constructor(
    name: string,
    cockpit: cockpit,
    shield: shield,
    missiles: missiles,
    heatSensor: createSensor,
    radarSensor: createSensor
  ) {
    this.name = name;
    this.cockpit = cockpit;
    this.shield = shield;
    this.missiles = missiles;
    this.heatSensor = heatSensor;
    this.radarSensor = radarSensor;
  }

  public displayMessage(message: message) {
    console.log('--------------');
    console.log(`|${message.subject}|`);
    console.log(`|${message.object}|`);
    console.log('--------------');
  }
}
