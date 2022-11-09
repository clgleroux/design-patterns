import { command } from './command';

export interface cockpit {
  setChangeShield(Command: command): void;
  setLaunchMissile(Command: command): void;
}
