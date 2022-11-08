import { EventManager } from './EventManager';
import { Observer } from './interfaces/eventManager';
import { SpaceShip } from './SpaceShip';

const eventManager = EventManager.getInstance();

const observerA: Observer = {
  update(data) {
    console.log("L'evenement : ", );
  }
}

const observerB: Observer = {
  update(data) {
    console.log("L'evenement : ", data);
  }
}

const observerC: Observer = {
  update(data) {
    console.log(`L'evenement : et ${data}`);
  }
}

eventManager.on("observerA", observerA);
eventManager.on("observerB", observerB);
eventManager.on("observerC", observerC);

eventManager.broadcast({data: "hello"});



console.log('hello world');