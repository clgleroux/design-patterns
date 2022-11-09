import { cockpit } from "./interfaces/cockpit";
import { shield } from "./interfaces/shield";

export class Shield implements shield {
  active: boolean;

  // constructor(active: boolean) {
  //   this.active = active;
  // }

  activeShield(active: boolean) {
    this.active = active;
    console.log(`Le bouclier est ${this.active}`);
  }
}