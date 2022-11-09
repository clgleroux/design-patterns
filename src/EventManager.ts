import { Observer } from './interfaces/eventManager';

export class EventManager {
  private static instance: EventManager;
  private subscribers: Record<string, Observer[]>;

  constructor() {
    this.subscribers = {};
  }

  public static getInstance(): EventManager {
    if (!EventManager.instance) {
      EventManager.instance = new EventManager();
    }

    return EventManager.instance;
  }

  on(event: string, Observer: Observer): void {
    if (!this.subscribers[event]) this.subscribers[event] = [];
    this.subscribers[event].push(Observer);
  }

  broadcast(data: any): void {
    Object.values(this.subscribers).forEach((observables: Observer[]) =>
      observables.forEach(observable => observable.update(data))
    );
  }

  emit(event: string, data: any): void {
    // console.log(this.subscribers[event]);
    this.subscribers[event]?.forEach(observer => observer.update(data));
  }
}
