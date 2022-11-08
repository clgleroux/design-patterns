import { VeryLegacy } from './interfaces/decorator';
import { EventManager } from './eventManager';

import { Observer } from './interfaces/eventManager';

class VeryLegacyCode implements VeryLegacy {
  veryComplex(): string {
    return `IM VERY LEGACY CODE`;
  }
}

export class VeryLegacyCodeDecoratorA extends VeryLegacyCode {
  veryComplex(): string {
    return `${super.veryComplex()} Le DecorateurA`;
  }
}

export class VeryLegacyCodeDecoratorB extends VeryLegacyCode {
  veryComplex(): string {
    return `${super.veryComplex()} Le DecorateurB`;
  }
}

export class VeryLegacyCodeDecoratorAB extends VeryLegacyCode {
  veryComplex(): string {
    return `${new VeryLegacyCodeDecoratorA().veryComplex()}  ${new VeryLegacyCodeDecoratorB().veryComplex()}`;
  }
}

export class VeryLegacyEventManager extends VeryLegacyCode implements Observer {
 
  update(data: any) {
    return this.veryComplex()
  }

  veryComplex(): string {
    return super.veryComplex();
  }
}

export class VeryLegacyCodeFactory {
  private factories = {};

  constructor() {
    this.factories['VeryLegacyCode'] = () => new VeryLegacyCode();
    this.factories['VeryLegacyCodeDecoratorA'] = () =>
      new VeryLegacyCodeDecoratorA();
    this.factories['VeryLegacyCodeDecoratorB'] = () =>
      new VeryLegacyCodeDecoratorB();
    this.factories['VeryLegacyCodeDecoratorAB'] = () =>
      new VeryLegacyCodeDecoratorAB();
    this.factories['VeryLegacyEventManager'] = () =>
      new VeryLegacyEventManager();
  }

  public testFactory(nameLegacy: string) {
    return this.factories[nameLegacy]();
  }
}
