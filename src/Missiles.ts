import { missiles } from './interfaces/missiles';

export class Missiles implements missiles {
  pull: boolean;

  launchMissiles(pull: boolean): boolean {
    this.pull = pull;
    console.log(`💣 Les Missiles sont ${this.pull}`);
    return this.pull;
  }
}
