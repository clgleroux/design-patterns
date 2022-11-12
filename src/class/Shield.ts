import { shield } from '../interfaces';

export class Shield implements shield {
  active: boolean;

  activeShield(active: boolean): boolean {
    this.active = active;
    console.log(`🛡️ Le bouclier est ${this.active}`);
    return this.active;
  }
}
