import { interfaceSpaceShip } from "./interfaces/spaceship";

export class SpaceShip implements interfaceSpaceShip {
  name: string;
  shield: boolean;


  constructor() {

  }

  activeShiled(): boolean {
    return this.shield = true;
  }

  disabledShiled(): boolean {
    return this.shield = false;
  }

}

