import eventHandlerInst, { EventHandler } from "./EventHandler";

export class Scheduler {
  constructor(private readonly eventHandler: EventHandler = eventHandlerInst) {}

  public async initScheduler() {
    const result = await this.eventHandler.initHandler();
    console.log(result);
  }
}

export default new Scheduler();
