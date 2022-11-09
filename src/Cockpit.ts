import { cockpit } from './interfaces/cockpit';
import { command } from './interfaces/command';

export class Cockpit implements cockpit {
  private changeShield: command;

  public setChangeShield(Command: command): void {
    this.changeShield = Command;
    this.changeShield.execute();
  }
}
