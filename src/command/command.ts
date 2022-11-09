import { command } from '../interfaces/command';
import { missiles } from '../interfaces/missiles';
import { shield } from '../interfaces/shield';

export class CommandActiveShield implements command {
  private shield: shield;
  private active: boolean;

  constructor(shield: shield, active: boolean) {
    this.shield = shield;
    this.active = active;
  }

  execute(): void {
    console.log('🧑‍🚀 Le cockpit change le bouclier');
    this.shield.activeShield(this.active);
  }
}

export class CommandLaunchMissiles implements command {
  private missiles: missiles;
  private pull: boolean;

  constructor(missiles: missiles, pull: boolean) {
    this.missiles = missiles;
    this.pull = pull;
  }

  execute(): void {
    console.log('🧑‍🚀 Le cockpit change les missiles');
    this.missiles.launchMissiles(this.pull);
  }
}
