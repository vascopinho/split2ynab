import eventHandlerInst, { EventHandler } from "./EventHandler";
import { CronJob } from "cron";

export class Scheduler {
  private cronJob: CronJob;

  constructor(private readonly eventHandler: EventHandler = eventHandlerInst) {
    this.cronJob = new CronJob("*/15 * * * *", async () => {
      try {
        console.log(`Running cron at: ${new Date()}`);
        await this.eventHandler.runHandler();
      } catch (e) {
        console.error(e);
      }
    });
  }

  public async initScheduler() {
    // Start job
    if (!this.cronJob.running) {
      this.cronJob.start();
    }
  }
}

export default new Scheduler();
