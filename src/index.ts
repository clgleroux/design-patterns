import { EventManager } from './EventManager';
import { Observer } from './interfaces/eventManager';
import { SpaceShip } from './SpaceShip';
import { VeryLegacyCodeFactory, VeryLegacyCodeDecoratorA, VeryLegacyCodeDecoratorB } from "./Decorator";

const eventManager = EventManager.getInstance();

const observerComptable: Observer = {
  update(data) {
    console.log("Je suis observer Comptable");
    if (data.resultat < 4) {
      eventManager.emit('reduction salaire', {salaire: 2});
    }
  }
}

const observerDev: Observer = {
  update(data) {
    console.log("Je suis observer Dev", data);
    if (data.salaire < 3) {
      eventManager.emit("demission", {});
    }
  }
}

const observerPatron: Observer = {
  update(data) {
    console.log(`Je suis observer Patron`);
  }
}

// eventManager.on("mauvais resultat", observerComptable);
// eventManager.on("reduction salaire", observerComptable);
// eventManager.on("reduction salaire", observerDev);
// eventManager.on("demission", observerPatron);

// eventManager.emit("mauvais resultat", {resultat: 3});
const test = new VeryLegacyCodeDecoratorA()
console.log(test.veryComplex());

const test2 = new VeryLegacyCodeDecoratorB()
console.log(test2.veryComplex());

const f = new VeryLegacyCodeFactory();

console.log(f.testFactory("VeryLegacyCodeDecoratorA").veryComplex());

// eventManager.broadcast({data: "hello"});