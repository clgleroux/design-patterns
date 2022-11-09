import { cockpit } from './interfaces/cockpit';
import { command } from './interfaces/command';
import { message } from './interfaces/message';

export class Cockpit implements cockpit {
  private changeShield: command;

  public setChangeShield(Command: command): void {
    this.changeShield = Command;
    this.changeShield.execute();
  }

  public displayMessage(message: message) {
    console.log('-------------------------');
    console.log(`|${message.subject}|`);
    console.log(`|${message.object}|`);
    console.log('-------------------------');
  }
}
