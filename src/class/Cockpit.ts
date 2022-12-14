import { cockpit, command } from '../interfaces';

export class Cockpit implements cockpit {
  private changeShield: command;
  private launchMissile: command;

  public setChangeShield(Command: command): void {
    this.changeShield = Command;
    this.changeShield.execute();
  }

  public setLaunchMissile(Command: command): void {
    this.launchMissile = Command;
    this.launchMissile.execute();
  }
}
