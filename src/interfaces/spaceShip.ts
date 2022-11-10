import { cockpit } from './cockpit';
import { message } from './message';
import { missiles } from './missiles';
import { createSensor } from './sensor';
import { shield } from './shield';

export interface interfaceSpaceShip {
  name: string;
  shield: shield;
  cockpit: cockpit;
  missiles: missiles;
  heatSensor: createSensor;
  radarSensor: createSensor;
  displayMessage(message: message): void;
}
