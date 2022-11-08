import { VeryLegacy } from "./interfaces/decorator";

class VeryLegacyCode implements VeryLegacy {
  veryComplex(): string {
    return "IM VERY LEGACY CODE"
  }
}

export class VeryLegacyCodeDecoratorA extends VeryLegacyCode {
  veryComplex(): string {
    return `${super.veryComplex()} Le DecorateurA`;
  }
}

export class VeryLegacyCodeDecoratorB extends VeryLegacyCodeDecoratorA {
  veryComplex(): string {
    return `${super.veryComplex()} Le DecorateurB`;
  }
}

export class VeryLegacyCodeFactory {
  private factories = {};

  constructor() {
    this.factories["VeryLegacyCode"] = () => new VeryLegacyCode()
    this.factories["VeryLegacyCodeDecoratorA"] = () => new VeryLegacyCodeDecoratorA();
    this.factories["VeryLegacyCodeDecoratorB"] = () => new VeryLegacyCodeDecoratorB();
  }

  public testFactory(nameLegacy: string) {
    return this.factories[nameLegacy]();
  }
}