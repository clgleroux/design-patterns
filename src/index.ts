import { EventManager } from './EventManager';
import { Observer } from './interfaces/eventManager';
import { SpaceShip } from './SpaceShip';

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

eventManager.on("mauvais resultat", observerComptable);
eventManager.on("reduction salaire", observerComptable);
eventManager.on("reduction salaire", observerDev);
eventManager.on("demission", observerPatron);

eventManager.emit("mauvais resultat", {resultat: 3});

// eventManager.broadcast({data: "hello"});