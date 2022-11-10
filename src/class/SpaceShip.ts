import {
  cockpit,
  missiles,
  createSensor,
  shield,
  interfaceSpaceShip,
  message,
} from '../interfaces';

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
    console.log();
    console.log('--------------------------------------');
    console.log(`| 🚀 Welcome to ${this.name} 🚀 |`);
    console.log('--------------------------------------');
    console.log();
  }

  public displayMessage(message: message) {
    console.log('--------------');
    console.log(`|${message.subject}|`);
    console.log(`|${message.object}|`);
    console.log('--------------');
    console.log('');
  }
}
