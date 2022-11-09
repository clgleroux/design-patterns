import { cockpit } from "./interfaces/cockpit";
import { missiles } from "./interfaces/missiles";

export class Missiles implements missiles {
  pull: boolean;

  // constructor(active: boolean) {
  //   this.active = active;
  // }

  launchMissiles(pull: boolean) {
    this.pull = pull;
    console.log(`Les Missiles sont ${this.pull}`);
  }
}